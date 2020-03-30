import PropTypes from "prop-types"
import React from "react";
import "./Contact.css";

const Contact = ({name, avatar, online}) => {
  return (
    <div className="Contact">
      <img className="avatar" src={avatar} alt="avatar"/>
      <div>
        <h4 className="name">{name}</h4>
        <div className="status">
          <div className={online ? "status-online" : "status-offline"}></div>
          <p className="status-text">{online ? "online" : "offline"}</p>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  online: PropTypes.bool
};

export default Contact;
