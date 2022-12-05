import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        src="../gazou/new my nomal.jpg"
        alt="new my nomal"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          ニュー・マイ・ノーマル
        </Typography>
        <Typography variant="body2" color="text.secondary">
          今日もありがとうがシャイな様です
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          target="_brank"
          href="https://www.youtube.com/watch?v=E7YAf0O02Ms"
        >
          YouTube
        </Button>
      </CardActions>
    </Card>
  );
}
