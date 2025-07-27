import { Component, inject, OnInit } from '@angular/core';
import { MovieService } from '../../service/movie.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../filter/filter.pipe';


@Component({
  selector: 'app-search',
  imports: [CommonModule,FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

constructor(private router: Router) {}
ngOnInit(): void {

    this.getAllmovies();
  
}


serviceCinema=inject(MovieService)
moviesList:any[]=[];
moviesmenu:any[]=[];
movies:any[]=[];
searchstatus: boolean = true;

getAllmovies(){ 
  this.serviceCinema.getMovies().subscribe((data:any)=>{
      this.moviesList = data;
  })
}
searchTerm: string = '';
showAll: boolean = false;

  get filteredMovies() {
  if (this.showAll) {
    return this.moviesList; // عرض الكل إذا تم الضغط على الزر "الكل"
  }

  if(!this.showAll){
    if (!this.searchTerm.trim()) {
      return []; 
    }
  }
    return this.moviesList.filter(movie =>
      movie.movieName.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }


details(Id:number){
   this.router.navigate(["/movie-details",Id])
}

goBack(){
  history.back();
}

// showAllMovies(){
//   this.showAll = true
// }

search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value
    if (this.searchTerm.trim() !== '') {
      this.searchstatus = true;
      return;
    }
    this.searchstatus = true;
    this.serviceCinema.search.next(this.searchTerm)
  }

}
