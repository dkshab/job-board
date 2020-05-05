import React, { useState, useContext, useEffect } from "react";
import firebase from "firebase/app";

import { UserContext } from "../providers/UserProvider";
import { firestore, storage } from "../firebase";

const About = () => {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [testFilename, setTestFilename] = useState("");

  const user = useContext(UserContext);
  let userRef = null;

  if (user) {
    userRef = firestore.doc(`users/${user.uid}`);
  }

  const handleChange = (event) => {
    setFile(event.target.files[0]);
    setFilename(event.target.files[0].name);
    console.log(filename);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (user && file) {
      if (user.resumeURL) {
        let tempFileRef = storage.refFromURL(user.resumeURL);

        tempFileRef
          .delete()
          .then(() => {
            console.log("File deleted!");
            userRef.update({
              resumeURL: firebase.firestore.FieldValue.delete(),
            });
          })
          .catch((error) => {
            console.error(error);
          });
      }
      storage
        .ref()
        .child("resumes")
        .child(user.uid)
        .child(filename)
        .put(file)
        .then((response) => response.ref.getDownloadURL())
        .then((resumeURL) => userRef.update({ resumeURL }));

      console.log("We have a file", file);
    } else {
      console.log("No bueno!");
    }
  };

  useEffect(() => {
    if (user) {
      if (user.resumeURL) {
        //console.log(user.resumeURL);

        let filenameRef = storage.refFromURL(user.resumeURL);
        filenameRef
          .getMetadata()
          .then((metadata) => {
            console.log(metadata.name);
            setTestFilename(metadata.name);
          })
          .catch((error) => {
            console.error(error);
          });
      }
      console.log("Test");
    }
  }, [user]);

  return (
    <div>
      Add something relevant here.
      <p>Current resume</p>
      {user && (
        <a target="_blank" rel="noopener noreferrer" href={user.resumeURL}>
          {testFilename}
        </a>
      )}{" "}
      <form onSubmit={handleSubmit}>
        <div className="field">
          <input
            type="file"
            className="custom-file-input"
            id="customFile"
            onChange={handleChange}
            required
          />{" "}
          <label htmlFor="customFile">{filename}</label>
        </div>{" "}
        <input type="submit" value="Upload" />
      </form>
    </div>
  );
};

export default About;
