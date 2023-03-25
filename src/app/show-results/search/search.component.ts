import { Component,Input,OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { AdComponent } from '../ad.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements AdComponent,OnInit {
    @Input() data: any;

    ngOnInit() : void {
      this.getSearchResult();
    }

    constructor(private api:ApiService){}

    allExercise: any = [];
    p:any;

    getSearchResult() {
      this.api.listOfAllExercises().subscribe(res=>{
        this.allExercise = res;
        for(var i=0; i < this.allExercise.length ; i++) {
          if(this.data.bodyPart == this.allExercise[i].bodyPart) {
              this.allExercise.splice(0);
              this.data.bodyPart = this.data.bodyPart.replaceAll(' ','%20');
              this.api.listbyBodyPart(this.data.bodyPart).subscribe(res => {
                  this.allExercise = res;
              })
              break;
          }
          else if(this.data.bodyPart == this.allExercise[i].target) {
              this.allExercise.splice(0);
              this.data.bodyPart = this.data.bodyPart.replaceAll(' ','%20');
              this.api.listbyTargetMuscel(this.data.bodyPart).subscribe(res => {
                this.allExercise = res;
              })
              break;
          }
          else if(this.data.bodyPart == this.allExercise[i].name) {
              this.allExercise.splice(0);
              this.data.bodyPart = this.data.bodyPart.replaceAll(' ','%20');
              this.api.listbyName(this.data.bodyPart).subscribe(res => {
                this.allExercise = res;
              })
              break;
          }
        }
      })
    }




}
