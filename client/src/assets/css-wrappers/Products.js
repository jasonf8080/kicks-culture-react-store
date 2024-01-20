import styled from 'styled-components';

const Wrapper = styled.div`
/* Products Page */

.active-filters-section{
  margin-top: 20px;
  display: flex;
  align-items: center;
}

.active-filter-btn, .clear-filters-btn{
  background: var(--normal-grey);
  padding: 10px 20px;
  margin-right: 10px;
  border-radius: var(--smallBorderRadius);
}

.active-filter-btn{
  display: flex;
  align-items: center;
}

.active-filter-btn span{
  margin-right: 10px;
  font-size: 20px;
  transform: translateY(3.5px);
  cursor: pointer;
}

.active-filter-btn-title{
  text-transform: lowercase;
}

.clear-filters-btn{
  height: 50px;
  background: var(--red-main);
  color: white;
}


.product-count {
  margin: 40px 0;
  font-weight: bold;
  text-align: center;
  
}

.filters-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.filters {
  display: flex;
  align-items: center;
}

.filters .filter-item {
  margin-right: 15px;
}

.filter-item {
  position: relative;
  height: 50px;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--normal-grey);
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
  border-radius: var(--smallBorderRadius);
  cursor: pointer;
}

.filter-item p {
  margin-right: 30px;
}

.filter-chevron {
  color: black;
  font-size: 25px;
  transition: all 0.3s;
  margin-top: 2.5px;
}



.filter-item-container, .sort-item-container{
  position: absolute;
  top: calc(100% + 10px);
  border: 1px solid var(--normal-grey);
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  border-radius: var(--smallBorderRadius);
  background: white;
  padding: 20px;
  z-index: 99;
}

.filter-item-container{
  left: 0;
}

.sort-item-container{
  min-width: 250px;
  right: 0;
}

.filter-brand-item,
.filter-brand-item-1,
.filter-price-item,
.filter-price-item-1,
.sort-item,
.sort-item-1{
  display: flex;
  align-items: center;
}

.filter-brand-item, .filter-price-item, .sort-item{
  justify-content: space-between;
  margin-bottom: 12px;
}

.filter-brand-item.active .filter-brand-item-1 span,
.filter-price-item.active .filter-price-item-1 span,
.sort-item.active .sort-item-1 span{
  background: black;
}



.filter-brand-item p, 
.filter-price-item p,
.sort-item p{
  text-align: left;
  font-size: 14px;
  margin-left: 30px;
}

.filter-brand-item-1 span, 
.filter-price-item-1 span,
.sort-item-1 span{
  border-radius: 100%;
  height: 16px;
  width: 16px;
  border: 1px solid var(--dark-grey);
  /* transform: translateY(-0.px); */
}

.brand-count{
  text-align: center;
}




.search-filter-container{
  min-width: 350px;
}

.search-filter-container input{
  min-width: 100%;
  max-width: 100%;
  background: var(--light-grey);
  border: none;
  border-radius: var(--smallBorderRadius);
  padding: 15px 20px;
  font-family: "Figtree", sans-serif;
  outline: none;
  margin-bottom: 12px;
  border: 1px solid var(--normal-grey);
}

.filter-search-btn{
  display: block;
  text-align: center;
  min-width: 100%;
  background: black;
  color: white;
  border-radius: var(--smallBorderRadius);
  font-size: 14px;
}


.pagination-btn {
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border: 1px solid black;
  color: black;
  margin: 0 5px;
  border-radius: var(--smallBorderRadius);
}

.pagination-btn.active {
  background: black;
  color: white;
}

@media(max-width: 768px){
      .filters-section{
      display: none;
    }

    .underline{
      margin-top: 20px !important;
    }

    .mobile-filter-section, .active-filters-section{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }

    .active-filter-btn, .clear-filters-btn{
      margin: 0;
      justify-content: center;
    }

    .mobile-filter-section button{
      padding: 20px;
      min-width: 100%;
      max-width: 100%;
      background: transparent;
      border: 1px solid var(--normal-grey);
      border-radius: var(--smallBorderRadius);
      box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
      color: black !important;
    }

    .mobile-filter-section button:hover{
       background: black;
       color: white;
       transition: all 0.3s;
    }

    .mobile-filter-container, .mobile-sort-container{
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: white;
      z-index: 100;
    }

    .mobile-filter-top{
      padding: 20px 0;
      border-bottom: 1px solid var(--normal-grey);
    }

  
    .mobile-filter-top span{
      font-size: 25px;
      transform: translateY(4px);
    }

    .mobile-filter-top h3{
      font-size: 22px;
    }

    .mobile-filter-top .container{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .mobile-filter-select{
      border-bottom: 1px solid var(--normal-grey);
      padding: 15px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
    }

    .mobile-filter-select p{
      font-size: 20px;
    }

    .mobile-filter-select span{
      padding-left: 20px;
      border-left: 1px solid #dad9d9;
      transform: translateY(3px);
    }

    .absolute-mobile-filter-data{
      position: fixed;
      background: white;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: all 0.3s;
      z-index: 999;
    }

    .absolute-mobile-filter-data.left {
      transform: translateX(100%);
    }

    .absolute-mobile-filter-data.active.left{
      transform: translateX(0);
    }


  .absolute-mobile-filter-data .filter-item-container, .sort-item-container{
    position: static;
    border: none;
    box-shadow: none;
  }

   .search-filter-container{
   min-width: 300px;
  }

    .absolute-mobile-filter-data .filter-item-container .filter-search-btn{
      background: transparent;
      border: 1px solid var(--normal-grey);
      color: black;
      box-shadow: var(--boxShadow);
    }

    .filter-brand-item p, .filter-price-item p, .sort-item p {
      font-size: 18px;
    }

    .absolute-mobile-filter-data .filter-search-btn:hover{
      background: black;
      color: white;
      transition: all 0.3s;
    }

  .view-results{
    border-top: 1px solid var(--normal-grey);
    padding: 20px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  .view-results .btn-black{
    margin: 0;
    width: 100%;
    padding: 20px;
    
  }
}
`;

export default Wrapper