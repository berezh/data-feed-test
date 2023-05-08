import { useEffect, useCallback } from "react";

export const KeyboardCode = {
  backspace: 8,
  tab: 9,
  enter: 13,
  space: 32,
  arrowLeft: 37,
  arrowUp: 38,
  arrowRight: 39,
  arrowDown: 40,
};

export function useKeyPressCallback(callback: (keyCode: number, event: KeyboardEvent) => void, ...deps: any[]) {
  const handleUserKeyPress = useCallback((event: KeyboardEvent) => {
    const { keyCode } = event;

    callback(keyCode, event);
  }, deps);

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);

    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress]);
}
