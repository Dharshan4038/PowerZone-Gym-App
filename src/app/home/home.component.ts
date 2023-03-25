import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ShowResultsComponent } from '../show-results/show-results.component';
import { AdItem } from '../show-results/ad-items';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  ads: AdItem[] = [];
  bodyParts: any = [];
  constructor(private api:ApiService) {}

  ngOnInit(): void {
    this.ads =this.api.getAds();
  }

  part:string="";

  sendMsg(id:number,val:string) {
    this.part = val;
    // this.api.setPart(this.part);
    // this.sib.changeResults(id);
    // this.sib.loadComponent(id);
  }






}
