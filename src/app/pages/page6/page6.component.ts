import { Component, inject, OnInit } from '@angular/core';
import { MovieService } from '../../service/movie.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page6',
  imports: [CommonModule,RouterLink],
  templateUrl: './page6.component.html',
  styleUrl: './page6.component.css'
})
export class Page6Component implements OnInit{
  moviesList: any[] = [];
  movies: any[] = [];
  serviceCinema=inject(MovieService)

  constructor(private router:Router){}

  ngOnInit(): void {
   this.getAllmovies()
   this.dropdown()
  }

getAllmovies(){ 
  this.serviceCinema.getMovies().subscribe((data:any)=>{
  this.moviesList = data;
  this.movies=this.moviesList.slice(60,72)
  this.filteredMovies = [...this.movies];
  })
}
details(Id:number){
   this.router.navigate(["/movie-details",Id])
}

 selectchoise(text: string | null) {
const dropdowncontent = document.querySelectorAll(".dropdown-content");
  const dropdownBtn = document.querySelectorAll("#dropdownBtn");
     dropdowncontent.forEach((item,index)=>{
      item.addEventListener("click",()=>{    
        if (dropdownBtn[index] instanceof HTMLElement) {
          dropdownBtn[index].innerHTML = `<span class=typeName>${text}</span> <i class="fa-solid fa-chevron-down"></i>`;
        }
      })
     })

  }
dropdown(){
   const dropdown = document.querySelectorAll(".dropdown");
  // const dropdownBtn = document.querySelectorAll(".dropdownBtn");
   dropdown.forEach((item,index)=>{
     item.addEventListener("click",()=>{
      dropdown[index].classList.toggle("open")
     })
      window.addEventListener("click",(e)=>{
          if (!(e.target instanceof HTMLElement) || !item.contains(e.target )) {
              dropdown[index].classList.remove("open")
          }
       })
   })
}

  filteredMovies: any[] = [];
selectedType: string = '';
selectedLanguage: string = '';
selectedCountry: string = '';
selectedYear: string = '';

selectOption(value: string, category: string) {
  const normalized = value === 'الكل' ? '' : value;

  switch (category) {
    case 'type':
      this.selectedType = normalized;
      break;
    case 'language':
      this.selectedLanguage = normalized;
      break;
    case 'country':
      this.selectedCountry = normalized;
      break;
    case 'year':
      this.selectedYear = normalized;
      break;
  }
}

filterMovies() {
  this.filteredMovies = this.movies.filter(movie => {
    const matchType = this.selectedType ? movie.filmType.includes(this.selectedType) : true;
    const matchLang = this.selectedLanguage ? movie.filmLanguage === this.selectedLanguage : true;
    const matchCountry = this.selectedCountry ? movie.filmCountry === this.selectedCountry : true;
    const matchYear = this.selectedYear ? movie.releaseDate === this.selectedYear : true;
    return matchType && matchLang && matchCountry && matchYear;
  });
}
}

