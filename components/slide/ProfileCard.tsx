import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { Button } from "@mui/material";
import FollowButton from "../common/FollowButton";
import { useTranslations } from "use-intl";

interface Props {
    name: string
    subtitle: string
    description: string
    isAdmin: boolean
    userId?: string | null
    onClickEdit: () => void
}

export default function ProfileCard(props: Props) {
    const t = useTranslations("Profile")

    return (
        <Card sx={{ maxWidth: 345 }} style={{ position: "relative" }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {props.name.charAt(0) || "R"}
                    </Avatar>
                }
                title={props.name}
                subheader={props.subtitle}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>

            </CardContent>
            <div style={{ position: "absolute", top: 10, right: 10 }}>
                {props.isAdmin ? <Button onClick={props.onClickEdit}>{t("edit")}</Button> : <FollowButton userId={props.userId} />}
            </div>
        </Card>
    );
}
