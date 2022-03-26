import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

import emailjs from "@emailjs/browser";

const service_id = "default_service";
const template_id = "template_P4pMVKRx";
const user_id = "user_GbF3UtpnVkEe6unAsSWg3";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const [open, setOpen] = useState(false);

  const [values, setValues] = React.useState({
    message: "",
    name: "",
    email: "",
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
      from_name: name,
      from_email: email,
      message_html: message,
    };

    if (name.length < 3 || /\d/.test(name) === true) {
      error = true;
      setNameError("At least two characters");
    } else {
      setNameError(" ");
    }

    if (
      email.length <= 0 ||
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email) !== true
    ) {
      error = true;
      setEmailError("Incorrect email");
    } else {
      setEmailError("");
    }

    if (message.length < 10) {
      error = true;
      setMessageError("Message is too short");
    } else {
      setMessageError("");
    }

    if (error !== true) {
      emailjs.send(service_id, template_id, params, user_id);
      setName("");
      setEmail("");
      setMessage("");
      setOpen(true);
    }
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
          >
            <TextField
              id="outlined-multiline-static"
              label="Your message"
              multiline
              rows={10}
              defaultValue=""
              fullWidth
              value={values.message}
              onChange={handleChange("message")}
              style={{ marginBottom: 50 }}
            />
            <TextField
              id="outlined-multiline-static"
              label="Your name"
              fullWidth
              defaultValue=""
              value={values.name}
              onChange={handleChange("name")}
              style={{ marginBottom: 25 }}
            />
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Your email"
              defaultValue=""
              value={values.email}
              onChange={handleChange("email")}
              style={{ marginBottom: 30 }}
            />

            <button
              type="submit"
              class="button primary-button alt"
              onclick={submit}
            >
              Send email
            </button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
