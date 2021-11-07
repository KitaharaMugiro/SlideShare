import { Typography } from "@mui/material";
import { format } from "date-fns";

interface Props {
    title: string
    startDate: Date
    endDate: Date
}

export default (props: Props) => {
    return (
        <div>
            <Typography variant="h5" color="white">{props.title}</Typography>
            <Typography color="rgb(170,170,170)">

                {format(props.startDate, "yyyy/MM/dd hh:mm ~ ") + format(props.endDate, "yyyy/MM/dd hh:mm")}

            </Typography>
        </div>
    );
}