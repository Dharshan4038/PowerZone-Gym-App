import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AdItem } from '../show-results/ad-items';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  ads: AdItem[] = [];

  constructor(private api:ApiService) {}

  ngOnInit(): void {
    this.ads =this.api.getAds();
  }

}
