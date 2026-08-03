import {
    Box,
    Typography,
    Alert,
    CircularProgress,
    Paper,
    Button,
} from "@mui/material";

import {
    useEffect,
    useRef,
} from "react";

import SmartToyRoundedIcon from "@mui/icons-material/SmartToyRounded";
import DeleteSweepRoundedIcon from "@mui/icons-material/DeleteSweepRounded";

import useRag from "../../hooks/useRag";

import ChatBubble from "../../components/Chat/ChatBubble";
import ChatInput from "../../components/Chat/ChatInput";
import SuggestedQuestions from "../../components/Chat/SuggestedQuestions";

export default function Chat() {

    const {

        ask,
        clearChat,
        messages,
        loading,
        error,

    } = useRag();

    const bottomRef = useRef(null);

    useEffect(() => {

        bottomRef.current?.scrollIntoView({

            behavior: "smooth",

        });

    }, [messages]);

    const candidateId = localStorage.getItem(
        "candidate_id"
    );

    if (!candidateId) {

        return (

            <Box p={5}>

                <Alert severity="warning">

                    Please upload a resume first.

                </Alert>

            </Box>

        );

    }

    return (

        <Box

            sx={{

                height: "calc(100vh - 70px)",

                display: "flex",

                flexDirection: "column",

                px: 4,

                py: 3,

                background: "#070B14",

            }}

        >

            {/* Header */}

            <Paper

                elevation={0}

                sx={{

                    p: 3,

                    mb: 3,

                    borderRadius: 5,

                    background:

                        "linear-gradient(145deg,#111827,#0F172A)",

                    border:

                        "1px solid rgba(255,255,255,.06)",

                }}

            >

                <Box

                    display="flex"

                    justifyContent="space-between"

                    alignItems="center"

                >

                    <Box

                        display="flex"

                        alignItems="center"

                        gap={2}

                    >

                        <SmartToyRoundedIcon

                            sx={{

                                fontSize: 46,

                                color: "#4F7CFF",

                            }}

                        />

                        <Box>

                            <Typography

                                variant="h4"

                                fontWeight={700}

                            >

                                Resume AI Assistant

                            </Typography>

                            <Typography

                                color="#94A3B8"

                            >

                                Powered by RAG + Groq + FastAPI

                            </Typography>

                        </Box>

                    </Box>

                    <Button

                        variant="outlined"

                        color="error"

                        startIcon={

                            <DeleteSweepRoundedIcon />

                        }

                        onClick={clearChat}

                    >

                        Clear Chat

                    </Button>

                </Box>

                <SuggestedQuestions

                    onAsk={ask}

                />

            </Paper>

            {/* Chat */}

            <Paper

                elevation={0}

                sx={{

                    flex: 1,

                    overflowY: "auto",

                    p: 3,

                    borderRadius: 5,

                    background:

                        "rgba(17,24,39,.92)",

                    border:

                        "1px solid rgba(255,255,255,.05)",

                }}

            >

                {

                    messages.length === 0 && (

                        <Box

                            sx={{

                                display: "flex",

                                flexDirection: "column",

                                justifyContent: "center",

                                alignItems: "center",

                                height: "100%",

                            }}

                        >

                            <SmartToyRoundedIcon

                                sx={{

                                    fontSize: 70,

                                    color: "#4F7CFF",

                                    mb: 2,

                                }}

                            />

                            <Typography

                                variant="h5"

                                fontWeight={700}

                                mb={1}

                            >

                                Hello 👋

                            </Typography>

                            <Typography

                                color="#94A3B8"

                                textAlign="center"

                            >

                                Ask anything about this candidate.

                                <br />

                                Try the suggested questions above.

                            </Typography>

                        </Box>

                    )

                }

                {

                    messages.map((msg, index) => (

                        <ChatBubble

                            key={index}

                            message={msg}

                        />

                    ))

                }

                {

                    loading && (

                        <Box

                            display="flex"

                            justifyContent="center"

                            mt={3}

                        >

                            <CircularProgress />

                        </Box>

                    )

                }

                {

                    error && (

                        <Alert

                            severity="error"

                            sx={{ mt: 3 }}

                        >

                            {error}

                        </Alert>

                    )

                }

                <div ref={bottomRef} />

            </Paper>

            {/* Input */}

            <ChatInput

                onSend={ask}

                loading={loading}

            />

        </Box>

    );

}