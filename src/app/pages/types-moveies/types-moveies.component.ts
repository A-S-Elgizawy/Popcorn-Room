
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { MovieService } from '../../service/movie.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-types-moveies',
  imports: [CommonModule,RouterLink],
  templateUrl: './types-moveies.component.html',
  styleUrl: './types-moveies.component.css'
})
export class TypesMoveiesComponent implements OnInit{

  moviesList: any[] = [];
  movies: any[] = [];
  filteredMovies: any[] = [];
  serviceCinema=inject(MovieService)

  constructor(private router:Router){}

  ngOnInit(): void {
    
      this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd){
        window.scrollTo(0, 0);
      }
    })
   this.getAllmovies()
   this.dropdown()
  }

getAllmovies(){ 
  this.serviceCinema.getMovies().subscribe((data:any)=>{
  this.moviesList = data;
  this.movies=this.moviesList.slice(0,12)
  this.filteredMovies = [...this.movies];
  })
}
details(Id:number){
   this.router.navigate(["/movie-details",Id])
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

// filterMovies(){
//   const dropdowncontent = document.querySelectorAll(".dropdown-content");
//   const dropdownBtn = document.querySelectorAll(".typeName");

//    const types= dropdownBtn[0].innerHTML;
//    const languages= dropdownBtn[1].innerHTML
//    const year= dropdownBtn[2].innerHTML
//    const country= dropdownBtn[3].innerHTML
  
//    console.log(types, languages, year, country);

   
//   if (types === "الكل" || languages === "اللغة" || year === "سنة الاصدار" || country === "الدولة") {
//     this.getAllmovies();
//     return;
//   }
//    if(types !== "الكل" && languages === "اللغة" && year === "سنة الاصدار" && country === "الدولة") {
//      this.movies = this.movies.filter(movie =>
//        (movie.filmType).slice(0, (movie.filmType).indexOf(" ")).toLowerCase() === types.toLowerCase()
//      );
//    }

//    if(languages !== "اللغة" && types === "الأنواع" && year === "سنة الاصدار" && country === "الدولة") {
//      this.movies = this.movies.filter(movie =>
//        (movie.filmLanguage).slice(0).toLowerCase() === languages.toLowerCase()
//      );
//    }

//    if(languages === "اللغة" && types === "الأنواع" && year !== "سنة الاصدار" && country === "الدولة") {
//      this.movies = this.movies.filter(movie =>
//        (movie.releaseDate).slice(0).toLowerCase() === year.toLowerCase()
//      );
//    }
//    if(languages === "اللغة" && types === "الأنواع" && year === "سنة الاصدار" && country !== "الدولة") {
//      this.movies = this.movies.filter(movie =>
//        (movie.filmCountry).slice(0).toLowerCase() === country.toLowerCase()
//      );
//    }

//   // this.movies = this.movies.filter(movie =>
//   //   (movie.filmLanguage).slice(0).toLowerCase() === languages.toLowerCase()
//   // );
// }

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
