import React, { useState } from "react";

function GuessInput({ onGuessInput, isDisabled }) {
  const [textInput, setTextInput] = useState("");

  const handleChangeInput = (e) => {
    setTextInput(e.target.value.toUpperCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.info({ guess: textInput });
    onGuessInput(textInput);
    setTextInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={textInput}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        onChange={handleChangeInput}
        disabled={isDisabled}
      />
    </form>
  );
}

export default GuessInput;
