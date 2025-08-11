import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MovieService } from '../../service/movie.service';

@Component({
  selector: 'app-download',
  imports: [],
  templateUrl: './download.component.html',
  styleUrl: './download.component.css'
})
export class DownloadComponent implements OnInit{
  ngOnInit(): void {
    this.getmovieId()
  }

constructor(private activatedRoute:ActivatedRoute , private router:Router){}
serviceCinema=inject(MovieService)

movie:any={}

getmovieId(){
  const movieId = this.activatedRoute.snapshot.paramMap.get("id")
  movieId && this.serviceCinema.getMovieById(Number(movieId)).subscribe((res:any)=>{
   this.movie=res
   console.log("hellow"+this.movie);
   
  })
}
  gotodetails(id:number){
   this.router.navigate(['/movie-details', id]);
}

gotowatch(id:number){
  this.router.navigate(['/watch', id]);
}

}
