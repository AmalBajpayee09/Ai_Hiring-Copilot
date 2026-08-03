import {
    Box,
    TextField,
    Button,
    InputAdornment,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

export default function CandidateToolbar({

    search,

    setSearch,

    onAdd,

}) {

    return (

        <Box
            sx={{

                display: "flex",

                justifyContent: "space-between",

                alignItems: "center",

                mb: 3,

                gap: 2,

            }}
        >

            <TextField

                fullWidth

                placeholder="Search candidate..."

                value={search}

                onChange={(e) =>

                    setSearch(e.target.value)

                }

                InputProps={{

                    startAdornment: (

                        <InputAdornment position="start">

                            <SearchIcon />

                        </InputAdornment>

                    ),

                }}

            />

            <Button

                variant="contained"

                startIcon={<AddIcon />}

                onClick={onAdd}

            >

                Add Candidate

            </Button>

        </Box>

    );

}