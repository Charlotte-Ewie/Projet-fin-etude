// Importation des librairies et fichiers
import React, { useState, useEffect } from "react";
import { useHref } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import RemindersItem from "./RemindersItem";
import { loadReminders } from "../../actions/reminder";

import "./Reminders.scss";

function Reminders() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadReminders());
  }, []);

  const reminders = useHref().includes("/companion/") ? useSelector((state) => state.reminder.remindersByCompanion) : useSelector((state) => state.reminder.reminders);
  // Je souhaite récupérer les reminders de mon user
  // const {reminders} = useSelector((state) => state.reminder);
  // console.log('remindersInReminders :', reminders);

  return (
    <section className="reminders">
      <h2>Mes rendez-vous et rappels à venir</h2>
      <ul className="reminders-list">
        {reminders.map((reminder) => (
          <RemindersItem key={reminder.id} reminder={reminder} />
        ))}
      </ul>
    </section>
  );
}

export default Reminders;
