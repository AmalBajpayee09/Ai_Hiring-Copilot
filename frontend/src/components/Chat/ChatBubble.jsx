import {
    Box,
    Paper,
    Typography,
    Stack,
    Chip,
    Divider,
    IconButton,
    Tooltip,
} from "@mui/material";

import SmartToyRoundedIcon from "@mui/icons-material/SmartToyRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";

export default function ChatBubble({ message }) {

    const isUser = message.sender === "user";

    function copyAnswer() {

        navigator.clipboard.writeText(

            typeof message.text === "string"

                ? message.text

                : JSON.stringify(

                    message.text,

                    null,

                    2

                )

        );

    }

    function renderValue(value) {

        if (Array.isArray(value)) {

            return (

                <Stack
                    direction="row"
                    flexWrap="wrap"
                    gap={1}
                    mt={1}
                >

                    {

                        value.map((item, index) => (

                            <Chip
                                key={index}
                                label={item}
                                color="primary"
                                variant="filled"
                            />

                        ))

                    }

                </Stack>

            );

        }

        if (

            typeof value === "object" &&

            value !== null

        ) {

            return (

                <Paper
                    elevation={0}
                    sx={{
                        mt: 2,
                        p: 2,
                        borderRadius: 3,
                        bgcolor: "#0F172A",
                        border:
                            "1px solid rgba(255,255,255,.06)",
                    }}
                >

                    {

                        Object.entries(value).map(

                            ([key, val]) => (

                                <Box
                                    key={key}
                                    mb={2}
                                >

                                    <Typography
                                        fontWeight={700}
                                        color="#60A5FA"
                                        mb={1}
                                    >

                                        {key}

                                    </Typography>

                                    {

                                        renderValue(val)

                                    }

                                </Box>

                            )

                        )

                    }

                </Paper>

            );

        }

        return (

            <Typography
                lineHeight={1.8}
                whiteSpace="pre-wrap"
            >

                {String(value)}

            </Typography>

        );

    }

    function renderAnswer(answer) {

        if (message.loading) {

            return (

                <Typography
                    sx={{
                        fontStyle: "italic",
                        color: "#CBD5E1",
                    }}
                >

                    🤖 Thinking...

                </Typography>

            );

        }

        if (typeof answer === "string") {

            return (

                <Typography
                    lineHeight={1.8}
                    whiteSpace="pre-wrap"
                >

                    {answer}

                </Typography>

            );

        }

        return (

            <Box>

                {

                    Object.entries(answer).map(

                        ([key, value]) => (

                            <Box
                                key={key}
                                mb={3}
                            >

                                <Typography
                                    variant="subtitle1"
                                    fontWeight={700}
                                    color="#60A5FA"
                                >

                                    {key}

                                </Typography>

                                <Divider
                                    sx={{
                                        my: 1,
                                        borderColor:
                                            "rgba(255,255,255,.08)",
                                    }}
                                />

                                {

                                    renderValue(value)

                                }

                            </Box>

                        )

                    )

                }

            </Box>

        );

    }

    return (

        <Box
            sx={{
                display: "flex",
                justifyContent:
                    isUser
                        ? "flex-end"
                        : "flex-start",
                mb: 3,
            }}
        >

            <Box
                sx={{
                    display: "flex",
                    gap: 2,
                    maxWidth: "82%",
                    flexDirection:
                        isUser
                            ? "row-reverse"
                            : "row",
                    alignItems: "flex-start",
                }}
            >

                <Box
                    sx={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor:
                            isUser
                                ? "#4F7CFF"
                                : "#1E293B",
                        flexShrink: 0,
                    }}
                >

                    {

                        isUser

                            ?

                            <PersonRoundedIcon />

                            :

                            <SmartToyRoundedIcon />

                    }

                </Box>

                <Paper
                    elevation={0}
                    sx={{

                        px: 3,

                        py: 2,

                        borderRadius: 4,

                        background:

                            isUser

                                ?

                                "linear-gradient(135deg,#4F7CFF,#6C63FF)"

                                :

                                "#111827",

                        border:

                            isUser

                                ?

                                "none"

                                :

                                "1px solid rgba(255,255,255,.06)",

                        position: "relative",

                        transition: ".25s",

                        "&:hover": {

                            transform: "translateY(-2px)",

                        },

                    }}
                >

                    {

                        renderAnswer(

                            message.text

                        )

                    }

                    {

                        !isUser &&

                        !message.loading && (

                            <Box
                                display="flex"
                                justifyContent="flex-end"
                                mt={2}
                            >

                                <Tooltip title="Copy">

                                    <IconButton
                                        size="small"
                                        onClick={copyAnswer}
                                        sx={{
                                            color: "#94A3B8",
                                        }}
                                    >

                                        <ContentCopyRoundedIcon
                                            fontSize="small"
                                        />

                                    </IconButton>

                                </Tooltip>

                            </Box>

                        )

                    }

                </Paper>

            </Box>

        </Box>

    );

}