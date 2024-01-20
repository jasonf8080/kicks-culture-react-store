import styled from 'styled-components';

const Wrapper = styled.div`
/* Register / Login */
.register-section {
  text-align: center;
}

.register-section .error-message, .success-message{
  margin-bottom: 20px;
  padding: 10px 20px;
}

.register-form {
  display: flex;
  flex-direction: column;
}


.register-toggle {
  border: none;
  background-color: white;
}

@media(max-width: 768px){
  .xsmall-container{
    max-width: 70%;
  }
}

@media(max-width: 500px){
  .xsmall-container, .btn-black{
    min-width: 80%;
    max-width: 80%;
  } 

  .btn-black{
    min-width: 100%;
  }

  .success-message, .error-message{
    font-size: 13px;
  }

  .form-input{
    margin-bottom: 14px;
  }
}

`;

export default Wrapper