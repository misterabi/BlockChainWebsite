import React from "react";
import { Typography, Box, Rating, Paper, styled } from "@mui/material";

const Author = styled("p")(() => ({
    color: "#43578b"
}));

function TestimonialCard({ datas, options }) {
    return (
        <Paper
            elevation={options.elevation ? options.elevation : 1}
            sx={{
                p: 2
            }}
        >
            <Typography variant="body1" gutterBottom>
                {datas.review}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Rating name="read-only" value={datas.rating} readOnly />
                <Author sx={{ ml: 1 }}>- {datas.author}</Author>
            </Box>
        </Paper>
    );
}

export default TestimonialCard;
