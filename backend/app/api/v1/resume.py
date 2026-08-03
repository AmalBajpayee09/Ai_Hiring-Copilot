from pathlib import Path
import shutil

from fastapi import APIRouter, File, HTTPException, UploadFile

from app.database.database import SessionLocal
from app.pipelines.resume_pipeline import ResumePipeline
from app.schemas.resume_schema import ResumeUploadResponse
from app.utils.file_utils import (
    generate_unique_filename,
    validate_extension,
)

router = APIRouter(
    prefix="/api/v1/resumes",
    tags=["Resumes"],
)

# Upload directory
UPLOAD_DIRECTORY = Path("uploads/resumes")
UPLOAD_DIRECTORY.mkdir(parents=True, exist_ok=True)


@router.post(
    "/upload",
    response_model=ResumeUploadResponse,
)
async def upload_resume(
    file: UploadFile = File(...),
):
    """
    Upload and process a resume.
    """

    # Validate file extension
    try:
        validate_extension(file.filename)
    except ValueError as e:
        raise HTTPException(
            status_code=400,
            detail=str(e),
        )

    # Generate unique filename
    unique_filename = generate_unique_filename(file.filename)
    file_path = UPLOAD_DIRECTORY / unique_filename

    # Save uploaded file
    try:
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to save file: {str(e)}",
        )
    finally:
        file.file.close()

    # Create database session
    db = SessionLocal()

    try:
        pipeline = ResumePipeline(db)

        extracted_text, candidate, candidate_id = pipeline.process_resume(
            str(file_path)
        )

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Resume processing failed: {str(e)}",
        )

    finally:
        db.close()

    return ResumeUploadResponse(
        success=True,
        message="Resume uploaded successfully.",
        resume_id=Path(unique_filename).stem,
        filename=unique_filename,
        text_length=len(extracted_text),
        candidate_id=candidate_id,
        candidate=candidate,
    )