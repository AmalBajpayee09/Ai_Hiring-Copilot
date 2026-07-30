from sqlalchemy.orm import Session

from app.models.evaluation import Evaluation
from app.schemas.evaluation_schema import CandidateEvaluation


class EvaluationRepository:

    def __init__(self, db: Session):
        self.db = db

    def create_evaluation(
        self,
        candidate_id: int,
        job_description: str,
        evaluation: CandidateEvaluation,
    ) -> Evaluation:

        db_evaluation = Evaluation(
            candidate_id=candidate_id,
            job_description=job_description,
            overall_score=evaluation.overall_score,
            recommendation=evaluation.recommendation,
            strengths=evaluation.strengths,
            weaknesses=evaluation.weaknesses,
            matched_skills=evaluation.matched_skills,
            missing_skills=evaluation.missing_skills,
            interview_ready=evaluation.interview_ready,
        )

        self.db.add(db_evaluation)
        self.db.commit()
        self.db.refresh(db_evaluation)

        return db_evaluation
    
def get_job_description(
    self,
    job_id: int,
) -> str | None:

    job = self.get_job_by_id(job_id)

    if job is None:
        return None

    return job.description    

def get_all_evaluations(self):
    return self.db.query(Evaluation).all()


def get_evaluation_by_id(
    self,
    evaluation_id: int,
):
    return (
        self.db.query(Evaluation)
        .filter(Evaluation.id == evaluation_id)
        .first()
    )


def get_candidate_evaluations(
    self,
    candidate_id: int,
):
    return (
        self.db.query(Evaluation)
        .filter(Evaluation.candidate_id == candidate_id)
        .all()
    )