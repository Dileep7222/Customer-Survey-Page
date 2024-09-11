import { useState } from 'react';
import Survey from "./components/Survey";
import Welcome from './components/WelcomeScreen';
import ThankYou from './components/ThankYouScreen';

function App() {
  const [started, setStarted] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleStart = () => {
    setStarted(true);
  };

  const handleComplete = () => {
    setCompleted(true);
  };

  const handleReset = () => {
    setStarted(false);
    setCompleted(false);
  };

  return (
    <div className="App w-full h-full bg-blue-300">
      {!started && !completed && <Welcome onStart={handleStart} />}
      {started && !completed && <Survey onComplete={handleComplete} />}
      {completed && <ThankYou onReset={handleReset} />}
    </div>
  );
}

export default App;
