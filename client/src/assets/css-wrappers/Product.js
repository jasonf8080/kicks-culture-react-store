import styled from 'styled-components';


const ProductWrapper = styled.div`
/* Single Product */
.single-product-section {
  position: relative;
  margin-bottom: 80px;
}

.logo-image
.mobile-single-product{
  display: none;
}

.bg-design {
  background: linear-gradient(to right bottom, #635851, #ffc28d);
  position: absolute;
  top: 0;
  left: 0;
  border-top-left-radius: 0%;
  border-top-right-radius: 0%;
  border-bottom-left-radius: 0%;
  border-bottom-right-radius: 100%;
  width: 40%;
  height: 100%;
  z-index: -1;
}


.single-product-flex {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 50px;
  row-gap: 50px;
}

.single-product-flex > * {
  max-width: 100%;
}

.brand-logo-flex{
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 100%;
}

.logo-image {
  height: auto;
  width: 70px;
  transform: translate(-100px, -10px);
}

.single-product-img {
  transform: rotate(25deg) scale(1.1);
}

.mobile-single-product-img{
  display: none !important;
}

.single-product-content .brand, .single-product-content h1{
  text-transform: capitalize;
}

.size-heading {
  margin: 30px 0 12px;
}

.sizes-grid {
  display: grid;
  grid-template-columns: repeat(5, 50px);
  column-gap: 10px;
  row-gap: 10px;
}

.sizes-grid .pagination-btn {
  height: 50px;
  width: 50px;
}

.price {
  margin: 30px 0;
}

.card-info .price{
  margin: 0;
}

.add-to-cart-container {
  display: flex;
  align-items: center;
}

.related-products .heading{
  margin-bottom: 30px;
}


.reviews-heading{
  margin-bottom: 50px;
}

.ratings-flex,
.reviews-container {
  margin-top: 40px;
}

.ratings-flex {
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 70px;
  row-gap: 70px;
}

.ratings-content-main {
  display: flex;
  align-items: center;
}

.ratings-content-main img {
  max-width: 150px;
  height: auto;
  transform: rotate(15deg);
}

.stars {
  display: flex;
  align-items: center;
}

.stars span {
  color: var(--gold);
}


.rating-item,
.rating-info {
  display: flex;
  align-items: center;
}

.rating-item {
  margin-bottom: 20px;
}

.rating-info p {
  margin-right: 10px;
}

.rating-info span {
  color: var(--gold);
}

.full-bar {
  margin-left: 10px;
  width: 100%;
  height: 20px;
  background: var(--light-grey);
  border-radius: var(--borderRadius);
  position: relative;
}

.percentage-bar {
  position: absolute;
  top: 0;
  height: 100%;
  background: var(--gold);
  border-top-left-radius: var(--borderRadius);
  border-bottom-left-radius: var(--borderRadius);
  /* border-radius: var(--smallBorderRadius); */
}

.reviews-container{
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.reviews-container > * {
  max-width: 100% !important;
}

.review{
  max-width: 1fr;
  padding: 30px;
  border: 1px solid var(--light-grey);
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  text-transform: lowercase;
  max-width: 100% !important;
  position: relative;
}

.review-name-flex{
  display: flex;
  align-items: center;
}

.review-name-flex h3{
  margin-right: 10px;
}

.mobile-review-btns-container {
  
  position: absolute;
  bottom: 20px;
  right: 25px;
}

.edit-btn, .delete-btn{
  background: transparent;
  font-size: 1.25rem;
  padding: 2px;
  margin-right: 3px;
}

.edit-btn{
  color:  #02a86e;
  transform: translateY(2px);
}

.delete-btn{
  transform: translateY(1px);
  color: var(--red);
}

.review-name{
  text-transform: capitalize;
}

.review-date{
  text-transform: uppercase;
}
.review-date, .review-content{
  color: #666872;
}

.face-green, .face-yellow, .face-red, .face-none, .star{
  font-size: 1.5rem;
  margin-left: 10px;
}


.name-stars-flex, .stars-face-flex, .date-rating-flex, .rating-star-flex{
  display: flex;
}

.stars-face-flex, .rating-star-flex{
  align-items: center;
}

.rating-star-flex{
  background: white;
  color: black;
  transform: translateY(-3px);
  border-radius: var(--borderRadius);
}

.rating-star-flex h3{
  font-size: 18px !important;
}

.rating-star-flex .sm-star{
  font-size: 18px !important;
}


.name-stars-flex, .date-rating-flex{
  justify-content: space-between;
  align-items: start;
}

.face-green{
  color: var(--green)
}

.face-yellow {
  color: var(--yellow)
}

.face-red {
  color: var(--red)  
}

.face-none{
  color: #b0b0b0;
}

.stars {
  display: flex;
  align-items: center;
}

.star {
  color: var(--gold);
}

.sm-star{
  font-size: 0.9rem;
}

.rating-star-flex span{
  transform: translateY(1px);
  margin-left: 5px;
}

.review-content{
  margin-top: 30px;
}

.ratings-information-grid{
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
}

.ratings-information-grid > * {
  min-width: 100%;
}



.ratings-information-grid h3{
  margin-bottom: 30px;
}

.ratings-display-flex{
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  
}

.ratings-display-flex p{
  display: flex;
  align-items: center;
}

.rating-item{
  position: relative;
  height: 20px;
  background: var(--normal-grey);
  border-radius: 10px;
  width: 100%;
  margin: 0px 10px;
}

.rating-item-percentage{
  position: absolute;
  top: 0;
  left: 0;
  background: var(--gold);
  height: 100%;
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
}

.overall-rating-flex{
  display: flex;
  align-items: center;
  transform: translateY(-30px);
}

.overall-rating-info{
  margin-left: 10px;
}

.overall-rating-flex .total-reviews{
  margin-left: 10px;
}

.overall-rating-flex h1{
  font-size: 70px;
}

.leave-a-review-container{
  transform: translateY(-15px);
}

.leave-a-review-container .leave-a-rating{
  margin: 20px 0px 60px;
}

.leave-a-rating {
  display: flex;
  align-items: center;
}


.related-products{
  padding-bottom: 10px;
}

.mobile-related-products, .mobile-related-products h2{
  display: none;
}

.related-products .underline, .reviews-section .underline{
 margin-bottom: 40px;
}

.related-products h1{
  margin-bottom: 15px;
}


@media(max-width: 1024px) {
 

  .main-section.single-product-section{
    padding: 0;
  }

  .bg-design, .mobile-single-product{
    height: 75vh;
  }

  .bg-design{
    width: 68%;
  }


  .single-product-img{
    display: none !important;

  }

  .single-product-flex {
    grid-template-columns: 1fr;
  }

  .mobile-single-product{
    position: relative;
    display: flex ;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
  }

  .mobile-single-product img{
    max-width: 80%;
    margin: 0 auto;
    display: block !important;
  }

  .logo-image{
    transform: translateX(0);
  }



 
}

@media(max-width: 768px){
 
  .bg-design,
  .mobile-single-product {
        height: 55vh;
    }

  .reviews-container{
    grid-template-columns: 1fr;
  }

.mobile-related-products, .mobile-related-products h2{
  display: block;
}
}

@media(max-width: 500px) {


  .bg-design,
  .mobile-single-product {
        height: 40vh;
  }

  .sizes-grid {
    grid-template-columns: repeat(5, 45px); 
    column-gap: 8px;
    row-gap: 8px;
}

    .logo-image{
      width: 40px;
      transform: translate(0px, 0px);
    }



    .overall-rating-flex h1 {
      font-size: 55px;
    }

  
    .overall-rating-flex .face-green,
    .overall-rating-flex .face-yellow,
    .overall-rating-flex .face-red,
    .overall-rating-flex .face-none,
    .overall-rating-flex .star {
      font-size: 20px;
      margin-left: 8px;
    }

    .review .face-green,
    .review .face-yellow,
    .review .face-red,
    .review .face-none,
    .review .star {
      font-size: 15px;
      margin-left: 5px;
    }


    .review-name{
      transform: translateY(-2px);
    }
  

    .sm-star{
      font-size: 0.7rem !important;
    }
 


    .review-btns-container{
      display: none;
    }

    .mobile-review-btns-container{
      display: flex !important;
      align-items: center;
    }


    
.edit-btn, .delete-btn{
  font-size: 0.9rem;
 
}

  

   
}

`;

export default ProductWrapper