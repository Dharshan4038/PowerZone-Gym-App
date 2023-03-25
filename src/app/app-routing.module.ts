import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExerciseComponent } from './show-results/exercise/exercise.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'exercise/:id',
    component: ExerciseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



