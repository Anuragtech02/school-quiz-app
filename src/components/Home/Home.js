import React from "react";
import styles from "./Home.module.css";
import { Grid, Avatar, Divider, Paper, Card } from "@material-ui/core";
import image from "../../Assets/images/face1.jpg";
import classNames from "classnames";

export const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.personalDetails}>
        <div className={styles.profile}>
          <img src={image} alt="personal" />
        </div>
        <div className={styles.details}>
          <h3>Anurag Pal</h3>
          <h4>10th A</h4>
        </div>
      </div>
      <Divider variant="middle" />
      <Paper className={styles.academics}>
        <div className={styles.rank}>
          <h5>32</h5>
          <p>Rank</p>
        </div>
        <Divider orientation="vertical" flexItem />

        <div className={styles.tests}>
          <h5>12</h5>
          <p>Tests Taken</p>
        </div>
        <Divider orientation="vertical" flexItem />

        <div className={styles.accuracy}>
          <h5>82%</h5>
          <p>Accuracy</p>
        </div>
      </Paper>
      <div>
        <Grid spacing={2} container>
          <Grid item xs={12}>
            <Card className={styles.testsTaken}>
              <h1>2/4</h1>
              <h4>Tests taken</h4>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
