import {
    Box,
    TextField,
    IconButton,
    Paper,
    Tooltip,
} from "@mui/material";

import SendRoundedIcon from "@mui/icons-material/SendRounded";

import { useState } from "react";

export default function ChatInput({

    onSend,

    loading,

}) {

    const [text, setText] = useState("");

    function handleSend() {

        if (!text.trim()) return;

        onSend(text.trim());

        setText("");

    }

    function handleKeyDown(e) {

        if (

            e.key === "Enter" &&

            !e.shiftKey

        ) {

            e.preventDefault();

            handleSend();

        }

    }

    return (

        <Paper

            elevation={0}

            sx={{

                mt: 2,

                p: 1,

                position: "sticky",

                bottom: 0,

                zIndex: 10,

                display: "flex",

                alignItems: "flex-end",

                gap: 1,

                borderRadius: "20px",

                background:

                    "rgba(17,24,39,.95)",

                backdropFilter: "blur(18px)",

                border:

                    "1px solid rgba(255,255,255,.08)",

                boxShadow:

                    "0 8px 25px rgba(0,0,0,.35)",

            }}

        >

            <TextField

                fullWidth

                multiline

                maxRows={5}

                variant="standard"

                placeholder="Ask anything about this candidate..."

                value={text}

                onChange={(e) =>

                    setText(

                        e.target.value

                    )

                }

                onKeyDown={handleKeyDown}

                InputProps={{

                    disableUnderline: true,

                    sx: {

                        color: "white",

                        px: 2,

                        py: 1.5,

                        fontSize: 16,

                        alignItems: "flex-start",

                    },

                }}

                sx={{

                    "& textarea": {

                        color: "#F8FAFC",

                    },

                    "& textarea::placeholder": {

                        color: "#94A3B8",

                        opacity: 1,

                    },

                }}

            />

            <Tooltip title="Send Message">

                <span>

                    <IconButton

                        disabled={

                            loading ||

                            !text.trim()

                        }

                        onClick={handleSend}

                        sx={{

                            width: 52,

                            height: 52,

                            borderRadius: "16px",

                            bgcolor: "#4F7CFF",

                            color: "white",

                            transition: ".25s",

                            flexShrink: 0,

                            "&:hover": {

                                bgcolor: "#356DFF",

                                transform:

                                    "scale(1.08)",

                                boxShadow:

                                    "0 0 20px rgba(79,124,255,.45)",

                            },

                            "&.Mui-disabled": {

                                bgcolor: "#1F2937",

                                color: "#6B7280",

                            },

                        }}

                    >

                        <SendRoundedIcon />

                    </IconButton>

                </span>

            </Tooltip>

        </Paper>

    );

}