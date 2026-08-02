from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import ForeignKey
from sqlalchemy.dialects.postgresql import JSONB

from app.database.database import Base


class SkillGap(Base):
    __tablename__ = "skill_gaps"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    candidate_id = Column(
        Integer,
        ForeignKey("candidates.id"),
        nullable=False,
    )

    job_id = Column(
        Integer,
        ForeignKey("jobs.id"),
        nullable=False,
    )

    matched_skills = Column(
        JSONB,
        nullable=False,
        default=list,
    )

    missing_skills = Column(
        JSONB,
        nullable=False,
        default=list,
    )

    roadmap = Column(
        JSONB,
        nullable=False,
        default=list,
    )

    overall_readiness = Column(
        Integer,
        nullable=False,
    )