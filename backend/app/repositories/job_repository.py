from sqlalchemy.orm import Session

from app.models.job import Job
from app.schemas.job_schema import JobCreate


class JobRepository:

    def __init__(
        self,
        db: Session,
    ):
        self.db = db

    def create_job(
        self,
        job: JobCreate,
    ):
        db_job = Job(
            title=job.title,
            company=job.company,
            description=job.description,
        )

        self.db.add(db_job)
        self.db.commit()
        self.db.refresh(db_job)

        return db_job

    def get_all_jobs(self):
        return self.db.query(Job).all()

    def get_job_by_id(
        self,
        job_id: int,
    ):
        return (
            self.db.query(Job)
            .filter(Job.id == job_id)
            .first()
        )

    def get_job_description(
        self,
        job_id: int,
    ) -> str | None:
        job = self.get_job_by_id(job_id)

        if job is None:
            return None

        return job.description