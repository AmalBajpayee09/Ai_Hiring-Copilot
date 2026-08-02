from sqlalchemy import Column
from sqlalchemy import ForeignKey
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy.dialects.postgresql import JSONB

from app.database.database import Base


class ResumeSummary(Base):
    __tablename__ = "resume_summaries"

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

    headline = Column(
        String,
        nullable=False,
    )

    experience = Column(
        String,
        nullable=False,
    )

    education = Column(
        String,
        nullable=False,
    )

    top_skills = Column(
        JSONB,
        nullable=False,
        default=list,
    )

    strengths = Column(
        JSONB,
        nullable=False,
        default=list,
    )

    weaknesses = Column(
        JSONB,
        nullable=False,
        default=list,
    )

    hire_decision = Column(
        String,
        nullable=False,
    )

    overall_summary = Column(
        String,
        nullable=False,
    )