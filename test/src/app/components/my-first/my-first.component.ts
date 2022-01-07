import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-my-first',
  templateUrl: './my-first.component.html',
  styleUrls: ['./my-first.component.css']
})
export class MyFirstComponent implements OnInit {

  name : string= "String Interpolation Demo"
  @Input() title1 : any;

  constructor() { }

  ngOnInit(): void {
  }

}
