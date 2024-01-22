import React, { useState } from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import PreviousGuess from "../PreviousGuess/PreviousGuess";
import HappyBanner from "../HappyBanner/HappyBanner";
import SadBanner from "../SadBanner/SadBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = useState([]);
  const [numOfGuesses, setNumOfGuesses] = useState(0);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [failed, setFailed] = useState(false);
  const [disabledInput, setDisableInput] = useState(false);

  const onGuessInput = (guess) => {
    const copyGuessList = [...guessList];
    copyGuessList.push(guess);
    setGuessList(copyGuessList);

    const NUM_OF_GUESSES = copyGuessList.length;
    setNumOfGuesses(NUM_OF_GUESSES);

    if (answer === guess) {
      setIsCorrectAnswer(true);
      setDisableInput(true);
    }

    if (NUM_OF_GUESSES === NUM_OF_GUESSES_ALLOWED && !isCorrectAnswer) {
      setFailed(true);
    }
  };
  return (
    <>
      {isCorrectAnswer ? <HappyBanner numOfGuesses={numOfGuesses} /> : null}
      {failed ? <SadBanner correctWord={answer} /> : null}
      <PreviousGuess guessList={guessList} correctWord={answer} />
      <GuessInput onGuessInput={onGuessInput} isDisabled={disabledInput} />
    </>
  );
}

export default Game;
