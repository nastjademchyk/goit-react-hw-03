import s from "./Contact.module.css";
import React from "react";
import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ name, number }) => {
  return (
    <div className={s.container}>
      <div className={s.name}>
        <FaUser />
        <p>{name}</p>
      </div>
      <div className={s.number}>
        <FaPhoneAlt />
        <p>{number}</p>
      </div>
    </div>
  );
};

export default Contact;
