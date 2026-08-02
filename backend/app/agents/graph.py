from langgraph.graph import StateGraph
from langgraph.graph import END

from app.agents.state import HiringState

from app.agents.nodes import (
    decision_node,
    rag_node,
    evaluation_node,
    interview_node,
    summary_node,
    skill_gap_node,
    copilot_node,
)

builder = StateGraph(HiringState)

# -----------------------------
# Nodes
# -----------------------------

builder.add_node(
    "decision",
    decision_node,
)

builder.add_node(
    "rag",
    rag_node,
)

builder.add_node(
    "evaluation",
    evaluation_node,
)

builder.add_node(
    "interview",
    interview_node,
)

builder.add_node(
    "summary",
    summary_node,
)

builder.add_node(
    "skill_gap",
    skill_gap_node,
)

builder.add_node(
    "copilot",
    copilot_node,
)

# -----------------------------
# Entry Point
# -----------------------------

builder.set_entry_point(
    "decision"
)

# -----------------------------
# Router
# -----------------------------

builder.add_conditional_edges(

    "decision",

    lambda state: state["route"],

    {

        "rag": "rag",

        "evaluation": "evaluation",

        "interview": "interview",

        "summary": "summary",

        "skill_gap": "skill_gap",

        "copilot": "copilot",

    }

)

# -----------------------------
# End Nodes
# -----------------------------

builder.add_edge(
    "rag",
    END,
)

builder.add_edge(
    "evaluation",
    END,
)

builder.add_edge(
    "interview",
    END,
)

builder.add_edge(
    "summary",
    END,
)

builder.add_edge(
    "skill_gap",
    END,
)

builder.add_edge(
    "copilot",
    END,
)

graph = builder.compile()