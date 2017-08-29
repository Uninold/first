import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class Comp2Component implements OnInit {
    @Output() add = new EventEmitter<any>();
    @Output() print = new EventEmiiter<any>();

    @Input() dataContainer;

    dataCollection = [];
    
    constructor() { }

    ngOnInit() {
    }

    onAdd(){
        this.dataCollection.push(this.dataContainer);
        this.add.emit(this.dataCollection);
    }
}