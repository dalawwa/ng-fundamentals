import { FormControl } from '@angular/forms';

// form field validation functions signature
// when valid (FormControl) => null
// when invalid (FormControl) => Record<string, any>
export function restrictedWords(words: string[]) {
  if (!words || !words.length) return () => null;
  return (control: FormControl): Record<string, any> | null => {
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
