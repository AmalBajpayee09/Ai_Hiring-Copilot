from typing import List

from pydantic import BaseModel, EmailStr, Field


class Education(BaseModel):
    institution: str = ""
    degree: str = ""
    field_of_study: str = ""
    cgpa: str = ""
    start_date: str = ""
    end_date: str = ""


class Experience(BaseModel):
    role: str = ""
    company: str = ""
    location: str = ""
    start_date: str = ""
    end_date: str = ""
    description: str = ""


class Project(BaseModel):
    name: str = ""
    description: str = ""
    tech_stack: List[str] = Field(default_factory=list)


class Certification(BaseModel):
    name: str = ""
    issuer: str = ""
    issue_date: str = ""


class CandidateProfile(BaseModel):
    name: str = ""

    email: EmailStr | None = None

    phone: str = ""

    linkedin: str = ""

    github: str = ""

    portfolio: str = ""

    summary: str = ""

    skills: List[str] = Field(default_factory=list)

    education: List[Education] = Field(default_factory=list)

    experience: List[Experience] = Field(default_factory=list)

    projects: List[Project] = Field(default_factory=list)

    certifications: List[Certification] = Field(default_factory=list)