import { Box, Container, Grid } from "@mui/material";
import { ImgCard } from "components/atoms";
import { PaperCard } from "components/atoms";
import { TestimonialCard } from "components/atoms";
import React from "react";
import { theme } from "themes/theme";

const ItemsList = ({ type, items, options, style }) => {
    const components = {
        ImgCard,
        PaperCard,
        TestimonialCard
    };

    return (
        <Box
            sx={{
                backgroundColor: theme.palette[options.theme]["background"],
                pb: 8,
                ...style
            }}
        >
            <Container maxWidth="lg">
                <Grid
                    container
                    spacing={3}
                    justifyContent="center"
                    alignItems={
                        options.alignItems ? options.alignItems : "flex-start"
                    }
                >
                    {items.map((item, index) => {
                        return (
                            <Grid
                                key={index}
                                item
                                xs={
                                    options.breakpoints &&
                                    options.breakpoints.xs
                                        ? options.breakpoints.xs
                                        : 6
                                }
                                md={
                                    options.breakpoints &&
                                    options.breakpoints.xs
                                        ? options.breakpoints.xs
                                        : 3
                                }
                            >
                                {React.createElement(components[type], {
                                    datas: item,
                                    options
                                })}
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </Box>
    );
};

export default ItemsList;
