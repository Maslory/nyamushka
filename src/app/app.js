import React from 'react';
import '../style/style.sass';
import Product from './Product';




class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: 
                [ 
                   {    
                        title_text: "Сказочное заморское яство",
                        product_name: "Нямушка",
                        taste: "с фуагра",
                        bottom_text_selected: "Печень утки разварная с артишоками",
                        number_of_servings: 10,
                        gifts: <span><strong></strong> мышь в подарок</span>,
                        weight: "0,5",
                        select: false,
                        availability: true
                    },
                    {    
                        title_text: "Сказочное заморское яство",
                        product_name: "Нямушка",
                        taste: "с рыбой",
                        bottom_text_selected: "Головы щучьи с чесноком да свежайшая сёмгушка",
                        number_of_servings: 40,
                        gifts: <span><strong>2</strong> мыши в подарок</span>,
                        weight: "2",
                        select: false,
                        availability: true
                        
                     },
                     {    
                        title_text: "Сказочное заморское яство",
                        product_name: "Нямушка",
                        taste: "с курой",
                        bottom_text_selected: "Филе из цыплят с трюфелями в бульоне",
                        number_of_servings: 100,
                        gifts: <span><strong>5</strong> мышей в подарок</span>,
                        weight: "5",
                        select: false,
                        availability: false
                     }
                ],
            
            
        }

        this.selectedProduct = this.selectedProduct.bind(this)
        // this.selectProduct = this.selectProduct.bind(this)
        let colorDefault='#1698d9' 
        let colorDefaultHover='#2ea8e6'
        let colorSelected='#d91667'
        let colorSelectedHover='#e62e7a'
        let colorDisabled='#b3b3b3' 
    }

    selectedProduct(key){
        let array = [...this.state.productList]
        array[key].select ? array[key].select = false : array[key].select = true
        this.setState((state, props) => {
            return state.productList = array;
          });
    }

     componentDidMount(){
         for(let i=0; i< this.state.productList.length; i++){
             console.log(this.state.productList[i].availability)
             if(this.state.productList[i].availability){
                let asd = document.getElementsByClassName("product_content__border")[i]
                asd.classList.toggle('Hover1')
             }
             else{
                let availability = document.getElementsByClassName('availability')[i]
                let product_content__border = document.getElementsByClassName('product_content__border')[i]
                let product_weight = document.getElementsByClassName('circle')[i]
                product_weight.classList.toggle('disabled')
                availability.classList.toggle('disabled')
                product_content__border.classList.toggle('disabled')
                
             }
         }
        //  let asd = document.getElementsByClassName("product_content__border")[0]
        //  let asd1 = document.getElementsByClassName("product_content__border")[1]
        //  let asd2 = document.getElementsByClassName("product_content__border")[2]
        //  asd.classList.toggle('Hover1')
        //  asd1.classList.toggle('Hover1')
        //  asd2.classList.toggle('Hover1')
        //  let availability = document.getElementsByClassName('availability')[0]
        // let product_weight = document.getElementsByClassName('product_content__border ')[0]
        // product_weight.classList.toggle('disabled')
        //  availability.classList.toggle('disabled')
     }
   
    render() {
        let productList = this.state.productList
        return (
            <div className="App" id='app' >  
            {console.log(productList)}
              <h3 className='title'>Ты сегодня покормил кота?</h3>
              <div    className='main_content'>
                {productList.map((product, key) => (
                <Product
                    taste={product.taste} number_of_servings={product.number_of_servings} 
                    gifts={product.gifts} weight={product.weight} 
                    bottom_text_selected={product.bottom_text_selected}
                    key={key} number={key} select={product.select}
                    selectedProduct={this.selectedProduct}
                    availability = {product.availability}
                />))}
              </div>
            </div>
        );
    }
}

export default (App);