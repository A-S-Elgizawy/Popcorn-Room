import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MovieService } from '../../service/movie.service';

@Component({
  selector: 'app-watch',
  imports: [],
  templateUrl: './watch.component.html',
  styleUrl: './watch.component.css'
})
export class WatchComponent implements OnInit {

ngOnInit(): void {
  this.servers()
  this.getmovieId()
}


    

constructor(private activatedRoute:ActivatedRoute , private router:Router){}
serviceCinema=inject(MovieService)

movie:any={}

getmovieId(){
  const movieId = this.activatedRoute.snapshot.paramMap.get("id")
  movieId && this.serviceCinema.getMovieById(Number(movieId)).subscribe((res:any)=>{
   this.movie=res
  })
}

  gotodetails(id:number){
   this.router.navigate(['/movie-details', id]);
}

servers(){
  const servers = document.querySelectorAll('.servercon');
  servers.forEach((server) => {
    server.addEventListener("click",()=>{
      servers.forEach((s) => {
        s.classList.remove("active");
      });
      server.classList.add("active");
    })
  })
}


gotodown(id:number){
  this.router.navigate(['/download', id]);
}
}
