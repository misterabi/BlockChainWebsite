import { Box, Typography, styled } from "@mui/material";
import { theme } from "themes/theme";

const Span = styled("span")(() => ({}));

const Title = ({ datas, options }) => {
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
                    sx={{
                        color: options.theme
                            ? theme.palette[options.theme]["text"]
                            : theme.palette.light.text
                    }}
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
                sx={{
                    color: options.theme
                        ? theme.palette[options.theme]["text"]
                        : theme.palette.light.text
                }}
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
        <Box>
            {datas.subtitle && formatTitle(datas.subtitle, "h3")}

            {datas.title && formatTitle(datas.title, "h2")}
        </Box>
    );
};

export default Title;
