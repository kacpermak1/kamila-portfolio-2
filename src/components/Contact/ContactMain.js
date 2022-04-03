import React, { useEffect, useState } from "react";
import ContactPopup from "./ContactPopup";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import emailjs from "@emailjs/browser";

const service_id = "service_fyk76f5";
const template_id = "template_5sx0vof";
const user_id = "1iUljuMgsc9FjN5iS";

function Contact() {
  const [values, setValues] = useState({
    message: "",
    name: "",
    email: "",
    messageError: "",
    nameError: "",
    emailError: "",
    emailSent: false,
    showPopup: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handlePopupClose = () => {
    setValues({ ...values, showPopup: false });
  };

  useEffect(() => {
    if (values.message !== "") {
      if (values.message.length < 10) {
        setValues({
          ...values,
          messageError: "Message is too short. Minimum 10 characters.",
        });
      } else {
        setValues({ ...values, messageError: "" });
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.message]);

  useEffect(() => {
    if (values.name !== "") {
      if (values.name.length < 2 || /\d/.test(values.name) === true) {
        setValues({
          ...values,
          nameError: "Please enter the correct name. Minimum 2 characters",
        });
      } else {
        setValues({ ...values, nameError: "" });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.name]);

  useEffect(() => {
    if (values.email !== "") {
      // const re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (re.test(values.email) !== true) {
        setValues({ ...values, emailError: "Incorrect email" });
      } else {
        setValues({ ...values, emailError: "" });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.email]);

  const submit = (e) => {
    e.preventDefault();

    if (values.name === "" || values.email === "" || values.message === "") {
      let emptyInputs = [];
      Object.keys(values).forEach(function (item) {
        if (item === "name" || item === "email" || item === "message") {
          if (values[item] === "") {
            emptyInputs.push([`${item}Error`, `Please enter your ${item}`]);
          }
        }
      });

      const errorsObject = Object.fromEntries(emptyInputs);
      setValues({ ...values, ...errorsObject });
    } else {
      if (
        values.nameError === "" &&
        values.emailError === "" &&
        values.messageError === ""
      ) {
        const params = {
          from_name: values.name,
          from_email: values.email,
          message: values.message,
        };

        emailjs.send(service_id, template_id, params, user_id).then(
          function (response) {
            setValues({
              ...values,
              name: "",
              email: "",
              message: "",
              emailSent: true,
              showPopup: true,
            });

            console.log("SUCCESS!", response.status, response.text);
          },
          function (error) {
            setValues({
              ...values,
              emailSent: false,
              showPopup: true,
            });

            console.log("FAILED...", error);
          }
        );
      }
    }
  };

  return (
    <>
      <div className="container">
        <div className="contact">
          <div>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { width: "100%" },
              }}
              noValidate
              autoComplete="off"
              onSubmit={submit}
            >
              <TextField
                id="outlined-multiline-static"
                label="Your message"
                multiline
                rows={10}
                fullWidth
                value={values.message}
                onChange={handleChange("message")}
                style={{ marginBottom: 50 }}
                error={values.messageError.length > 0 ? true : false}
                helperText={values.messageError}
              />
              <TextField
                id="outlined-multiline-static"
                label="Your name"
                fullWidth
                value={values.name}
                onChange={handleChange("name")}
                style={{ marginBottom: 25 }}
                error={values.nameError.length > 0 ? true : false}
                helperText={values.nameError}
              />
              <TextField
                fullWidth
                id="outlined-multiline-static"
                label="Your email"
                value={values.email}
                onChange={handleChange("email")}
                style={{ marginBottom: 30 }}
                error={values.emailError.length > 0 ? true : false}
                helperText={values.emailError}
              />

              <button type="submit" className="button primary-button alt">
                Send email
              </button>
            </Box>
          </div>
        </div>
      </div>

      {values.showPopup ? (
        <ContactPopup
          emailSent={values.emailSent}
          handleClose={handlePopupClose}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default Contact;
