import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ISession } from '../shared';
import { SessionService } from './session.service';

@Component({
  templateUrl: './create-session.component.html',
  styles: [
    `
      em {
        float: right;
        color: #e05c65;
        padding-left: 10px;
      }
      .error input,
      .error textarea,
      .error select {
        background-color: #e3c3c5;
      }
      .error ::-webkit-input-placeholder {
        color: #999;
      }
      .error ::-moz-placeholder {
        color: #999;
      }
      .error :-moz-placeholder {
        color: #999;
      }
      .error :ms-input-placeholder {
        color: #999;
      }
    `,
  ],
})
export class CreateSessionComponent implements OnInit {
  isDirty: boolean = true;
  newSessionForm!: FormGroup;

  name?: FormControl;
  presenter?: FormControl;
  duration?: FormControl;
  level?: FormControl;
  abstract?: FormControl;

  constructor(private sessionService: SessionService, private router: Router) {}
  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [
      Validators.required,
      Validators.maxLength(400),
      this.restrictedWords(['foo', 'bar']),
    ]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract,
    });
  }

  // form field validation functions signature
  // when valid (FormControl) => null
  // when invalid (FormControl) => Record<string, any>
  private restrictedWords(words: string[]) {
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

  saveSession(formValue: NgForm['value']) {
    const newSession: ISession = {
      id: undefined,
      voters: [],
      ...formValue,
      duration: Number(formValue.duration), // casting to Number as form values are of type any
    };
    this.sessionService.saveSession(newSession);
  }

  cancel() {
    this.router.navigate(['events']);
  }
}
