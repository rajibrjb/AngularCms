import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css']
})
export class ValuesComponent implements OnInit {
values: any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
this.getValues();
  }

  getValues() {
    this.http.get('http://localhost:8000/api/test').subscribe(response => {
      this.values = response;
      console.log(this.values);
    }, error => {

      console.log(error);
    });
  }

}
