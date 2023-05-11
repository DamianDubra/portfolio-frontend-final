import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './interceptors/interceptor.service';


// external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AboutMeComponent } from './content/about-me/about-me.component';
import { DashComponent } from './content/dash/dash.component';
import { MostazaComponent } from './content/mostaza/mostaza.component';
import { UtnComponent } from './content/utn/utn.component';
import { ArgprgmComponent } from './content/argprgm/argprgm.component';
import { EestComponent } from './content/eest/eest.component';
import { IduaComponent } from './content/idua/idua.component';
import { ProjectPotatoeComponent } from './content/project-potatoe/project-potatoe.component';
import { FirstAtemppComponent } from './content/first-atempp/first-atempp.component';
import { HmfComponent } from './content/hmf/hmf.component';
import { EditComponent } from './edit/edit.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    FooterComponent,
    AboutMeComponent,
    DashComponent,
    MostazaComponent,
    UtnComponent,
    ArgprgmComponent,
    IduaComponent,
    ProjectPotatoeComponent,
    FirstAtemppComponent,
    HmfComponent,
    EestComponent,
    EditComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }