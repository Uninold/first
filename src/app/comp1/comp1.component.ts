import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class Comp1component {
    @Output('data-added') sendData = new Event;
    @Output('print-data') printData = new Event;

    first: string;
    second: number;

    inputObject;

    constructor() { }
}