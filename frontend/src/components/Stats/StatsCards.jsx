import Grid from "@mui/material/Grid";

import GroupsIcon from "@mui/icons-material/Groups";
import WorkIcon from "@mui/icons-material/Work";
import QuizIcon from "@mui/icons-material/Quiz";
import PsychologyIcon from "@mui/icons-material/Psychology";

import StatCard from "./StatCard";

const cards = [
    {
        title: "Candidates",
        value: 124,
        growth: "+12%",
        color: "#4F7CFF",
        icon: <GroupsIcon fontSize="large" />,
    },
    {
        title: "Jobs",
        value: 18,
        growth: "+5%",
        color: "#8B5CF6",
        icon: <WorkIcon fontSize="large" />,
    },
    {
        title: "Interviews",
        value: 91,
        growth: "+18%",
        color: "#06B6D4",
        icon: <QuizIcon fontSize="large" />,
    },
    {
        title: "AI Accuracy",
        value: 96,
        growth: "+2%",
        color: "#22C55E",
        icon: <PsychologyIcon fontSize="large" />,
    },
];

export default function StatsCards() {

    return (

        <Grid
            container
            spacing={3}
        >

            {

                cards.map((card) => (

                    <Grid
                        key={card.title}
                        size={{ xs: 12, sm: 6, lg: 3 }}
                    >

                        <StatCard
                            {...card}
                        />

                    </Grid>

                ))

            }

        </Grid>

    );

}