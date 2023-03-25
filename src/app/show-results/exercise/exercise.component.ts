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
    thumbnails: any;
    ngOnInit():void {

      this.exeId = this.route.snapshot.paramMap.get('id');
      this.api.listbyId(this.exeId).subscribe(data=>{
        this.selectExercise = data;
        this.youtube.getVideo(this.selectExercise.name).subscribe(res=>{
          this.videoRes = res;
          for(let i=0;i<3;i++){
            this.items[i] = this.videoRes.items[i];
          }
        })
      })
    }

}
