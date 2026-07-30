from fastapi import APIRouter, HTTPException

from app.database.database import SessionLocal
from app.repositories.job_repository import JobRepository
from app.schemas.job_schema import (
    JobCreate,
    JobResponse,
)

router = APIRouter(
    prefix="/api/v1/jobs",
    tags=["Jobs"],
)


@router.post(
    "/",
    response_model=JobResponse,
)
def create_job(
    job: JobCreate,
):

    db = SessionLocal()

    try:

        repository = JobRepository(db)

        db_job = repository.create_job(job)

        return db_job

    finally:
        db.close()


@router.get(
    "/",
    response_model=list[JobResponse],
)
def get_all_jobs():

    db = SessionLocal()

    try:

        repository = JobRepository(db)

        return repository.get_all_jobs()

    finally:
        db.close()


@router.get(
    "/{job_id}",
    response_model=JobResponse,
)
def get_job(
    job_id: int,
):

    db = SessionLocal()

    try:

        repository = JobRepository(db)

        job = repository.get_job_by_id(
            job_id
        )

        if job is None:

            raise HTTPException(
                status_code=404,
                detail="Job not found.",
            )

        return job

    finally:
        db.close()