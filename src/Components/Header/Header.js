import { Grid, Typography, Box } from "@mui/material";
import Image1 from "../../Assets/Images/moi u.png";

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
              <Typography className="h1">
                Salut je suis <br /> Yal Nguembu
              </Typography>
              <p className="signature">Developpeur, Designer graphique</p>
              <br/>
              <Box className="box_btn">
                <a href="#contact" className="btn">
                  Contactez moi
                </a>
                <a href="#contact" className="btn2">
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
