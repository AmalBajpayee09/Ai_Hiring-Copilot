from sqlalchemy.orm import Session

from app.models.interview import Interview


class InterviewRepository:

    def __init__(self, db: Session):
        self.db = db

    def create_interview(
        self,
        candidate_id: int,
        job_id: int,
        technical_questions: list,
        hr_questions: list,
    ) -> Interview:

        interview = Interview(
            candidate_id=candidate_id,
            job_id=job_id,
            technical_questions=technical_questions,
            hr_questions=hr_questions,
        )

        self.db.add(interview)
        self.db.commit()
        self.db.refresh(interview)

        return interview

    def get_interview_by_id(
        self,
        interview_id: int,
    ) -> Interview | None:

        return (
            self.db.query(Interview)
            .filter(Interview.id == interview_id)
            .first()
        )

    def get_candidate_interviews(
        self,
        candidate_id: int,
    ) -> list[Interview]:

        return (
            self.db.query(Interview)
            .filter(Interview.candidate_id == candidate_id)
            .order_by(Interview.created_at.desc())
            .all()
        )

    def get_all_interviews(self) -> list[Interview]:

        return (
            self.db.query(Interview)
            .order_by(Interview.created_at.desc())
            .all()
        )