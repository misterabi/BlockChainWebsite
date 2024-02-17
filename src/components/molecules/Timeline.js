import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineSeparator,
    timelineItemClasses
} from "@mui/lab";
import { Typography } from "@mui/material";

const TimelineComponent = ({ datas, options }) => {
    return (
        <Timeline
            position={options.position ? options.position : "alternate"}
            sx={
                options.oppositeContent
                    ? {}
                    : {
                          [`& .${timelineItemClasses.root}:before`]: {
                              flex: 0,
                              padding: 0
                          }
                      }
            }
        >
            {datas.map((item, index) => (
                <TimelineItem key={index}>
                    <TimelineSeparator>
                        <TimelineDot sx={{ backgroundColor: item.color }}>
                            {/* Icon composant created dynamically */}
                            {
                                <item.icon
                                    sx={{
                                        fontSize: 40
                                    }}
                                />
                            }
                        </TimelineDot>
                        {index < datas.length - 1 && <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent sx={{ px: 2, my: "18px" }}>
                        <Typography
                            variant="h5"
                            component="span"
                            sx={{ color: item.color, fontWeight: "bold" }}
                        >
                            {item.timeline && <span>({item.timeline})</span>}{" "}
                            {item.title || item.steps}
                        </Typography>
                        {item.description.map((desc, i) => (
                            <Typography key={i} variant="subtitle1">
                                {desc}
                            </Typography>
                        ))}
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    );
};

export default TimelineComponent;
