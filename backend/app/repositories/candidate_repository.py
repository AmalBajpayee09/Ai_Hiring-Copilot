from sqlalchemy.orm import Session

from app.models.candidate import Candidate
from app.schemas.candidate_schema import (
    CandidateProfile,
    Education,
    Experience,
    Project,
    Certification,
)


class CandidateRepository:
    def __init__(
        self,
        db: Session,
    ):
        self.db = db

    def create_candidate(
        self,
        candidate: CandidateProfile,
    ) -> Candidate:

        db_candidate = Candidate(
            name=candidate.name,
            email=candidate.email,
            phone=candidate.phone,
            linkedin=candidate.linkedin,
            github=candidate.github,
            portfolio=candidate.portfolio,
            summary=candidate.summary,
            skills=candidate.skills,
            education=[
                item.model_dump()
                for item in candidate.education
            ],
            experience=[
                item.model_dump()
                for item in candidate.experience
            ],
            projects=[
                item.model_dump()
                for item in candidate.projects
            ],
            certifications=[
                item.model_dump()
                for item in candidate.certifications
            ],
        )

        try:
            self.db.add(db_candidate)
            self.db.commit()
            self.db.refresh(db_candidate)

        except Exception:
            self.db.rollback()
            raise

        return db_candidate

    def get_all_candidates(self):
        return self.db.query(Candidate).all()

    def get_candidate_by_id(
        self,
        candidate_id: int,
    ):
        return (
            self.db.query(Candidate)
            .filter(Candidate.id == candidate_id)
            .first()
        )

    def delete_candidate(
        self,
        candidate_id: int,
    ):

        candidate = self.get_candidate_by_id(
            candidate_id
        )

        if candidate is None:
            return None

        self.db.delete(candidate)
        self.db.commit()

        return candidate

    def get_candidate_profile(
        self,
        candidate_id: int,
    ) -> CandidateProfile | None:

        candidate = self.get_candidate_by_id(
            candidate_id
        )

        if candidate is None:
            return None

        return CandidateProfile(
            name=candidate.name,
            email=candidate.email,
            phone=candidate.phone,
            linkedin=candidate.linkedin,
            github=candidate.github,
            portfolio=candidate.portfolio,
            summary=candidate.summary,
            skills=candidate.skills,
            education=[
                Education(**item)
                for item in candidate.education
            ],
            experience=[
                Experience(**item)
                for item in candidate.experience
            ],
            projects=[
                Project(**item)
                for item in candidate.projects
            ],
            certifications=[
                Certification(**item)
                for item in candidate.certifications
            ],
        )