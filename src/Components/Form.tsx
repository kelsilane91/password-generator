import { Button, Paper } from "@mui/material";
import React, { useState } from "react";
import { passwordGenerator } from "../passwordGenerator";

export const Form = () => {
  const [textValue, setTextValue] = useState<string>("");

  const handleSubmit = () => {
    setTextValue(passwordGenerator());
    console.log(textValue);
  };
  const handleReset = () => setTextValue("");

  return (
    <Paper>
      <h1>{textValue}</h1>

      <Button onClick={handleSubmit}>Submit</Button>
      <Button onClick={handleReset}>Reset</Button>
    </Paper>
  );
};
