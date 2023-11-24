import { Component } from "@angular/core";

@Component({
    selector:'app-product',
    templateUrl:'./product.component.html',
    styleUrls:['./product.component.css']
})
export class ProductComponent{

    constructor(){
  
    }
    applyNames={
        color:'',
        bgColor:''
    }
    prdList=[
        {
            id:1,
            name:"Karbon",
            stock:5,
    
        },
        {
            id:2,
            name:"RealMe",
            stock:3
        },
        {
            id:3,
            name:"Nokia",
            stock:5,
    
        },
        {
            id:4,
            name:"Lenova",
            stock:3
        }
    ]
  
}