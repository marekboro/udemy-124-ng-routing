
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },                     // this will go to localhost://4200/
    { path: 'users', component: UsersComponent, children:[      // this will go to localhost://4200/users
      { path: ':id/:name', component: UserComponent },          // this will go to localhost://4200/users/id/name
      // { path:'**', redirectTo:'/not-found', pathMatch:'full'}
    ]}          
    ,                 
    { path: 'servers', component: ServersComponent, children: [ // this will go to localhost://4200/servers
        { path: ':id/edit', component: EditServerComponent },   // this will go to localhost://4200/servers/id/edit
        { path: ':id', component: ServerComponent },             // this will go to localhost://4200/servers/id
        // {path:'**', redirectTo:'/not-found', pathMatch:'full'}
    ]},
    {path:'not-found', component: PageNotFoundComponent},
    {path:'**', redirectTo:'/not-found', pathMatch:'full'}
  ]


@NgModule({
    imports:[ RouterModule.forRoot(appRoutes) ],
    exports:[ RouterModule ]
})
export class AppRoutingModule{



}