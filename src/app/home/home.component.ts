import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ShowResultsComponent } from '../show-results/show-results.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bodyParts: any = [];
  constructor(private api:ApiService,private sib:ShowResultsComponent) {}

  ngOnInit(): void {

  }



  part:string="";

  sendMsg(val:string){
    console.log("kjbads");
    this.part = val;
    console.log(this.part);
    this.api.setPart(this.part);
    this.sib.changeResults();
  }


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }




}
