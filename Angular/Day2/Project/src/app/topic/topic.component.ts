import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
    topics:Array<string>=["Astha","Khusbooo","Shivanee"]
    
  constructor() { }

  ngOnInit() {
  }
public addToList(New):void{
  this.topics.push(New);
}
}
