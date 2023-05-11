import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

//componentes
import { AboutMeComponent } from './content/about-me/about-me.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MenuComponent } from './menu/menu.component';
import { ArgprgmComponent } from './content/argprgm/argprgm.component';
import { DashComponent } from './content/dash/dash.component';
import { EestComponent } from './content/eest/eest.component';
import { FirstAtemppComponent } from './content/first-atempp/first-atempp.component';
import { HmfComponent } from './content/hmf/hmf.component';
import { IduaComponent } from './content/idua/idua.component';
import { MostazaComponent } from './content/mostaza/mostaza.component';
import { ProjectPotatoeComponent } from './content/project-potatoe/project-potatoe.component';
import { UtnComponent } from './content/utn/utn.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'about',component:AboutMeComponent},
  {path:'arg',component: ArgprgmComponent},
  {path:'dash',component:DashComponent},
  {path:'eest',component:EestComponent},
  {path:'first',component:FirstAtemppComponent},
  {path:'hmf',component:HmfComponent},
  {path:'idua',component:IduaComponent},
  {path:'mostaza',component:MostazaComponent},
  {path:'project',component:ProjectPotatoeComponent},
  {path:'utn',component:UtnComponent},
  {path:'editar/:id',component:EditComponent},
 

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

