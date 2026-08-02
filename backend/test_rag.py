from app.rag.rag_service import RAGService

rag = RAGService()

answer = rag.ask(

    candidate_id=1,

    question="Tell me about candidate's FastAPI projects."

)

print(answer)