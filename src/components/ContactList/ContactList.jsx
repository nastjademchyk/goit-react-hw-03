import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import React from "react";

const ContactList = ({ contacts }) => {
  return (
    <ul className={s.list}>
      {contacts.map((contact) => (
        <li className={s.item} key={contact.id}>
          <Contact {...contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
