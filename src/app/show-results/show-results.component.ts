import { Component,Input,OnInit,ViewChild} from '@angular/core';
import { ApiService } from '../api.service';
import { AdItem } from './ad-items';
import { AdComponent } from './ad.component';
import { AdDirective } from './ad.directive';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-show-results',
  templateUrl: './show-results.component.html',
  styleUrls: ['./show-results.component.css']
})

export class ShowResultsComponent implements OnInit {

    @Input() ads: AdItem[] = [];

    @ViewChild(AdDirective,{static:true}) adHost !: AdDirective;
    index:number|undefined;

    constructor(private api:ApiService) {}
    ngOnInit(): void {
        this.sendMsg(0,"");
    }



    // Dynamic Component Selection Fuction
    sendMsg(val:number,str:string){
      this.index = val;
      const adItem = this.ads[this.index];

      const viewContainerRef = this.adHost.viewContainerRef;
      viewContainerRef.clear();

      const componentRef = viewContainerRef.createComponent<AdComponent>(adItem.component);
      componentRef.instance.data = adItem.data;

    }

    // Owl Carosuel Features
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
