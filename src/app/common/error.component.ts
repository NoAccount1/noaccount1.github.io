import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `<h1 class="error">Error !!</h1>`,
  styles: [ 
    `h1.error {
    color: red;
    background-color: white;
    border: 5px solid red;
    border-radius: 50px;
    align-self: center;
    text-align: center;
    width: 10em;
    padding: 50px;
    margin: auto;
    }`
  ]
})

export class ErrorComponent {}
