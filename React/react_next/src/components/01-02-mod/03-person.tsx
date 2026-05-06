import React from "react";
import { PersonProps } from "@/types/01-02-mod/03-person-props";

// Returns the current weekday
const getWeekday = (today: Date) => {
  return new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
  }).format(today);
};

export const Person = ({
  name,
  avatar = "default-image-url",
  roles,
}: PersonProps) => {
  const today = new Date();
  const weekday = getWeekday(today);

  return (
    <div className="p-3">
      <h1>{name}</h1>

      <img
        src={avatar}
        alt={name}
        className="w-40"
      />

      <ul>
        {roles.map((role, index) => (
          <li key={index}>{role}</li>
        ))}
      </ul>

      <p>Today is {weekday}</p>
    </div>
  );
};