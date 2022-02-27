import { Button, Paper, TextField } from "@mui/material";
import React, { BaseSyntheticEvent, useState } from "react";
import { passwordGenerator } from "../passwordGenerator";

export const Form = () => {
  const [password, setPassword] = useState<string>("");
  const [passwordLength, setPasswordLength] = useState<number>(1);

  const handleSubmit = () => {
    setPassword(passwordGenerator(passwordLength));
  };

  const handleLengthChange = (event: BaseSyntheticEvent) => {
    setPasswordLength(event.target.value);
  };

  const handleReset = () => {
    setPasswordLength(1);
    setPassword("");
  };

  return (
    <Paper>
      <h1>{password}</h1>
      <TextField
        id="outlined-number"
        label="Number"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{ inputProps: { min: 1 } }}
        onChange={handleLengthChange}
        value={passwordLength}
      />
      <Button onClick={handleSubmit}>Submit</Button>
      <Button onClick={handleReset}>Reset</Button>
    </Paper>
  );
};
