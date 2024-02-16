import { theme } from "themes/theme";
const { Paper } = require("@mui/material");

const ImgCard = ({ datas, options }) => {
    return (
        <Paper
            elevation={options.elevation ? options.elevation : 12}
            sx={{
                p: 2,
                textAlign: "center",
                backgroundColor: theme.palette[options.theme]["background"],
                border: "1px solid" + theme.palette[options.theme]["border"]
                // width: "fit-content"
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
