const { Paper, styled } = require("@mui/material");

const Title = styled("p")(({ theme }) => ({
    fontSize: "1.2rem",
    fontWeight: 600,
    marginBlockStart: "0.5em",
    marginBlockEnd: "0.5em",
    backgroundImage: theme.palette.primary.mainGradient,
    backgroundClip: "text",
    color: "transparent"
}));

const Text = styled("p")(({ theme }) => ({
    lineHeight: 1.5,
    marginBlockStart: "0.5em",
    marginBlockEnd: "0.5em",
    color: "#28231d"
}));

const PaperCard = ({ datas, options }) => {
    return (
        <Paper
            elevation={options.elevation ? options.elevation : 1}
            sx={{
                p: 2,
                textAlign: "center",
                height: "100%"
            }}
        >
            {datas.icon && (
                <datas.icon
                    sx={{
                        fontSize: 2,
                        width: 30,
                        height: 30,
                        color: "primary.main"
                    }}
                />
            )}
            {datas.title && <Title>{datas.title}</Title>}
            {datas.description && (
                <Text sx={options.description}>{datas.description}</Text>
            )}
        </Paper>
    );
};
export default PaperCard;
