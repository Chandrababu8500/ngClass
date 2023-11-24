import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditon',
  templateUrl: './conditon.component.html',
  styleUrls: ['./conditon.component.css']
})
export class ConditonComponent implements OnInit {
  ViewName:string='offers';
  constructor() { }

  ngOnInit() {
  }
  ViewClick(Viewname:string){
 this.ViewName=Viewname;
  }

}
