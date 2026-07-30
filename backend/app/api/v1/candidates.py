from fastapi import APIRouter, HTTPException

from app.database.database import SessionLocal
from app.repositories.candidate_repository import CandidateRepository

router = APIRouter(
    prefix="/api/v1/candidates",
    tags=["Candidates"],
)


@router.get("/")
def get_all_candidates():
    """
    Get all candidates.
    """

    db = SessionLocal()

    try:
        repository = CandidateRepository(db)

        candidates = repository.get_all_candidates()

        return {
            "success": True,
            "count": len(candidates),
            "data": candidates,
        }

    finally:
        db.close()


@router.get("/{candidate_id}")
def get_candidate(
    candidate_id: int,
):
    """
    Get a single candidate by ID.
    """

    db = SessionLocal()

    try:
        repository = CandidateRepository(db)

        candidate = repository.get_candidate_by_id(
            candidate_id
        )

        if candidate is None:
            raise HTTPException(
                status_code=404,
                detail="Candidate not found.",
            )

        return {
            "success": True,
            "data": candidate,
        }

    finally:
        db.close()


@router.delete("/{candidate_id}")
def delete_candidate(
    candidate_id: int,
):
    """
    Delete candidate.
    """

    db = SessionLocal()

    try:
        repository = CandidateRepository(db)

        candidate = repository.delete_candidate(
            candidate_id
        )

        if candidate is None:
            raise HTTPException(
                status_code=404,
                detail="Candidate not found.",
            )

        return {
            "success": True,
            "message": "Candidate deleted successfully.",
        }

    finally:
        db.close()