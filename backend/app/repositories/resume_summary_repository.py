from sqlalchemy.orm import Session

from app.models.resume_summary import ResumeSummary
from app.schemas.resume_summary_schema import (
    ResumeSummaryAnalysis,
)


class ResumeSummaryRepository:

    def __init__(
        self,
        db: Session,
    ):
        self.db = db

    def create_summary(
        self,
        candidate_id: int,
        summary: ResumeSummaryAnalysis,
    ) -> ResumeSummary:

        db_summary = ResumeSummary(
            candidate_id=candidate_id,
            headline=summary.headline,
            experience=summary.experience,
            education=summary.education,
            top_skills=summary.top_skills,
            strengths=summary.strengths,
            weaknesses=summary.weaknesses,
            hire_decision=summary.hire_decision,
            overall_summary=summary.overall_summary,
        )

        self.db.add(db_summary)
        self.db.commit()
        self.db.refresh(db_summary)

        return db_summary

    def get_all_summaries(self):
        return self.db.query(ResumeSummary).all()

    def get_summary_by_candidate(
        self,
        candidate_id: int,
    ):
        return (
            self.db.query(ResumeSummary)
            .filter(
                ResumeSummary.candidate_id == candidate_id
            )
            .first()
        )