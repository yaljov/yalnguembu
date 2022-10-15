import { Grid, Typography, Box } from "@mui/material";
import Image1 from "../../Assets/Images/illust_yal.png";

export default function Header() {
 
  return (
    <div>
      <Box className="main_hd">
        <Grid container direction="row-reverse">
          <Grid item xs={12} md={6} lg={6}>
            <Box className="box_img">
              <Box className="box_2">
                <img
                  src={Image1}
                  className="img"
                  alt="oups erreur de chargement"
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Box className="box_txt">
              <Typography className="text1">Salut, je suis</Typography>
              <Typography className="h1">Nguembu Yal </Typography>
              <Typography className="h2">Developpeur  d'Application</Typography>
              <p className="text_descriptif">J'allie savoir faire et experience pour a chaque fois penser, <br/> concevoir et realiser des applications intuitive,  <br/> sous diverse plateforme que soit<br/>web resposive ou alors <span className="yellow-text"> Android et IOS</span> </p>
              <br/>
              <Box className="box_btn">
                <a href="#contact" className="btn btn1">
                  Contactez moi
                </a>
                <a href="#contact" className="btn btn2">
                  Telecharger CV
                </a>
              </Box>
              
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
