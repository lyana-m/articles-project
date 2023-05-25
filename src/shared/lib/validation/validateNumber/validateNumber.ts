export enum validKeyboardKeys {
  BACKSPACE = 'Backspace',
  ARROWRIGHT = 'ArrowRight',
  ARROWLEFT = 'ArrowLeft',
}

export const validateNumber = (event: React.KeyboardEvent) => {
  if (!/[0-9]/.test(event.key) && !Object.values(validKeyboardKeys).some((v) => v === event.key)) {
    event.preventDefault();
  }
};
