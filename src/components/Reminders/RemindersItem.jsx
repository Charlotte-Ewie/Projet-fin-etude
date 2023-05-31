import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import API from "../../api";

function RemindersItem({ reminder }) {
  const { token } = useSelector((state) => state.user);

  const [deleteReminder, setDeleteReminder] = useState(false);

  const navigate = useNavigate();

  function handleDelete() {
    API.delete
      .reminder(token, reminder.id)
      .then(() => {
        setDeleteReminder(true);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    if (deleteReminder) {
      window.location.reload();
    }
  }, [deleteReminder]);

  return (
    <li className="reminders-item" key={reminder.id}>
      <header className="reminders-item-header">{reminder.datetime}</header>
      <main className="reminders-item-main">
        <h3 className="reminders-item-h3">{reminder.title}</h3>
        <div className="reminders-item-description">
          <p className="reminders-item-description-text">{reminder.label}</p>
          <p className="reminders-item-description-text">
            {reminder.animal_name}
          </p>
        </div>
        <button className="reminders-button" onClick={handleDelete}>
          Enlever le rappel
        </button>
      </main>
    </li>
  );
}

export default RemindersItem;
