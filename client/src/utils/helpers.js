export const observeCards = (cards) => {
     let options = {
        
     };

     let observer = new IntersectionObserver((entries, options) => {
       entries.forEach((entry) => {
         const entryImage = entry.target.children[1];
         const imgSrc = entryImage.getAttribute('data-src')

        if(!entry.isIntersecting){
            
        } else {
            entryImage.src = imgSrc;
        }
       })
     }, options)
      
      cards.forEach((card) => {
        console.log(card)
        observer.observe(card)
      })
}

 export const starsArray = Array.from({length: 5}, (_, index) => {
        return index + 1
})


export const dateFormatter = {
  formatDateToMonthDayYear: function (dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);

    return date.toLocaleDateString('en-US', options);
  }
};




export const handleLinkClick = () => {
      window.scrollTo(0,0)
}


