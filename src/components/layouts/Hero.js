/**
 * Hero
 * @param {Object} datas - The datas object
 *      @param {String} datas.subtitle - The subtitle (around words with // to highlight them)
 *      @param {String} datas.title - The title (around words with // to highlight them)
 *      @param {String[]} datas.texts - The texts
 *      @param {Object[]} datas.buttons - The buttons
 *          @param {String} datas.buttons[].text - The button text
 *          @param {Function} datas.buttons[].onClick - The button onClick function
 *      @param {String} datas.image - The image
 *
 * @param {Object} options - The options object
 *      @param {String} options.imagePosition - The image position (left or right)
 *      @param {String} options.theme - The theme (light or dark)
 */

import { Box, Button, Container, Typography } from "@mui/material";
import { Title } from "components/molecules";
import { theme } from "themes/theme";

const Hero = ({ datas, options }) => {
    return (
        <Box
            sx={{
                backgroundColor: options.theme
                    ? theme.palette[options.theme]["background"]
                    : "#fff",
                py: 8
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: "flex",
                        flexDirection:
                            options.imagePosition === "right"
                                ? "row"
                                : "row-reverse",
                        alignItems: "center",
                        gap: 8
                    }}
                >
                    <Box sx={{ flex: 1 }}>
                        {/* Title */}
                        <Title
                            datas={{
                                title: datas.title,
                                subtitle: datas.subtitle
                            }}
                            options={{ theme: options.theme }}
                        />

                        {/* Subtitle */}
                        {/* {datas.subtitle && formatTitle(datas.subtitle, "h3")} */}

                        {/* Title */}
                        {/* {datas.title && formatTitle(datas.title, "h2")} */}

                        {/* Texts */}
                        {datas.texts && (
                            <Typography
                                variant="p"
                                sx={{
                                    mb: 2,
                                    color: options.theme
                                        ? theme.palette[options.theme]["text"]
                                        : theme.palette.light.text
                                }}
                            >
                                {datas.texts.map((text, index) => (
                                    <p key={index}>{text}</p>
                                ))}
                            </Typography>
                        )}

                        {/* Buttons */}
                        {datas.buttons &&
                            datas.buttons.map((button, index) => (
                                <Button
                                    key={index}
                                    variant="contained"
                                    onClick={button.onClick}
                                    sx={{ mr: 2, mt: 2 }}
                                >
                                    {button.text}
                                </Button>
                            ))}
                    </Box>

                    {/* Image */}
                    {datas.image && (
                        <Box sx={{ flex: 1 }}>
                            <img
                                src={datas.image}
                                alt="Hero"
                                style={{ width: "100%", height: "auto" }}
                            />
                        </Box>
                    )}
                </Box>
            </Container>
        </Box>
    );
};

export default Hero;
