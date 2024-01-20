import styled from 'styled-components';

const Wrapper = styled.div`
/* About Page */

.white-line{
  width: 100%;
  height: 1px;
  background: var(--normal-grey);
}

.about-us-section {
  position: relative;
}

.about-us-section p {
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 20px;
  line-height: 2;
}

.about-images-section .white-line {
  background: var(--normal-grey);
}

.about-images-section .white-line:first-child {
  margin-bottom: 50px;
  background: var(--normal-grey);
}
.about-images-section .white-line:last-child {
  margin-top: 50px;
  background: var(--normal-grey);
}

.about-images-grid {
  display: flex;
  flex-direction: column;
}

.about-images-grid img {
  margin-bottom: 30px;
  max-width: 100%;
  border-radius: 5px;
}

.about-images-grid img:last-child {
  margin-bottom: 0px;
}

.about-locations-grid {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 60px 0;
}

.about-locations-item {
  text-align: center;
}

.about-locations-item h2 {
  margin-bottom: 15px;
}

@media(max-width: 1200px) {
  
}

@media(max-width: 1024px) {
  .about-us-section p {
      font-size: 1rem !important;
    }
}

@media(max-width: 768px) {

  .small-container{
    max-width: 90% !important;
  }


.white-line{
  margin: 20px 0 !important;
}

.about-images-grid img {
  margin-bottom: 20px;
}

.about-locations-grid{
  flex-direction: column;
  margin: 0;
}

.heading{
   margin-bottom: 10px;
}

.main-section{
  padding: 50px 0 0px;
}

.main-section.about-locations-section{
  padding: 10px 0 50px;
}

.about-locations-item{
  margin: 10px 0;
}

.about-locations-item h2 {
    margin-bottom: 5px;
}
}

@media(max-width: 500px) {
    .about-us-section p {
      font-size: 0.9rem !important;
      line-height: 2;
    }
}

`;

export default Wrapper