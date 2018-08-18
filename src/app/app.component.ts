import { Component, OnInit } from '@angular/core';
import namesItem from './namesItem'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Welcome to Angular';
  names: namesItem[] = [];

  ngOnInit() {
    this.names.push({
      title:"Ravikumar",
      isDone:false
    })
  }

  onNewName(newName : string){
    this.names.push({
      title:newName,
      isDone:false
    })
  }
 
  onRemoveName(index:number){
    this.names.splice(index,1)
  }


}
