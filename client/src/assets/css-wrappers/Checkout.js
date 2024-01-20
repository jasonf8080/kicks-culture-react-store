import styled from "styled-components";

const Wrapper = styled.div`
  .container{
    padding: 60px 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 60px;
  }

  

  .heading:nth-child(1){
    margin-bottom: 30px;
  }


 .checkout-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.checkout-items{
  display: flex;
  flex-direction: column;
  
}

.checkout-item{
    display: grid;
    max-width: 100%;
    min-width: 100%;
    grid-template-columns: 80px 1fr;
    border-bottom: 1px solid var(--normal-grey);
    padding: 20px 0;
}

.underline{
    margin-top: 0px !important;
    margin-bottom: 5px !important;
}

.checkout-img-quantity{
    max-width: 100%;
    position: relative;
    border-radius: var(--smallBorderRadius);
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  top: 0;
  left: 0;
  z-index: -1;
  border-radius: inherit;
}

.checkout-img-quantity span{
    position: absolute;
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
    border-radius: 100%;
    top: -10px;
    left: -10px;
    color: white;
}

.checkout-img-quantity img{
    max-width: 100%;
    object-fit: cover;
    height: auto;
    border-radius: inherit;
}

.checkout-item-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 15px;
    
}

.checkout-size-price-flex{
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}

.checkout-total-container{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.checkout-total-container p{
  margin-bottom: 10px;
}

.card-number{
  font-weight: bold;
  margin-bottom: 15px;
}

.error-message{
  margin: 12px 0;
  padding: 12px;
}

.checkout-form {
  display: flex;
  flex-direction: column;
  min-width: 100%;
  max-width: 100%;
  margin-bottom: 30px;
  background: var(--normal-grey); 
  padding: 40px;
  border-radius: var(--smallBorderRadius);
}

label{
  font-weight: bold;
}

.checkout-form input {
  margin-bottom: 15px;
  padding: 10px 0px;
  max-width: 100%;
  min-width: 100%;
  box-sizing: border-box; /* Ensure padding is included in the width */
  border: none;
  border-bottom: 1px solid #555;
  border-radius: 0px !important;
  outline: none;
  background: transparent;
}

.form-group-flex{
  display: flex;
  align-items: center;
}

.form-group{
 
}

.form-group-flex > *{
  min-width: 80px;
  max-width: 80px;
}

.form-group-flex .form-group:nth-child(1){
  margin-right: 20px;
}

.checkout-form button {
  padding: 10px 20px;
  width: 200px;
}

.checkout-form button:hover {
  background-color: #45a049;
}



@media(max-width: 1200px) {
    
}
@media(max-width: 1024px) {
    
}
@media(max-width: 768px) {
    .container{
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .checkout-form button {
    width: 100%;
  }

}
@media(max-width: 500px) {
    
}

`

export default Wrapper