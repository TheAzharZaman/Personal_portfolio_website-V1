import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import { db } from "../../Files/firebase";
import "./EnrollNow.css";
// import firebase from "firebase";

const EnrollNow = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");
  const [enrolleNumber, setEnrolleNumber] = useState(0);
  const [clientFetchingCompleted, setClientFetchingCompleted] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);
  const [
    enrolledStudentsInitialList,
    setEnrolledStudentsInitialList,
  ] = useState({});

  const history = useHistory();

  // useEffect(() => {
  //   const fetchedData = async () => {
  //     await db
  //       .collection("coachingProgramming")
  //       .doc("frontEnd_batch1")
  //       .get()
  //       .then((doc) => {
  //         if (doc.exists) {
  //           console.log(doc.data());
  //           setFetchedData(doc.data());
  //           setEnrolleNumber(doc.data()?.enrolledStudents + 1);
  //           setEnrolledStudentsInitialList(doc.data()?.enrolledStudentsList);
  //           setClientFetchingCompleted(true);
  //         } else {
  //           console.log("Oops!!! Document not found");
  //         }
  //       });
  //   };
  //   fetchedData();
  // }, []);

  // ============================================ //
  // collection Name => coachingProgramming
  // doc name => frontEnd_batch1
  // enrolled student no => enrolledStudents
  // list in db => enrolledStudentsList
  // ============================================ //

  const submitHandler = async (e) => {
    e.preventDefault();
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      mobileNo === "" ||
      city === "" ||
      age === ""
    ) {
      alert(
        "Some of the mandatory fields are missing, please recheck before enrolling again!"
      );
    } else {
      history.push(
        "/coaching/front-end-development/batch1/enrollement-successful"
      );
      // const updatedEnrollmentList = [];

      // if (clientFetchingCompleted) {
      //   updatedEnrollmentList = enrolledStudentsInitialList.unshift({
      //     enrollAtNoNumber: enrolleNumber,
      //     firstName: firstName,
      //     lastName: lastName,
      //     email: email,
      //     mobileNo: mobileNo,
      //     city: city,
      //     age: age,
      //     enrollTimeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      //   });
      // } else {
      //   console.log("Client Side fetching not complete");
      // }

      // if (updatedEnrollmentList.lenght > 0) {
      //   await db.collection("coachingProgramming").doc("frontEnd_batch1").set(
      //     {
      //       enrolledStudentsList: updatedEnrollmentList,
      //     },
      //     { merge: true }
      //   );

      //   history.push(
      //     "/coaching/front-end-development/batch1/enrollement-successful"
      //   );
      // }
    }
  };

  return (
    <div className="enroll__page">
      <h3>Please fill in given details</h3>
      <form onSubmit={submitHandler} className="enroll__form">
        <div className="inputs__row">
          <div className="input">
            <span>First Name</span>
            <input
              placeholder="Enter your first name (e.g. Muhammad)"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="input">
            <span>Last Name</span>
            <input
              placeholder="Enter your last name (e.g. Ahmad)"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        <div className="inputs__row">
          <div className="input">
            <span>Email</span>
            <input
              placeholder="Enter your valid email address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input">
            <span>Whatsapp No</span>
            <input
              placeholder="Enter your mobile no"
              type="text"
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
            />
          </div>
        </div>

        <div className="inputs__row">
          <div className="input">
            <span>City</span>
            <input
              placeholder="Enter your city name"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="input">
            <span>Your Age</span>
            <input
              placeholder="Your age"
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
        </div>
        <input className="enroll__btn" type="submit" value="Enroll Now" />
      </form>
    </div>
  );
};

export default EnrollNow;
