import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit, OnChanges {
  @Input() myQuotes;

  constructor() { }

  ngOnInit() {

  }
  ngOnChanges(){
  
  }

}
