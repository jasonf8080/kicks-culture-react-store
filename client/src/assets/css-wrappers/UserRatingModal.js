import styled from 'styled-components';

const UserRatingModalWrapper = styled.div`
    /* User Rating Modal */

  .modal{
    padding-bottom: 50px;
  }

.modal-top{
    border-top-right-radius: inherit;
    border-top-left-radius: inherit;
    background: var(--normal-grey);
    padding: 10px 20px;
}

.modal-top-container{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.user-rating-modal-content, .modal-top-container{
  max-width: 90%;
  margin: 0 auto;
}

.user-rating-modal-content{
  padding-bottom: 40px;
}

.user-rating-image-title, .user-rating-item{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}

.user-rating-item p{
  margin-bottom: 10px;
}

.user-rating-image-title h2{
  font-size: 20px;
  text-align: center;
}


.user-rating-image-title img{
  width: 200px;
  height: auto;
}


.review-input{
  padding: 10px;
  height: 100px;
  width: 322px;
  padding: 10px;
  resize: none;
  outline: none;
  font-family: inherit;
  border: 2px solid var(--normal-grey);
  box-shadow: var(--boxShadow);
  border-radius: var(--smallBorderRadius);
}

.review-input:focus{
 box-shadow: 0px 5px 5px rgba(0,0,0,0.5);

  
}

.btn-black{
  width: 322px;
  margin-top: 15px;
}

@media(max-width: 1200px) {
  
}
@media(max-width: 1024px) {
  
}
@media(max-width: 768px) {

    .modal {
      min-width: 100%;
      max-width: 100%;
      min-height: 100%;
      max-height: 100%;
      border-radius: 0;
      padding-bottom: 20px;
    }
  
}
@media(max-width: 500px) {
  .review-input, .btn-black{
    width: 300px;
  }

  .exit-btn {
    background: transparent;
    font-size: 25px;
    transform: translateY(2px);
  }



}

`;

export default UserRatingModalWrapper