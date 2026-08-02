from app.agents.hiring_agent import HiringAgent

agent = HiringAgent()

# -----------------------------------
# Evaluation
# -----------------------------------

print("=" * 80)
print("EVALUATION")
print("=" * 80)

print(

    agent.ask(

        4,

        "evaluate candidate"

    )

)

# -----------------------------------
# Interview
# -----------------------------------

print("\n" + "=" * 80)
print("INTERVIEW")
print("=" * 80)

print(

    agent.ask(

        4,

        "generate interview"

    )

)

# -----------------------------------
# Resume Summary
# -----------------------------------

print("\n" + "=" * 80)
print("RESUME SUMMARY")
print("=" * 80)

print(

    agent.ask(

        4,

        "resume summary"

    )

)

# -----------------------------------
# Skill Gap
# -----------------------------------

print("\n" + "=" * 80)
print("SKILL GAP")
print("=" * 80)

print(

    agent.ask(

        4,

        "skill gap analysis"

    )

)

# -----------------------------------
# RAG
# -----------------------------------

print("\n" + "=" * 80)
print("RAG")
print("=" * 80)

print(

    agent.ask(

        4,

        "what projects has this candidate worked on?"

    )

)

# -----------------------------------
# AI Copilot
# -----------------------------------

print("\n" + "=" * 80)
print("AI COPILOT")
print("=" * 80)

print(

    agent.ask(

        4,

        "Should I hire this candidate?"

    )

)