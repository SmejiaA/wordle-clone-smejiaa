import React from "react";
import Guess from "../Guess";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function PreviousGuess({ guessList, correctWord }) {
  const correctWordIsEmpty = correctWord.length === 0;

  return (
    <div className="guess-results">
      {guessList.map((guess, i) => (
        <Guess key={`${guess}${i}`}>
          <p className="guess">
            {correctWordIsEmpty ? (
              <>
                {range(5).map((index) => (
                  <span key={`cell${index}`} className="cell"></span>
                ))}
              </>
            ) : (
              <>
                {checkGuess(guess, correctWord).map((checkGuess, i) => {
                  return (
                    <span
                      key={`${checkGuess.letter}${i}`}
                      className={`cell ${checkGuess.status}`}
                    >
                      {checkGuess.letter}
                    </span>
                  );
                })}
              </>
            )}
          </p>
        </Guess>
      ))}
    </div>
  );
}

export default PreviousGuess;
