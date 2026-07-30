from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy.dialects.postgresql import JSONB

from app.database.database import Base


class Candidate(Base):
    __tablename__ = "candidates"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    name = Column(
        String(255),
        nullable=False,
    )

    email = Column(
        String(255),
        nullable=True,
        unique=True,
    )

    phone = Column(
        String(30),
    )

    linkedin = Column(
        String(500),
    )

    github = Column(
        String(500),
    )

    portfolio = Column(
        String(500),
    )

    summary = Column(
        String,
    )

    skills = Column(
        JSONB,
        nullable=False,
        default=list,
    )

    education = Column(
        JSONB,
        nullable=False,
        default=list,
    )

    experience = Column(
        JSONB,
        nullable=False,
        default=list,
    )

    projects = Column(
        JSONB,
        nullable=False,
        default=list,
    )

    certifications = Column(
        JSONB,
        nullable=False,
        default=list,
    )