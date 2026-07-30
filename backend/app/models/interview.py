from datetime import datetime

from sqlalchemy import DateTime
from sqlalchemy import ForeignKey
from sqlalchemy import JSON
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column

from app.database.database import Base


class Interview(Base):
    __tablename__ = "interviews"

    id: Mapped[int] = mapped_column(
        primary_key=True,
        index=True,
    )

    candidate_id: Mapped[int] = mapped_column(
        ForeignKey("candidates.id"),
    )

    job_id: Mapped[int] = mapped_column(
        ForeignKey("jobs.id"),
    )

    technical_questions: Mapped[list] = mapped_column(
        JSON,
    )

    hr_questions: Mapped[list] = mapped_column(
        JSON,
    )

    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        default=datetime.utcnow,
    )