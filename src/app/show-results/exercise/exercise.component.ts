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

    }


}
