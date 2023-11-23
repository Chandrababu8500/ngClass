import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent {
  bgStyle:string="red";
  textStyle:string="yellow";
  paddingStyle:string='20';
  fontSize:string='10';

  styleObj:{backgroundColor:string,color:string,padding:string,fontSize:string}={
    backgroundColor:this.bgStyle,
    color:this.textStyle+ "px",
    padding:this.paddingStyle +'px',
    fontSize:this.fontSize+'px'
  }
  applyStyle(){
    this.styleObj={
      backgroundColor:this.bgStyle,
      color:this.textStyle+ "px",
      padding:this.paddingStyle +'px',
      fontSize:this.fontSize+'px'
    }
  }

}
