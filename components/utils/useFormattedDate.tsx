import { useState, useEffect } from "react";

const useFormattedDate = (date: Date) => {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(
    () => setFormattedDate(new Date(date).toLocaleDateString("en-US")),
    []
  );

  return formattedDate;
};

export default useFormattedDate;
