import { AbstractControl, ValidationErrors } from '@angular/forms';

// form field validation functions signature
// when valid (AbstractControl) => null
// when invalid (AbstractControl) => ValidationErrors
export function restrictedWords(words: string[]) {
  if (!words || !words.length) return () => null;
  return (control: AbstractControl): ValidationErrors | null => {
    const invalidWords = words.reduce<string[]>(
      (invalidWordsList, invalidWord) => {
        if (control.value.includes(invalidWord))
          return [...invalidWordsList, invalidWord];
        return invalidWordsList;
      },
      []
    );
    // restrictedWords value will be accessible in template under <controlName>?.errors?.restrictedWords
    return invalidWords.length
      ? { restrictedWords: invalidWords.join(', ') }
      : null;
  };
}
