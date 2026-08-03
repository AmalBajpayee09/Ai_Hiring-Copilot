import { useState, useEffect } from "react";

import {
    Box,
    Typography,
    CircularProgress,
} from "@mui/material";

import CandidateTable from "../../components/Candidate/CandidateTable";
import CandidateToolbar from "../../components/Candidate/CandidateToolbar";
import CandidateDrawer from "../../components/Candidate/CandidateDrawer";

import useCandidates from "../../hooks/useCandidates";

export default function Candidates() {

    const {
        candidates,
        loading,
    } = useCandidates();

    const [search, setSearch] = useState("");

    const [open, setOpen] = useState(false);

    const [list, setList] = useState([]);

    useEffect(() => {

        setList(candidates);

    }, [candidates]);

    const filtered = list.filter((candidate) =>
        candidate.name
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    if (loading) {

        return (

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                }}
            >
                <CircularProgress />
            </Box>

        );

    }

    return (

        <Box
            sx={{
                // ml: "280px",
                // mt: "72px",
                px: 4,
                py: 4,
                background: "#070B14",
                minHeight: "100vh",
            }}
        >

            <Typography
                variant="h4"
                fontWeight={700}
                mb={3}
            >
                👨‍💼 Candidates
            </Typography>

            <CandidateToolbar
                search={search}
                setSearch={setSearch}
                onAdd={() => setOpen(true)}
            />

            <CandidateTable
                candidates={filtered}
            />

            <CandidateDrawer
                open={open}
                onClose={() => setOpen(false)}
                onSave={(candidate) =>
                    setList((prev) => [candidate, ...prev])
                }
            />

        </Box>

    );

}