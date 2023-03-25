import { Component, Input,OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { AdComponent } from '../ad.component';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})

export class AllComponent implements AdComponent,OnInit {
  @Input() data: any;

  constructor(private api:ApiService){}

  allExercise: any=[];
  p:any;
  ngOnInit() : void {
    this.getMyExercise();
  }

  getMyExercise() {
    this.allExercise.splice(0);
    // this.api.listOfAllExercises().subscribe(res => {
    //     this.allExercise = res;
    //     console.log(this.allExercise);
    // })
  }


}
