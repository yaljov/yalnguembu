import { Grid, Paper, Box } from "@mui/material";
import React from "react";

export default function About() {
  // const [play, setPlay] = useState(false);
  // const handelPlay = () => {
  //   setPlay(!play);
  // };
  return (
    <Box className="main_ab" id="about">
      <Grid container rowSpacing={6}>
        <Grid item xs={12} md={6}>
          <picture className="img">
            <video
              src={require("../../Assets/videos/about_me.mp4")}
              autoPlay
              controls
            ></video>
          </picture>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper variant="" className="text_box">
            <Box className="txt_box">
              <span className="t1">About me</span>
              <br />
              <span className="t2">
                Meilleurs consultation
                <br /> experience de qualite
              </span>
              <p className="texte_descriptif">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate laboriosam doloribus in illo quia architecto
                praesentium tempora accusamus hic repellendus eveniet facere rem
                voluptates dolorem neque, inventore illum nostrum vel.
                voluptates dolorem neque, inventore illum nostrum vel.
              </p>
              <a href="./pdf/CV-NGUEMBU_FOTSO_Yal_Jovane.pdf" className="btn btn2" download>
                Telecharger mon cv
              </a>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
