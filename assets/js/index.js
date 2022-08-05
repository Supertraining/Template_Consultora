
    observer = new IntersectionObserver(entries => {
    
    entries.forEach(entry => {
      
      if (entry.isIntersecting) {
        
        entry.target.classList.add('show');
      } else { 
        
        entry.target.classList.remove('show');
      }
    });
  });
  observer.observe(document.getElementById(`div-tabs`));
let tab1 = document.getElementById(`tab1`)
let tab2 = document.getElementById(`tab2`)
let tab3 = document.getElementById(`tab3`)

tab1.onmouseover = (() => {
    tab2.classList.remove(`active`)
    tab3.classList.remove(`active`)
    tab1.classList.add(`active`)
})
tab2.onmouseover = (()=> {
    tab1.classList.remove(`active`)
    tab3.classList.remove(`active`)
    tab2.classList.add(`active`)
 })  
tab3.onmouseover = (()=> {
    tab1.classList.remove(`active`)
    tab2.classList.remove(`active`)
    tab3.classList.add(`active`)
 })  
   

observer = new IntersectionObserver(entries => {
    
  entries.forEach(entry => {
    
    if (entry.isIntersecting) {
      
      entry.target=(tapita).classList.add('tapitaMove');
    } else { 
      
      entry.target=(tapita).classList.remove('tapitaMove');
    }
  });
});

let socialNavContainer = document.getElementById(`socialNav-container`)
observer.observe(socialNavContainer)
let tapita = document.getElementById(`tapita`)