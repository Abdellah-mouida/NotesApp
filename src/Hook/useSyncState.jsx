import { useRef, useState } from "react";

// This is a custom hook that returns a synchronous state setter
export default function useSyncState(initialValue) {
  const [state, setState] = useState(initialValue);
  const stateRef = useRef(state);

  const syncSetState = (newValue) => {
    stateRef.current = newValue;
    setState(newValue);
  };

  return [stateRef.current, syncSetState];
}
