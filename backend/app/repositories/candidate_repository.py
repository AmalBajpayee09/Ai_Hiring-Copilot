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

        # Check if candidate already exists
        existing_candidate = (
            self.db.query(Candidate)
            .filter(Candidate.email == candidate.email)
            .first()
        )

        if existing_candidate:

            # Update existing candidate
            existing_candidate.name = candidate.name
            existing_candidate.phone = candidate.phone
            existing_candidate.linkedin = candidate.linkedin
            existing_candidate.github = candidate.github
            existing_candidate.portfolio = candidate.portfolio
            existing_candidate.summary = candidate.summary
            existing_candidate.skills = candidate.skills

            existing_candidate.education = [
                item.model_dump()
                for item in candidate.education
            ]

            existing_candidate.experience = [
                item.model_dump()
                for item in candidate.experience
            ]

            existing_candidate.projects = [
                item.model_dump()
                for item in candidate.projects
            ]

            existing_candidate.certifications = [
                item.model_dump()
                for item in candidate.certifications
            ]

            try:
                self.db.commit()
                self.db.refresh(existing_candidate)

            except Exception:
                self.db.rollback()
                raise

            return existing_candidate

        # -------------------------
        # New Candidate
        # -------------------------

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