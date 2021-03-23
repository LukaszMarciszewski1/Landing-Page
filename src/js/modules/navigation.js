export class Navigation {
    constructor(){
      this.mainContainer = document.querySelector('.main')
      this.section = [...document.querySelectorAll('.main-content')]
      this.currentSectionIndex = 0

      document.addEventListener('wheel', ()=>{
          
      })
    }
    look(){
        const top = this.section.forEach(sec => sec.getBoundingClientRect().top)
        console.log(top)
    }
}