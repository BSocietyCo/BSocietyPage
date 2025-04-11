import React, { useState } from "react";
import Teaser from "./TeaserLaunch";
import BSocietyLanding from "./BSocietyLanding";

function App() {
  const [showLanding, setShowLanding] = useState(false);

  return (
    <>
      {showLanding ? (
        <BSocietyLanding />
      ) : (
        <Teaser onFinish={() => setShowLanding(true)} />
      )}
    </>
  );
}

export default App;