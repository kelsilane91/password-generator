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

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
  };

  const ButtonRow = () => {
    return (
      <div>
        <Button onClick={handleSubmit}>Submit</Button>
        <Button onClick={handleReset}>Reset</Button>
      </div>
    );
  };

  const Password = () => {
    return (
      <div>
        <h1>{password}</h1>
        <Button onClick={copyToClipboard}>Copy to Clipboard</Button>
      </div>
    );
  };

  return (
    <div style={{ textAlign: "center" }}>
      <TextField
        id="outlined-number"
        label="PasswordLength"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{ inputProps: { min: 1 } }}
        onChange={handleLengthChange}
        value={passwordLength}
      />
      <ButtonRow></ButtonRow>
      <Password></Password>
    </div>
  );
};
