import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
	@Input()
	gameCover:String="";
	@Input()
	gameLabel:String = "";
	@Input()
	gameType:String="";
	@Input()
	gamePrice:String="";

  constructor() { }

  ngOnInit(): void {
  }

}
