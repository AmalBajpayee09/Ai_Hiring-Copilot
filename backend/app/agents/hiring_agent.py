from app.agents.graph import graph


class HiringAgent:

    def ask(

        self,

        candidate_id,

        question,

    ):

        result = graph.invoke(

            {

                "candidate_id": candidate_id,

                "question": question,

            }

        )

        return {

            "route": result.get("route"),

            "answer": result.get("answer"),

        }