import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BasicsComponent } from './basics/basics.component';
import { ContainedComponent } from './contained/contained.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'basics', component: BasicsComponent },
  { path: 'advanced', component: ContainedComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
// { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

