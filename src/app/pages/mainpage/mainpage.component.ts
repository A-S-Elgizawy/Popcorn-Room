import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-mainpage',
  imports: [],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent implements OnInit {



  ngOnInit(): void {
    this.platformKidsActive()
    this.animationTitle()
  }

  platformKidsActive(){
    const platform = document.querySelector(".plateForms")
    const kids = document.querySelector(".kids-part")
    window.addEventListener("scroll", () => { 
      platform?.classList.toggle('active',window.scrollY >= 710);
      kids?.classList.toggle('active',window.scrollY >= 1420);
    })
  }

animationTitle(){
  const animationtitle =document.querySelector(".animation-title")
  setTimeout(()=>{
    animationtitle?.classList.add('scale')
  },0)
  setTimeout(()=>{
    animationtitle?.classList.add('color')
  },7000)
}

}
