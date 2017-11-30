import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found-component/page.not.found.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'courses/:id', component: CoursesComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    CoursesComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutesModule { }
