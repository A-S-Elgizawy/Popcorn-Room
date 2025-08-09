import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import  Swiper  from 'swiper';
import { Keyboard, Mousewheel, Navigation } from 'swiper/modules';
import { MovieService } from '../../service/movie.service';
import { NavigationEnd, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

Swiper.use([Navigation,Keyboard,Mousewheel]);
@Component({
  selector: 'app-home',
  imports: [CommonModule,HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {


serviceCinema=inject(MovieService)
  constructor(private router:Router) {}

  movies: any[] = [];
  loading = true;
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd){
        window.scrollTo(0, 0);
      }
    })
    this.animation()
    this.activeimg()
    this.swiperone()
    this.getAllmovies()

  }

  moviesList:any[]=[]
  swiperfirstmoviesList:any[]=[]
  swiperlastmoviesList:any[]=[]
  newaddedmoviesList:any[]=[]
  bestmoviesList:any[]=[]
  moviescategoryList:any[]=[]

//  getAllmovies(){
//     this.serviceCinema.Getmovies().subscribe((res:any)=>{
//       this.moviesList=res.data
//     })
//  }
//  getAllmoviescategory(){
//     this.serviceCinema.Getmoviescategory().subscribe((res:any)=>{
//       this.moviescategoryList=res.data
//     })
//  }

details(Id:number){
   this.router.navigate(["/movie-details",Id])
}


swiperone(){
      var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
    });
}
swipertwo(){
          var swiper = new Swiper(".swipertwo", {
          spaceBetween:24,
          loop:true,
            freeMode: true,
            // freeModeMomentum: false,
            allowTouchMove: false,
          // speed: 4000,
            autoplay: {
            delay: 0,
            disableOnInteraction: false,
          },
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
              spaceBetween: 16,
              },
          },
      });

      const next = document.querySelector(".fa-chevron-right") as HTMLElement
      const prev = document.querySelector(".fa-chevron-left") as HTMLElement
     
      let stop: ReturnType<typeof setInterval>;
      
      stop = setInterval(()=>{
          next.click()
      }, 3000)

       prev.addEventListener('mouseleave',()=>{
        stop = setInterval(()=>{
          next.click()
      }, 3000)
      })
       next.addEventListener('mouseleave',()=>{
        stop = setInterval(()=>{
          next.click()
      }, 3000)
      })
       
      prev.addEventListener('mouseenter',()=>{
        clearInterval(stop)
      })
      next.addEventListener('mouseenter',()=>{
        clearInterval(stop)
      })


}

specialSwiper(){
  const items= document.querySelectorAll(".item-mutaul")
  items.forEach((ele)=>{
    ele.addEventListener("mouseenter",()=>{
        setTimeout(()=>{
          ele.classList.add("active")
        },1500)
        ele.addEventListener("mouseleave",()=>{
          ele.classList.remove("active")
        })
    })
  })
}

getAllmovies(){ 
  this.serviceCinema.getMovies().subscribe((data:any)=>{
  console.log('RAW DATA:', data);
  this.moviesList = data;
  this.swiperfirstmoviesList=this.moviesList.slice(0,10)
  this.swiperlastmoviesList=this.moviesList.slice(91)
  this.newaddedmoviesList=this.moviesList.slice(11,23)
  this.bestmoviesList=this.moviesList.slice(24,36)
    setTimeout(()=>{
      this.swipertwo()
    },0)
  })
}


animation(){
  const names = document.querySelectorAll(".name-con");
    const mainImg = document.querySelectorAll(".mainimg") 
  names.forEach((name,index) => {
       name.addEventListener("click",()=>{
       names.forEach(name => {
        name.classList.remove("active")
       })
       mainImg.forEach(img => {
        img.classList.remove("active")
       })
        name.classList.add("active")
        mainImg[index].classList.add("active")
       })
  });
}

activeimg(){
  let index = 0
  const names = document.querySelectorAll(".name-con");
   setInterval(()=>{
    (names[index] as HTMLElement).click()
    index++
    
    if(index == names.length){
      index = 0
    }
   },4500)
}

}
