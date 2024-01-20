import styled from 'styled-components';

const Wrapper = styled.div`
/* Timeout Alerts */
.item-added-alert, .review-action-alert {
  position: fixed;
  top: 30px;
  right: 30px;
  background: white;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.4);
  width: 400px;
  border-radius: var(--smallBorderRadius);
  z-index: 99;
}

.item-added-alert a {
  color: black;
}

.review-action-alert{
  color: white;
}

.review-action-alert.success{
  background: #438773;
  color: white;
}

.review-action-alert.danger{
  background: #bf4545;
  color: white;
}



.review-action-alert.success .alert-top{
  background: #2f5f50;
}

.review-action-alert.danger .alert-top{
  background: #a13a3a;
}

.review-action-alert.success .alert-top,
.review-action-alert.danger .alert-top{
 color: white;
}


.alert-top {
  border-top-right-radius: var(--smallBorderRadius);
  border-top-left-radius: var(--smallBorderRadius);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--normal-grey);
  padding: 10px 20px;
}


.item-added-alert-container,
.review-action-alert-container {
  display: flex;
  padding: 20px;
 
}

.review-action-alert-container {
  justify-content: center;
  align-items: center;
  text-align: center;
}

.item-added-alert-container img {
  width: 90px;
  height: auto;
  margin-right: 12px;
}

.item-added-p{
  font-size: 20px;
}

.alert-timer {
  height: 4px;
  width: 100%;
  background: black;
  animation: widthAnimation 5.5s linear;
}



@keyframes widthAnimation {
  0% {
    width: 100%;
  }

  100% {
    width: 0%;
  }
}

@media(max-width: 1200px){
    
}

@media(max-width: 1024px){

}

@media(max-width: 768px){
.item-added-alert, .review-action-alert {
  position: fixed;
  top: 30px;
  right: 50%;
  transform: translateX(50%);
  background: white;
  width: 400px;
}
}

@media(max-width: 500px){

.item-added-alert, .review-action-alert {
  position: fixed;
  top: 30px;
  right: 50%;
  transform: translateX(50%);
  background: white;
  width: 90%;
}

.item-added-alert-container,
.review-action-alert-container {
  display: flex;
  padding: 15px;
}


.item-added-alert-container img {
  width: 75px;
}

.item-added-p{
  font-size: 14px;
}
}
`

export default Wrapper