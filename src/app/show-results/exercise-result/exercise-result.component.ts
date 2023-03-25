import { Component, Input,OnInit } from '@angular/core';
import { AdComponent } from '../ad.component';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-back',
  templateUrl: './exercise-result.component.html',
  styleUrls: ['./exercise-result.component.css']
})

export class ExerciseResultComponent implements AdComponent,OnInit {
  @Input() data: any;

  constructor(private api:ApiService){}

  allExercise: any=[];
  p:any;
  ngOnInit() : void {
      this.getMyExercise();
  }

  getMyExercise() {
    // this.allExercise.splice(0);
    // this.api.listbyBodyPart(this.data.bodyPart).subscribe(res => {
    //     this.allExercise = res;
    //     console.log(this.allExercise);
    // })
  }

}
