import { Component, Input,OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { AdComponent } from '../ad.component';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})

export class ExerciseComponent implements AdComponent,OnInit {
    @Input() data: any;

    allExercise: any = [];
    constructor(private api:ApiService){}

    ngOnInit():void {
      this.getMyExercise("all");
    }

    getMyExercise(val:string) {
      if(val == "all") {
        this.allExercise.splice(0);
        // this.api.listOfAllExercises().subscribe(res => {
        //   this.allExercise = res;
        //   console.log(this.allExercise);
        // })
      }
      else {
        // this.api.listbyBodyPart(val).subscribe(res => {
        //   this.allExercise.splice(0);
        //   this.allExercise = res;
        //   console.log(this.allExercise);
        // })
      }
    }



}
