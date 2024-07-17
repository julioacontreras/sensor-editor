
export const createOnDocumentKeyDown = (setMode: (mode: string) => void) => {
  const onDocumentKeyDown = (event: KeyboardEvent) => {
      switch ( event.key ) {
        case 'Shift': setMode('delete'); break;
      }
  }
  return onDocumentKeyDown
}
