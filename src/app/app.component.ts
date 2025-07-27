import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { MovieService } from './service/movie.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,RouterModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'cinemaapp';
  

  serviceCinema = inject(MovieService)
  ngOnInit(): void {
    // this.getTypemovies()
    window.addEventListener("scroll",()=>{
      const logo = document.querySelector(".en")
      logo?.classList.toggle("active",window.scrollY > 0)
    })

  }
  openList(){
    const Linkscontainer = document.querySelector(".links")
    Linkscontainer?.classList.add("active")
  }
  closeList(){
    const Linkscontainer = document.querySelector(".links")
    Linkscontainer?.classList.remove("active")
  }
  activeLink(){
    const Linkscontainer = document.querySelector(".links")
    Linkscontainer?.classList.remove("active")
  }

  displayfilm(){
    const filmlink = document.querySelector('.filmlink') as HTMLElement | null;
    const list = document.querySelector('.films') as HTMLElement | null;
    const body = document.querySelector('body');
    filmlink?.addEventListener('click',()=>{
      if (window.innerWidth > 840) {
        list?.classList.toggle("active");
    if (list?.classList.contains("active")) {
         list.style.display = "block";
    }else{
      setTimeout(()=>{
        if (list) {
          list.style.display = "none";
        }
      },800)
    }
  }
    })
  }
  displayseries(){
    const seriesLink = document.querySelector('.seriesLink') as HTMLElement | null;
    const list =  document.querySelector('.series') as HTMLElement
    const body =  document.querySelector('body')
    seriesLink?.addEventListener("click",()=>{
      if (window.innerWidth > 840) {
      list?.classList.toggle("active")
          if (list?.classList.contains("active")) {
           list.style.display = "block";
      }else{
        setTimeout(()=>{
          if (list) {
            list.style.display = "none";
          }
        },400)
      }
    }
    })
  }
  typeMovies:any[]=[]
  // typeMovies: { filmTypeId: number; filmTypeName: string }[] = [];
  // getTypemovies(){
  //   this.serviceCinema.getTypeMovies().subscribe((data)=>{
  //       this.typeMovies=data
  //       console.log("yes"+this.typeMovies);
        
  //   })
  // }

  links(){
    const links = document.querySelectorAll(".link")
    links.forEach(link=>{
      link.addEventListener("click",()=>{
        console.log('yes');
        
        links.forEach(link=>{
          link.classList.remove("active")
        })
        link.classList.add("active")
      })
    })
  }
}
