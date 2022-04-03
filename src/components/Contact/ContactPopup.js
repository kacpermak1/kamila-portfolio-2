import React from "react";
import { Link } from "react-router-dom";

function ContactPopup(props) {
  const [open, setOpen] = React.useState(true);

  const closePopup = () => {
    setOpen(false);
    setTimeout(function () {
      props.handleClose();
    }, 1000);
  };

  return (
    <>
      <div
        className={open ? "contact-form-popup" : "contact-form-popup closed"}
      >
        <div className="popup-inner">
          <span className="popup-close" onClick={closePopup}>
            <img alt="close" src="./close_icon.png" />
          </span>
          <div className="email-icon">
            <img alt="email" src="./email_icon.png" />
          </div>
          <h2>{props.emailSent ? "THANK YOU" : "OOPS..."}</h2>
          <p>
            {props.emailSent
              ? "Your Message has been sent!"
              : "There was an error with email provider."}
            <br />
            {!props.emailSent ? "Please try again later." : ""}
          </p>
          <div className="home-link">
            <Link
              to={{
                pathname: "/",
              }}
            >
              <img alt="home" src="./home_icon.png" />
            </Link>
          </div>
        </div>
      </div>
      <div
        className={open ? "popup-overlay" : "popup-overlay closed"}
        onClick={closePopup}
      ></div>
    </>
  );
}

export default ContactPopup;
