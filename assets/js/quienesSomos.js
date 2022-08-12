observer = new IntersectionObserver(entries => {
    
    entries.forEach(entry => {
      
      if (entry.isIntersecting) {
        
        entry.target=(tapita).classList.add('footer__SocialNav__CoverMove');
      } else { 
        
        entry.target=(tapita).classList.remove('footer__SocialNav__CoverMove');
      }
    });
  });
  
  let socialNavContainer = document.getElementById(`socialNav-container`)
  observer.observe(socialNavContainer)
  let tapita = document.getElementById(`socialNav-cover`)

