import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import Swiper from 'swiper';
import { Keyboard, Navigation } from 'swiper/modules';
import { MovieService } from '../../service/movie.service';
import { CommonModule } from '@angular/common';
Swiper.use([Navigation,Keyboard]);


@Component({
  selector: 'app-movie-details',
  imports: [CommonModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit{
 
 
 movie:any={}
 constructor(private activatedRoute:ActivatedRoute, private router:Router){}
serviceCinema=inject(MovieService)

  ngOnInit(): void {
    this.getmovieById()
     this.router.events.subscribe((event)=>{
      if(event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
     })
  }

  getmovieById(){
  const movieId = this.activatedRoute.snapshot.paramMap.get("id")
  movieId && this.serviceCinema.getMovieById(Number(movieId)).subscribe((res:any)=>{
   this.movie=res
   setTimeout(()=>{
    this.swipertwo()
   })
   
  })
 }
 

  swipertwo(){
          var swiper = new Swiper(".swipertwo", {
          spaceBetween:24,
          loop:true,
          // grabCursor:true,
          keyboard: {
          enabled: true
         },
          navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          },
      
          breakpoints: {
              640: {
              slidesPerView: 2,
              spaceBetween: 20,
              },
              768: {
              slidesPerView: 3,
              spaceBetween: 15,
              },
              1000: {
              slidesPerView: 5,
              spaceBetween: 20,
              },
          },
      });
}

details(Id:number){
   this.router.navigate(["/movie-details",Id])
    setTimeout(() => {
    this.getmovieById();
  }, 0);
}


gotodown(id:number){
  this.router.navigate(["/download",id])
}
gotowatch(id:number){
  this.router.navigate(["/watch",id])
}

}
