import {
    Paper,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Chip,
    Avatar,
    Stack,
    IconButton,
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import SmartToyIcon from "@mui/icons-material/SmartToy";

export default function CandidateTable({ candidates }) {

    return (

        <TableContainer
            component={Paper}
            elevation={0}
            sx={{
                background: "linear-gradient(180deg,#151F31,#101826)",
                border: "1px solid rgba(255,255,255,.06)",
                borderRadius: 4,
            }}
        >

            <Typography
                variant="h5"
                sx={{
                    p: 3,
                    pb: 1,
                    fontWeight: 700,
                }}
            >
                Candidate List
            </Typography>

            <Table>

                <TableHead>

                    <TableRow>

                        <TableCell>Name</TableCell>

                        <TableCell>Email</TableCell>

                        <TableCell>Experience</TableCell>

                        <TableCell>Resume</TableCell>

                        <TableCell>AI</TableCell>

                        <TableCell>Status</TableCell>

                        <TableCell align="center">
                            Actions
                        </TableCell>

                    </TableRow>

                </TableHead>

                <TableBody>

                    {

                        candidates.map((candidate) => (

                            <TableRow
                                hover
                                key={candidate.id}
                            >

                                <TableCell>

                                    <Stack
                                        direction="row"
                                        spacing={2}
                                        alignItems="center"
                                    >

                                        <Avatar>
                                            {candidate.name[0]}
                                        </Avatar>

                                        <Typography>

                                            {candidate.name}

                                        </Typography>

                                    </Stack>

                                </TableCell>

                                <TableCell>

                                    {candidate.email}

                                </TableCell>

                                <TableCell>

                                    {candidate.experience}

                                </TableCell>

                                <TableCell>

                                    <Chip
                                        color="primary"
                                        label={`${candidate.resumeScore}%`}
                                    />

                                </TableCell>

                                <TableCell>

                                    <Chip
                                        color="success"
                                        label={`${candidate.aiScore}%`}
                                    />

                                </TableCell>

                                <TableCell>

                                    <Chip
                                        color="warning"
                                        label={candidate.status}
                                    />

                                </TableCell>

                                <TableCell align="center">

                                    <IconButton>

                                        <VisibilityIcon />

                                    </IconButton>

                                    <IconButton>

                                        <SmartToyIcon />

                                    </IconButton>

                                    <IconButton color="error">

                                        <DeleteIcon />

                                    </IconButton>

                                </TableCell>

                            </TableRow>

                        ))

                    }

                </TableBody>

            </Table>

        </TableContainer>

    );

}