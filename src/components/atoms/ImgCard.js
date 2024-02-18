import { theme } from "themes/theme";
const { Paper } = require("@mui/material");

const ImgCard = ({ datas, options }) => {
    return (
        <Paper
            elevation={options.elevation ? options.elevation : 1}
            sx={{
                p: 2,
                textAlign: "center",
                backgroundColor: theme.palette[options.theme]["background"],
                border: options.border
                    ? "1px solid" + theme.palette[options.theme]["border"]
                    : ""
            }}
        >
            <img
                src={datas.image}
                alt={datas.title}
                style={{ width: "100%" }}
            />
        </Paper>
    );
};

export default ImgCard;
