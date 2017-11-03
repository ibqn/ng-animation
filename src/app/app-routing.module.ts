import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BasicsComponent } from './basics/basics.component';
import { ContainedComponent } from './contained/contained.component';
import { AdvancedComponent } from './advanced/advanced.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent,
    data: {
      animation: {
        value: 'home'
      }
    }
  },
  { path: 'basics', component: BasicsComponent,
    data: {
      animation: {
        value: 'basics'
      }
    }
  },
  { path: 'contained', component: ContainedComponent,
    data: {
      animation: {
        value: 'contained'
      }
    }
  },
  { path: 'advanced', component: AdvancedComponent,
    data: {
      animation: {
        value: 'advanced'
      }
    }
  },
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

