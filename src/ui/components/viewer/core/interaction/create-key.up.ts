export const createOnKeyUp = (setMode: (mode: string) => void) => {
  function onKeyUp(event: KeyboardEvent) {
    switch (event.key) {
      case 'Shift': setMode('create'); break;
    }
  }

  return onKeyUp
}