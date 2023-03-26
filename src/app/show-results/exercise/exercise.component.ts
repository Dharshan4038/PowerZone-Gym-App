import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { YoutubeApiService } from 'src/app/youtube-api.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})

export class ExerciseComponent implements OnInit {

    constructor(private route:ActivatedRoute,private api:ApiService,private youtube:YoutubeApiService){}

    exeId: any;
    selectExercise: any;
    videoRes: any;
    items: any = [];
    muscleExercise: any = [];
    muscleItems: any = [];
    equipExericise: any = [];
    equipItems: any = [];
    thumbnails: any;
    ngOnInit():void {

      this.exeId = this.route.snapshot.paramMap.get('id');
      this.api.listbyId(this.exeId).subscribe(data=>{
        this.selectExercise = data;
        this.youtube.getVideo(this.selectExercise.name).subscribe(res=>{
          this.videoRes = res;

          for(let i=0;i<3;i++){
            this.items[i] = this.videoRes.items[i];
            console.log(this.items[i]);
          }
          this.selectExercise.target = this.selectExercise.target.replaceAll(' ','%20');
          this.api.listbyTargetMuscel(this.selectExercise.target).subscribe(res=>{
              this.muscleItems = res;
              for(let j=0;j<3;j++) {
                this.muscleExercise[j] = this.muscleItems[j];
              }
          })

          console.log(this.selectExercise);

          this.selectExercise.equipment = this.selectExercise.equipment.replaceAll(' ','%20');
          this.api.listbyEquipment(this.selectExercise.equipment).subscribe(res=>{
            this.equipExericise = res;
            for(let k=0;k<3;k++) {
              this.equipItems[k] = this.equipExericise[k];
            }
          })


        })
      })
    }

}
