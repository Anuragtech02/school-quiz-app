import React from "react";
import styles from "./Home.module.css";
import { Grid } from "@material-ui/core";
import classNames from "classnames";

export const Home = () => {
  return (
    <div className={styles.container}>
      <div>
        <Grid spacing={2} container>
          <Grid item xs={12}>
            <div className={classNames(styles.card, styles.testsTaken)}>
              <h1>2/4</h1>
              <h4>Tests taken</h4>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
