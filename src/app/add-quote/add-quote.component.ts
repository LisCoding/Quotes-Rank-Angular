import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {
  quote = {
    description:"",
    author :""
  }
  quotes = []
  onSubmit() {
    console.log("I was submitted", this.quote);
    this.quotes.push(this.quote);
    this.quote = {
      description:"",
      author :""
    }
  }
  constructor() { }
  ngOnInit() {
  }

}
