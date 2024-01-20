import styled from 'styled-components';

const Wrapper = styled.div`
/* Cart */
.cart-header-grid,
.cart-items-grid {
  display: grid;
  grid-template-columns: 45% 1fr 1fr 1fr;
}


.cart-header-grid {
  position: relative;
  padding-bottom: 30px;
}

.cart-center {
  text-align: center;
}



.white-line{
  height: 1px;
  background: var(--normal-grey);
}

.cart-header-grid .white-line {
  position: absolute;
  height: 1px;
  background: var(--normal-grey);
  width: 100%;
  bottom: 0;
  left: 0;
}

.cart-items-grid {
  align-items: center;
  margin: 30px 0;
  border-bottom: 1px solid var(--normal-grey);
  padding-bottom: 30px;
}


.cart-details {
  display: flex;
  align-items: start;
}

.cart-img-container,
.cart-img-container .overlay,
.cart-img-container img {
  border-radius: var(--smallBorderRadius);
}

.cart-img-container {
  width: 180px;
  position: relative;
  border-radius: var(--smallBorderRadius);
}

.cart-img-container .overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  top: 0;
  left: 0;
  z-index: -1;
  border-radius: inherit;
}


.cart-img-container img {
  max-width: 100%;
  min-width: 100%;
  object-fit: cover;
  height: auto;
  z-index: 5;
}

.cart-details-content {
  padding: 10px 30px;
}

.cart-title{
  font-weight: bold;
}


.cart-size {
  margin: 10px 0 20px;
}

.cart-quantity .quantity-container {
  max-width: 100px;
  margin: 0 auto;
}

.cart-btns-container {
  display: flex;
  align-items: center;
}

.cart-btns-container .btn-link {
  display: flex;
  align-items: center;
  margin-right: 30px;
}


  .btn-link{
    color: black;
    border: 1px solid var(--normal-grey);
    box-shadow: var(--boxShadow);
    margin-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    margin-right: 10px !important;
    border-radius: var(--smallBorderRadius);
    min-width: 220px;
  }

.btn-link span {
  margin: 0 8px;
  transform: translateY(2px);
}

.cart-total-container {
  margin-top: 50px;
  text-align: right;
}

.btn-link-container {
  width: 100%;
  text-align: right;
  display: flex;
  justify-content: flex-end;
}

.cart-total-container .btn-link {
  display: flex;
  background: black;
  color: white;
  margin-top: 20px;
}

.cart-total-container > * {
  margin-bottom: 12px;
}

.btn-transparent-container{
  display: flex;
  justify-content: end;
}



.mobile-cart{
  display: none;
}

@media(max-width: 1200px){
  
}

@media(max-width: 1024px){

}
@media(max-width: 768px){
  .cart-section{
    padding-top: 30px;
  }
  .cart-header-grid, .cart-items{
    display: none;
  }

  .mobile-cart-heading{
    margin-bottom: 15px;
  }

  .mobile-cart{
    display: block;
    margin-bottom: 40px;
  }

  .mobile-cart-items{
    display: flex;
    flex-direction: column;
  }

  .mobile-cart-item{
    display: grid;
    grid-template-columns: 180px 1fr;
    gap: 30px;
    align-items: start;
    border-bottom: 1px solid var(--normal-grey);
    padding: 20px 0;
  }

  .mobile-cart-content{
    position: relative;
    height: 100%;
  }

  

  .cart-img-container {
  width: auto;
  position: relative;
}

  .mobile-cart-item > *{
    max-width: 100%;
  }

  .mobile-cart-flex{
    display: flex;
    justify-content: space-between;
  }

  .mobile-cart-flex:nth-of-type(2) {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  align-items: center;
}


  .btn-underline{
    font-size: 20px;
  }

  .cart-btns-container{
    justify-content: center;
  }

  .cart-btns-container > *{
    width: 100%;
    height: 40px;

  }

  .cart-total-container{
    text-align: center;
  }

  .btn-transparent-container{
  display: flex;
  justify-content: center;
}




}

@media(max-width: 500px){
  .mobile-cart-item{
   
    grid-template-columns: 100px 1fr;
    gap: 20px;
  }

 

.quantity-container,
.quantity-container button {
  height: 30px;
  font-size: 12px;
  background: var(--normal-grey);
  color: black;
  border-radius: var(--smallBorderRadius);
}

.mobile-cart{
  margin-bottom: 25px;
}

  .cart-btns-container{
    flex-direction: column;
  }



.mobile-cart-flex:nth-of-type(2) {
  position: static;
  margin-top: 10px;
}

  .btn-link{
    margin-bottom: 12px;
    margin-right: 0px !important;
  }


.btn-transparent-container{
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-transparent-container .btn-link{
  width: 100%;
  background: black;
  color: white;
  padding: 25px 0;
  margin-top: 20px;
}


}


`;

export default Wrapper