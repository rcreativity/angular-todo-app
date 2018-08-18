import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newName:string = "";
  @Output() onNewName = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    if(this.newName != ""){
      console.log(this.newName)
      this.onNewName.emit(this.newName)
      this.newName = ""
    }else{
      alert("Please fill the input box");
    }
  }
}
