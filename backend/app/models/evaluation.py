from sqlalchemy import Boolean, ForeignKey, Integer, Text
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy.orm import Mapped, mapped_column

from app.database.database import Base


class Evaluation(Base):
    __tablename__ = "evaluations"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)

    candidate_id: Mapped[int] = mapped_column(
        ForeignKey("candidates.id", ondelete="CASCADE")
    )

    job_description: Mapped[str] = mapped_column(Text)

    overall_score: Mapped[int] = mapped_column(Integer)

    recommendation: Mapped[str] = mapped_column(Text)

    strengths: Mapped[list] = mapped_column(JSONB)

    weaknesses: Mapped[list] = mapped_column(JSONB)

    matched_skills: Mapped[list] = mapped_column(JSONB)

    missing_skills: Mapped[list] = mapped_column(JSONB)

    interview_ready: Mapped[bool] = mapped_column(Boolean)