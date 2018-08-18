import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  childname = "from child component"

  @Output() onRemoveName = new EventEmitter<number>();

  constructor() { }

  @Input() names;

  ngOnInit() {
  }

  removeName(index:number){
    console.log(index);
    this.onRemoveName.emit(index)
  }


}
