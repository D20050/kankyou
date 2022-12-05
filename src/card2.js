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
        src="../gazou/kaen.jpg"
        alt="new my nomal"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          火炎(FIRE)
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Light it up Baby 燃やしちゃうぜyeah
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          target="_brank"
          href="https://www.youtube.com/watch?v=nS32IXrNgfw"
        >
          YouTube
        </Button>
      </CardActions>
    </Card>
  );
}
