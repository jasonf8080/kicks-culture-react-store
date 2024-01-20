import styled from 'styled-components';

const Wrapper = styled.div`
.footer,
.mobile-footer{
  background: var(---black);
  color: white;
  padding:  90px 0;
}

.footer .container{
  display: flex;
  justify-content: space-between;
}

.mobile-footer {
  padding: 25px 0 50px;
}

.mobile-footer{
  display: none;
}

.footer-bottom {
  padding: 30px 0;
}


.footer-img-container {
  position: relative;
}

.footer-logo {
  max-width: 150px;
  height: auto;
  text-align: left;
}

.footer h3, .mobile-footer h3 {
  margin-bottom: 20px;
}

.footer-links {
  display: flex;
  flex-direction: column;
}

.footer-links a, .social-icons a {
  color: white !important;
  margin-bottom: 10px;
}




.social-icons {
  display: flex;
  align-items: center;
}

.social-icons span {
  font-size: 35px;
  margin-right: 20px;
}



@media(max-width: 1024px){
  .footer, .footer-bottom{
    display: none;
  }

  .mobile-footer{
    padding-top: 50px;
  }

  .mobile-footer, .mobile-footer-bottom{
    display: block;
  }

  .mobile-footer .container{
    display: flex;
    justify-content: space-between;
  }

    .footer-logo {
      position: static;
      max-width: 130px;
      text-align: right;
      margin-bottom: 80px;
    }
}

@media(max-width: 768px) {


  .mobile-footer .container {
    flex-direction: column;
    text-align: center;
  }

    .footer-img-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .social-icons{
      justify-content: center;
      align-items: center;
    }

}
`;

export default Wrapper