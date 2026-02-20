import { useState, useRef } from 'react';

// https://react.dev/reference/react/useRef
// This example uses a combination of state and refs.
// Both startTime and now are state variables because they are used for rendering.
// But we also need to hold an interval ID so that we can stop the interval on button press.
// Since the interval ID is not used for rendering, it’s appropriate to keep it in a ref, and manually update it.
const RefExample = () => {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);
  const intervalRef = useRef<number | undefined>(undefined);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart} className="border">
        Start
      </button>
      <button onClick={handleStop} className="border">
        Stop
      </button>
    </>
  );
};

export default RefExample;
