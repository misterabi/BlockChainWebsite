import { Box, Container, Grid } from "@mui/material";
import { NumberCard } from "components/molecules";
import { ImgCard } from "components/molecules";
import React from "react";
import { theme } from "themes/theme";

const ItemsList = ({ type, items, options }) => {
    const components = {
        NumberCard,
        ImgCard
    };

    return (
        <Box
            sx={{
                backgroundColor: theme.palette[options.theme]["background"],
                pb: 8
            }}
        >
            <Container maxWidth="lg">
                <Grid
                    container
                    spacing={3}
                    justifyContent="center"
                    alignItems="center"
                >
                    {items.map((item, index) => {
                        return (
                            <Grid
                                key={index}
                                item
                                xs={
                                    options.breadcrumbs &&
                                    options.breadcrumbs.xs
                                        ? options.breadcrumbs.xs
                                        : 6
                                }
                                md={
                                    options.breadcrumbs &&
                                    options.breadcrumbs.xs
                                        ? options.breadcrumbs.xs
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
