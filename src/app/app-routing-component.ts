import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from '../app/heroes/heroes.component';
import { HttpComponent } from './http/http.component';



const appRoutes: Routes = [
    { path : 'heroes', component: HeroesComponent },
    { path : 'http', component: HttpComponent }

];

@NgModule({

    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

})
export class AppRoutingModule
{

}