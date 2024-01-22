import React from "react";

function SadBanner({ correctWord }) {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{`${correctWord}`}</strong>.
      </p>
    </div>
  );
}

export default SadBanner;
