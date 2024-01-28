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

import { Box, Button, Container, Typography, styled } from "@mui/material";
import { theme } from "themes/theme";

const Span = styled("span")(() => ({}));

const Hero = ({ datas, options }) => {
    const formatTitle = (title, variant) => {
        const regex = /\/\/(.*?)\/\//g; // Search for words between //
        let formattedTitle = [];
        let lastIndex = 0;
        let match;

        // Execute regex
        while ((match = regex.exec(title)) !== null) {
            const startIndex = match.index;
            const endIndex = regex.lastIndex;

            // Add text before // with default color
            formattedTitle.push(
                <Span
                    key={`text-${startIndex}`}
                    sx={{ color: theme.palette[options.theme]["text"] }}
                >
                    {title.substring(lastIndex, startIndex)}
                </Span>
            );

            // Add text between // with primary color
            formattedTitle.push(
                <Span
                    key={`highlight-${startIndex}`}
                    sx={{
                        backgroundImage: theme.palette.primary.mainGradient,
                        backgroundClip: "text",
                        color: "transparent"
                    }}
                >
                    {match[1]}
                </Span>
            );
            lastIndex = endIndex;
        }

        // Add text after // with default color
        formattedTitle.push(
            <Span
                key={`text-end`}
                sx={{ color: theme.palette[options.theme]["text"] }}
            >
                {title.substring(lastIndex)}
            </Span>
        );

        return (
            <Typography variant={variant} sx={{ mb: 2 }}>
                {formattedTitle}
            </Typography>
        );
    };
    return (
        <Box
            sx={{
                backgroundColor: theme.palette[options.theme]["background"],
                py: 8
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: "flex",
                        flexDirection:
                            options.imagePosition === "left"
                                ? "row"
                                : "row-reverse",
                        alignItems: "center"
                    }}
                >
                    <Box sx={{ flex: 1 }}>
                        {/* Subtitle */}
                        {datas.subtitle && formatTitle(datas.subtitle, "h3")}

                        {/* Title */}
                        {datas.title && formatTitle(datas.title, "h2")}

                        {/* Texts */}
                        {datas.texts && (
                            <Typography
                                variant="p"
                                sx={{
                                    mb: 2,
                                    color: theme.palette[options.theme]["text"]
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
                                style={{ maxWidth: "100%", height: "auto" }}
                            />
                        </Box>
                    )}
                </Box>
            </Container>
        </Box>
    );
};

export default Hero;
