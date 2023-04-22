import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import test from "../../../../assets/test-picture.jpg";
import Mail from "../../../../assets/mail.png";
import Price from "../../../../assets/price.png";

export default function ImgMediaCard() {
  return (
    <Card
      style={{ border: "none", boxShadow: "none" }}
      sx={{ maxWidth: 250 }}
      className="mt-10">
      <CardMedia
        className="rounded-2xl"
        component="img"
        alt=""
        height="140"
        image={test}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lorem.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
          laudantium velit asperiores esse! Est error animi quisquam, dolorum,
          tempora, praesentium minima labore enim autem fugit cumque nisi quos
          iure minus!
        </Typography>
      </CardContent>
      <CardActions>
        <img className="w-4 ml-1" src={Price} alt="" />
        <p className="font-mono text-base leading-4 not-italic font-bold ">
          130000
        </p>
        <img className="cursor-pointer pl-28" src={Mail} alt="" />
      </CardActions>
    </Card>
  );
}
