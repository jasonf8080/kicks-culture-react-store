import styled from 'styled-components';



const Wrapper = styled.div`
 /* Hero */
.header-section{
  height: 85vh;
 
}


.header-section .container{
  position: relative;
  min-height: 100%;
  transition: opacity 0.5s;
  max-width: 100%;
}

.header-section img, .header-section .overlay{
  position: absolute;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
  
}

.header-section .overlay{
  background: rgba(0, 0, 0, 0.5);
}

.header-section img{
  object-fit: cover;
}

.header-text{
  position: absolute;
  bottom: 10%;
  left: 4%;
  color: white;
}

/* .header-text p{
  font-size: 22px;
} */


.btn-transparent {
  margin-top: 20px !important;
  padding: 10px 24px;
display: block;
max-width: fit-content;
}

.header-dots{
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10px;
  display: flex;
  align-items: center;
}

.header-dot{
  color: white;
}


/* Featured */

.featured-section .btn-black{
  max-width: 170px;
}


/* Brands */

.brands-section {
  padding: 50px 0;
}

.brands-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.brand-item {
  position: relative;
  cursor: pointer;
  max-height: 520px;
}

.brand-item,
.brand-item .overlay,
.brand-item img {
  border-radius: var(--smallBorderRadius);
}

.brand-item .overlay {
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}


.brand-item img {
  max-width: 100%;
  height: auto;
  max-height: 100%;
  object-fit: cover;
  min-width: 100%;
  max-width: 100%;
}


.brand-item-text{
  position: absolute;
  bottom: 10%;
  left: 10%;
  color: white;
}



.brand-item-text .btn-transparent{
  margin-top: 10px;
}

.btn-black{
  text-align: center;
  margin-top: 5rem !important;
}

.view-all{
  min-width: 220px !important;
}


/* Articles */
.articles-grid {
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;
  row-gap: 30px;
}

.articles-grid a{
  color: black;
}

.mobile-articles{
  display: none;
}

.article-item {
  background: var(--light-grey);
  max-width: 100%;
  border-radius: var(--borderRadius);
  cursor: pointer;
}


.article-item:hover.article-item img {
  transform: scale(1.1);
}

@media(max-width: 700px) {
 .article-item:hover.article-item img {
  transform: scale(1);
}
}

.article-item .img-container,
.article-item img {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.article-item .img-container {
  max-width: 100%;
  height: auto;
  overflow: hidden;
}

.article-item img {
  max-width: 100%;
  height: auto;
  transition: all 0.5s;
}

.article-item-content {
  padding: 20px;
}

.article-item-content h3 {
  margin-bottom: 12px;
}



/* Locations */

.locations-section {
  background: black;
  color: white;
  padding-bottom: 10px;
}

.locations-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 40px;
  margin-bottom: 60px;
}

.locations-grid > * {
  max-width: 100%;
}

.location-item img {
  max-width: 100%;
  border-radius: var(--borderRadius);
}

.location-content {
  margin-top: 30px;
}

.location-content h1 {
  text-decoration: underline;
  margin-bottom: 10px;
}



  @media(max-width: 1200px) {

  }

  @media(max-width: 1024px) {

  }

  @media(max-width: 768px) {
  .header-section {
    height: 85vh;
   padding: 0 !important;
   
  }

  .header-section .container{
    max-width: 100%;
  }

   .header-section .container,
   .header-section .overlay,
   .header-section img{
    border-radius: 0;
   }

  .header-text {
    bottom: 12%;
    left: 8%;

  }

    .header-text p {
      /* font-size: 16px; */
    }
  
   

    .header-section .btn-transparent,
    .brand-item-text .btn-transparent{
      padding: 6px 12px;
     
       
    }
  
    .header-dots {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      bottom: 10px;
      display: flex;
      align-items: center;
    }
  
    .header-dot {
      /* font-size: 20px; */
      color: white;
    }

    .brands-grid {
      grid-template-columns: 1fr; 
    }
    
    .brand-item {
      position: relative;
      cursor: pointer;
      max-height: 520px;
    }
    
    
    .brand-item-text{
      left: 8%;
    }
    
    .brand-item-text h4{
      margin-bottom: 10px;
    }
    
    .articles-grid {
      grid-template-columns: 1fr;
    }
  
        
    .locations-grid {
      grid-template-columns: 1fr;
      gap: 40px;
    }
    
 
    .location-content {
      margin-top: 30px;
      text-align: center;
    }
    
    .location-content h1 {
      text-decoration: underline;
      margin-bottom: 10px;
    }
    
    .locations-section {
      padding-bottom: 1px;
    }


    .articles-grid{
      display: none;
    }

     .mobile-articles .articles-grid, .mobile-articles{
      display: block;
    }

  }

  @media(max-width: 500px) {
    .header-section {
      height: 65vh;
      padding-top: 30px;
      padding-bottom: 30px;
  }

  .header-text p{
    font-size: 14px !important;
  }
    
    .text-5xl{
      font-size: 24px !important;
      margin-top: 5px !important;
      margin-bottom: 15px !important;
    }

    .btn-transparent{
      font-size: 12px !important;
      margin-top: 0px !important;
    }

    .header-dot{
      font-size: 16px !important;
    }


  }


`;

export default Wrapper