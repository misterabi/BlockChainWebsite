const { Paper, styled } = require("@mui/material");

const Title = styled("p")(({ theme }) => ({
    fontSize: "1.5rem",
    fontWeight: 800,
    marginBlockStart: "0.5em",
    marginBlockEnd: "0.5em",
    color: theme.palette.light.text
    // backgroundImage: theme.palette.primary.mainGradient,
    // backgroundClip: "text",
    // color: "transparent"
}));

const Text = styled("p")(({ theme }) => ({
    fontSize: "0.9rem",
    marginBlockStart: "0.5em",
    marginBlockEnd: "0.5em",
    textTransform: "uppercase",
    color: "#696560"
}));

const NumberCard = ({ datas, options }) => {
    return (
        <Paper
            elevation={options.elevation ? options.elevation : 12}
            sx={{
                p: 2,
                textAlign: "center"
            }}
        >
            {datas.number && <Title>{datas.number}</Title>}
            {datas.text && <Text>{datas.text}</Text>}
        </Paper>
    );
};

export default NumberCard;
