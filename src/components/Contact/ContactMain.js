import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import emailjs from "@emailjs/browser";

const service_id = "default_service";
const template_id = "template_P4pMVKRx";
const user_id = "user_GbF3UtpnVkEe6unAsSWg3";

function Contact() {
  const [open, setOpen] = useState(false);

  const [values, setValues] = React.useState({
    message: "",
    name: "",
    email: "",
    messageError: "",
    nameError: "",
    emailError: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submit = (e) => {
    e.preventDefault();

    let error = false;

    const params = {
      from_name: values.name,
      from_email: values.email,
      message_html: values.message,
    };

    if (values.name.length < 3 || /\d/.test(values.name) === true) {
      error = true;
      setValues({ ...values, nameError: "At least two characters" });
    } else {
      setValues({ ...values, nameError: "" });
    }

    if (
      values.email.length <= 0 ||
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(values.email) !== true
    ) {
      error = true;
      setValues({ ...values, emailError: "Incorrect email" });
    } else {
      setValues({ ...values, emailError: "" });
    }

    if (values.message.length < 10) {
      error = true;
      setValues({ ...values, messageError: "Message is too short" });
    } else {
      setValues({ ...values, messageError: "" });
    }

    if (error !== true) {
      //emailjs.send(service_id, template_id, params, user_id);
      // setValues({ ...values, nameError: "" });
      // setValues({ ...values, emailError: "" });
      // setValues({ ...values, messageError: "" });
      // setOpen(true);
    }

    console.log(values);
  };

  return (
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
            />
            <TextField
              id="outlined-multiline-static"
              label="Your name"
              fullWidth
              value={values.name}
              onChange={handleChange("name")}
              style={{ marginBottom: 25 }}
            />
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Your email"
              value={values.email}
              onChange={handleChange("email")}
              style={{ marginBottom: 30 }}
            />

            <button type="submit" className="button primary-button alt">
              Send email
            </button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
