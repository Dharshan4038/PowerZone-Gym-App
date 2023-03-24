import { Component,OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-show-results',
  templateUrl: './show-results.component.html',
  styleUrls: ['./show-results.component.css']
})

export class ShowResultsComponent implements OnInit {

  constructor( private api:ApiService) {
      this.getExercises();
  }

  allExercise: any = [];
  newExercise: any = [];
  p: any;

  ngOnInit(): void {

  }

  getExercises() {
    this.api.listOfAllExercises().subscribe(data=>{
      this.allExercise = data;
    })
  }

  changeResults() {
    console.log("geder");
    let part = this.api.getPart();
    this.api.listbyBodyPart(part).subscribe(data=>{
      this.allExercise = data;
      console.log(this.allExercise);
      this.allExercise = this.newExercise;
      console.log(this.allExercise);
    })
  }

}
