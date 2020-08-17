import React, { useState, useEffect } from "react";
import styles from "./Signup.module.css";
import {
  Card,
  Button,
  Switch,
  TextField,
  FormControlLabel,
  Collapse,
} from "@material-ui/core";
import firebase from "../../Auth/firebase";
import { withRouter } from "react-router-dom";
import classNames from "classnames";

export const Signup = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState();
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [checked, setChecked] = useState(false);
  const [subject, setSubject] = useState("");
  const [email2, setEmail2] = useState("");
  const [school, setSchool] = useState("");
  const [errorNotSame, setErrorNotSame] = useState(false);
  const [helperText, setHelperText] = useState("");

  useEffect(() => {
    document.title = "INDIPRODUCTS | Signup";
  }, []);

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!checked) {
      try {
        const db = firebase.firestore();
        const ref = db.collection("users");
        const studentRef = db.collection("students");
        const tempUserId = ref.doc().id;
        const studentId = studentRef.doc().id;
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        await ref
          .doc(tempUserId)
          .set({
            uid: tempUserId,
            displayName: name,
            email,
            mobile,
            isTeacher: false,
            secondary_mobile: null,
            recovery_email: null,
            studentId,
            subject: null,
            teacherId: null,
            pastTests: [],
            upcomingTests: [],
          })
          .then(() => {
            history.push("/");
          });
      } catch (error) {
        alert("Error : " + error);
      }
    } else {
      try {
        const db = firebase.firestore();
        const refUser = db.collection("users");
        const refTeachers = db.collection("teachers");
        const tempTeacherId = refTeachers.doc().id;
        const tempUserId = refUser.doc().id;
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        await refTeachers.doc(tempTeacherId).set({
          uid: tempUserId,
          displayName: name,
          email,
          mobile,
          isTeacher: true,
          recovery_email: email2,
          subject,
          school,
          teacherId: tempTeacherId,
        });

        await refUser
          .doc(tempUserId)
          .set({
            uid: tempUserId,
            displayName: name,
            email,
            mobile,
            isTeacher: true,
            recovery_email: email2,
            subject,
            school,
            teacherId: tempTeacherId,
          })
          .then(() => {
            history.push("/");
          })
          .catch((error) => {
            alert(error);
          });
      } catch (error) {
        alert("Error : " + error);
      }
    }
  };

  const matchPassword = (e) => {
    setConfirmPass(e.target.value);
    const temp = e.target.value;
    setErrorNotSame(false);
    setHelperText("");
    setTimeout(() => {
      if (temp !== password) {
        setHelperText("Password does not match!");
        setErrorNotSame(true);
      } else {
        setErrorNotSame(false);
        setHelperText("");
      }
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.cardWrapper}>
        <Card className={styles.card}>
          <div className={styles.heading}>
            <h2>Create Account</h2>
          </div>
          <form className={styles.form} onSubmit={handleSignup}>
            <div className={styles.textFields}>
              <div className={styles.nameContainer}>
                <TextField
                  className={classNames(styles.textField, styles.name)}
                  required
                  label="Your Name"
                  type="text"
                  variant="outlined"
                  size="small"
                  autoComplete="off"
                  value={name}
                  autoFocus
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className={styles.emailPhone}>
                <TextField
                  required
                  className={styles.textField}
                  variant="outlined"
                  type="email"
                  label="Email"
                  size="small"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  className={classNames(styles.textField)}
                  variant="outlined"
                  type="tel"
                  label="Mobile (optional)"
                  size="small"
                  autoComplete="off"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
              <div className={styles.passwords}>
                <TextField
                  required
                  error={errorNotSame}
                  className={styles.textField}
                  variant="outlined"
                  type="password"
                  label="Password"
                  size="small"
                  autoComplete="off"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <TextField
                  required
                  error={errorNotSame}
                  className={styles.textField}
                  variant="outlined"
                  type="password"
                  label="Confirm Password"
                  size="small"
                  autoComplete="off"
                  value={confirmPass}
                  helperText={helperText}
                  onChange={(e) => matchPassword(e)}
                />
              </div>
            </div>
            <div className={styles.signupBtn}>
              <FormControlLabel
                control={
                  <Switch
                    name="seller"
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                  />
                }
                label="I am a Teacher"
              />
              <Button
                variant="contained"
                style={{
                  opacity: !checked ? "1" : "0",
                  pointerEvents: !checked ? "" : "none",
                }}
                type="submit"
              >
                Signup
              </Button>
            </div>
            <Collapse in={checked}>
              {/* {checked ? ( */}
              <div
                className={classNames(styles.textFields, styles.sellerFields)}
              >
                <div className={styles.industryWrapper}>
                  <TextField
                    required={checked ? true : false}
                    variant="outlined"
                    className={classNames(styles.textField, styles.industry)}
                    size="small"
                    value={school}
                    label="School"
                    onChange={(e) => setSchool(e.target.value)}
                  />
                </div>
                <div className={styles.emailMobile}>
                  <TextField
                    required={checked ? true : false}
                    variant="outlined"
                    className={styles.textField}
                    size="small"
                    value={subject}
                    label="Subject"
                    onChange={(e) => setSubject(e.target.value)}
                  />
                  <TextField
                    variant="outlined"
                    className={styles.textField}
                    size="small"
                    value={email2}
                    label="Recovery Mobile"
                    onChange={(e) => setEmail2(e.target.value)}
                  />
                </div>

                <div
                  className={classNames(styles.signupBtn, styles.sellerSubmit)}
                >
                  <Button variant="contained" type="submit">
                    Signup
                  </Button>
                </div>
              </div>
              {/* ) : (
                " "
              )} */}
            </Collapse>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default withRouter(Signup);
