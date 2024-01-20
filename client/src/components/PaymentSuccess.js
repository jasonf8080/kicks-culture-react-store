import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  min-width: 100vw;

.order-success-container{
   background-color: #f0f0f0;
   text-align: center;
   padding: 40px;
   background-color: #f0f0f0;
   border-radius: 8px;
   min-width: 700px;
   max-width: 700px;
}


  p {
    margin: 10px 0px 25px;
  }

  button {
    color: var(--red-main);
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    text-decoration: underline;
    font-size: 16px;
  }

  @media(max-width: 768px){
    padding: 20px;
    
    .order-success-container{
        min-width: 90%;
        max-width: 90%;
        padding: 30px;
    }   

    h1{
        font-size: 22px;
    }

    p, button{
        font-size: 14px;
    }

     p {
       margin: 10px 0px 15px;
     }

   
  }
`;

const PaymentSuccess = ({ success }) => {
  return (
    <Wrapper>
      <div className='order-success-container'>
        <h1>Thank you for your order!</h1>
        <p>{success}</p>
        <Link to='/'>
            <button>Back to homepage</button>
        </Link>
      </div>
    </Wrapper>
  );
};

export default PaymentSuccess;
