import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { WatchComponent } from './pages/watch/watch.component';
import { TypesMoveiesComponent } from './pages/types-moveies/types-moveies.component';
import { DownloadComponent } from './pages/download/download.component';
import { SearchComponent } from './pages/search/search.component';
import { Page2Component } from './pages/page2/page2.component';
import { Page3Component } from './pages/page3/page3.component';
import { Page4Component } from './pages/page4/page4.component';
import { Page5Component } from './pages/page5/page5.component';
import { Page6Component } from './pages/page6/page6.component';
import { Page7Component } from './pages/page7/page7.component';
import { Page8Component } from './pages/page8/page8.component';
import { Series1Component } from './pages/series1/series1.component';
import { Series2Component } from './pages/series2/series2.component';
import { Anime1Component } from './pages/anime1/anime1.component';
import { Anime2Component } from './pages/anime2/anime2.component';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { MovisComponent } from './pages/movis/movis.component';
<<<<<<< HEAD
import { LogInComponent } from './pages/log-in/log-in.component';
=======
>>>>>>> b18c497a66d7d76e180fb6f1fbbda465218a2b99

export const routes: Routes = [

    {
        path:'',
        redirectTo:'mainpage',
        pathMatch:'full',
        
    },
    {
        path:'mainpage',
        component:MainpageComponent
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'movie-details/:id',
        component:MovieDetailsComponent 
    },
    {
        path:'watch/:id',
        component:WatchComponent 
    },
    {
        path:'download/:id',
        component:DownloadComponent 
    },
    {
        path:'search',
        component:SearchComponent 
    },
<<<<<<< HEAD
    {
        path:'login',
        component:LogInComponent 
    },
=======
    // {
    //     path:'update',
    //     component:UpdatePageComponent 
    // },
>>>>>>> b18c497a66d7d76e180fb6f1fbbda465218a2b99

    {
        path:'movis',
        component:MovisComponent ,
        children:[
    {
        path:'',
        redirectTo:'page1',
        pathMatch:'full',
    },
    {
        path:'page1',
        component:TypesMoveiesComponent  
    },
    {
        path:'page2',
        component:Page2Component 
    },
    {
        path:'page3',
        component:Page3Component 
    },
    {
        path:'page4',
        component:Page4Component 
    },
    {
        path:'page5',
        component:Page5Component 
    },
    {
        path:'page6',
        component:Page6Component 
    },
    {
        path:'page7',
        component:Page7Component 
    },
    {
        path:'page8',
        component:Page8Component 
    },
        ]
    },

    {
        path:'series1',
        component:Series1Component 
    },
    {
        path:'series2',
        component:Series2Component 
    },
    {
        path:'anime1',
        component:Anime1Component 
    },
    {
        path:'anime2',
        component:Anime2Component 
    },
];
