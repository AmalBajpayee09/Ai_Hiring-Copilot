from sqlalchemy.orm import Session

from app.models.skill_gap import SkillGap
from app.schemas.skill_gap_schema import SkillGapAnalysis


class SkillGapRepository:

    def __init__(
        self,
        db: Session,
    ):
        self.db = db

    def create_skill_gap(
        self,
        candidate_id: int,
        job_id: int,
        analysis: SkillGapAnalysis,
    ) -> SkillGap:

        db_skill_gap = SkillGap(
            candidate_id=candidate_id,
            job_id=job_id,
            matched_skills=analysis.matched_skills,
            missing_skills=[
                skill.model_dump()
                for skill in analysis.missing_skills
            ],
            roadmap=analysis.roadmap,
            overall_readiness=analysis.overall_readiness,
        )

        self.db.add(db_skill_gap)
        self.db.commit()
        self.db.refresh(db_skill_gap)

        return db_skill_gap

    def get_all_skill_gaps(self):
        return self.db.query(SkillGap).all()

    def get_skill_gap_by_id(
        self,
        skill_gap_id: int,
    ):
        return (
            self.db.query(SkillGap)
            .filter(SkillGap.id == skill_gap_id)
            .first()
        )

    def get_candidate_skill_gaps(
        self,
        candidate_id: int,
    ):
        return (
            self.db.query(SkillGap)
            .filter(
                SkillGap.candidate_id == candidate_id
            )
            .all()
        )