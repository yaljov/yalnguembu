import React from "react";
import { Grid, Typography, Box, Paper } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimeLineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimeLineSeparator from "@mui/lab/TimelineSeparator";
import TimeLineDot from "@mui/lab/TimelineDot";
import TimeLineContent from "@mui/lab/TimelineContent";
import TimelineConnector from "@mui/lab/TimelineConnector";
const items = [
  {name: "React Native", image: require("../../Assets/Images/react_native-logo.png") },
  { name: "Vue.Js", image: require("../../Assets/Images/vue_js-logo.png") },
  { name: "Angular", image: require("../../Assets/Images/Angular.png") },
  { name: "Express.js", image: require("../../Assets/Images/express logo.png") },
  { name: "Laravel", image: require("../../Assets/Images/laravel-logo.png") },
  { name: "MongoDB", image: require("../../Assets/Images/mongodb-logo.png") }
];
const Nav = () => {
  return (
    <Box className="nav" id="skill">
      <span className="t1">Skills</span> <br />
      <span className="t2">Skills & Experiences</span>
    </Box>
  );
};
const Item = ({ name, image }) => {
  return (
    <Grid item xs={4} sm={3} md={4}>
      <Box className="item">
        <img src={image} alt={image} style={{ width: "70%", height: "70%" }} />
        <p>{name}</p>
      </Box>
    </Grid>
  );
};
export default function Skill() {
  return (
    <div className="skill">
      <Nav />
      <Grid container>
        <Grid item xs={12} md={6}>
          <Grid container spacing={5} style={{paddingRight:20}}>
            {items.map((item, index) => (
              <Item image={item.image} name={item.name} key={index} />
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <React.Fragment>
            <Timeline position="alternate" style={{ margin: 0, padding: 0 }}>
              <TimelineItem>
                <TimeLineOppositeContent color="text.secondary">
                  2019
                </TimeLineOppositeContent>
                <TimeLineSeparator>
                  <TimeLineDot />
                  <TimelineConnector />
                </TimeLineSeparator>
                <TimeLineContent>
                  <Paper className="timiline-card">
                    <Typography variant="h6">
                      Devellopeur stagiaire chez Envol SARL
                    </Typography>
                    <Typography color="text.secondary">
                      J'ai oocupe le poste de developpeur et ui/ux designer chez
                      young tech
                    </Typography>
                  </Paper>
                </TimeLineContent>
              </TimelineItem>
              <TimelineItem>
                <TimeLineOppositeContent color="text.secondary">
                  2020
                </TimeLineOppositeContent>
                <TimeLineSeparator>
                  <TimeLineDot />
                  <TimelineConnector />
                </TimeLineSeparator>
                <TimeLineContent>
                  <Paper className="timiline-card">
                    <Typography variant="h6">
                      Devellopeur stagiaire chez CAT
                    </Typography>
                    <Typography color="text.secondary">
                      J'ai oocupe le poste de developpeur et ui/ux designer chez
                      young tech
                    </Typography>
                  </Paper>
                </TimeLineContent>
              </TimelineItem>
              <TimelineItem>
                <TimeLineOppositeContent color="text.secondary">
                  2021
                </TimeLineOppositeContent>
                <TimeLineSeparator>
                  <TimeLineDot />
                  <TimelineConnector />
                </TimeLineSeparator>
                <TimeLineContent>
                  <Paper className="timiline-card">
                    <Typography variant="h6">
                      Devellopeur Freelance a mon propre compte
                    </Typography>
                    <Typography color="text.secondary">
                      J'ai oocupe le poste de developpeur et ui/ux designer chez
                      young tech
                    </Typography>
                  </Paper>
                </TimeLineContent>
              </TimelineItem>
            </Timeline>
          </React.Fragment>
        </Grid>
      </Grid>
    </div>
  );
}
