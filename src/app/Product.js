import React from 'react';
import '../style/style.sass';
import cat from '../img/cat.png'

const Product = (props) => { 
    let textBottom =  <span>Чего сидишь? Порадуй котэ, <a className='buy' onClick={selectProduct} >купи. <div className='border-bottom'></div></a></span>
    let textDisabledBottom =  <span className='not_available'>Печалька,  {props.taste}  закончился.</span>
    let textDefaultBottom = <span>Чего сидишь? Порадуй котэ,  <a className='buy' onClick={selectProduct} >купи. <div className='border-bottom'></div></a></span>
    let textSelectedBottom = props.bottom_text_selected
    let key = props.number

    function selectProduct(event){
        let current = event.currentTarget
        let target = event.target
        if(!props.availability){
            return
        }
        if(event.target.className == 'buy'){
            target = event.currentTarget.parentNode.parentNode.parentNode.childNodes[0].childNodes[0]
        }
        props.selectedProduct(key)
        target.closest('.product_content__border').classList.toggle('Selected')
        target.closest('.product_content__border').classList.remove('Hover1')
        if(target.closest('.product_content__border').classList.value == "product_content__border SelectedHover Hover1"){
            target.closest('.product_content__border').classList.toggle('Hover1')
        }
        if("product_content__border SelectedHover" == target.closest('.product_content__border').classList.value){
            target.closest('.product_content__border').classList.toggle('SelectedHover')
        }
        if(event.target.className == 'buy'){
            addRemoveFocus(target)
            return
        }
        target.closest('.product_content__border').addEventListener('mouseleave', handler)
    }

    function handler() {
        let target = event.target
        addRemoveFocus(target)
      }

    function addRemoveFocus (target){
        if(target.closest('.product_content__border').classList.value == 'product_content__border' ){
            target.closest('.product_content__border').classList.remove('SelectedHover')
            target.closest('.product_content__border').classList.add('Hover1')
        }
        else if(target.closest('.product_content__border').classList.value == 'product_content__border Selected' ){
            target.closest('.product_content__border').classList.add('SelectedHover')
            target.closest('.product_content__border').classList.remove('Hover1')
            target.closest('.product_content__border').removeEventListener('mouseleave', handler)
        }
    }

    return(
        <div key={key} className="item" >
            <div onClick={selectProduct}  className="product_content__border">
                <div className="product_content">
                        <div className='availability'>
                            <div className='product_title' >Сказочное заморское яство</div>
                            <div className='product_name'>Нямушка</div>
                            <div className='product_taste'>{props.taste}</div>
                            <div className='product_number_of_servings'><strong>{props.number_of_servings}</strong> порций</div>
                            <div  className='product_gifts'>{props.gifts}</div>
                            <img src={cat} alt="cat"/>
                        </div>
                        {/* <div className='product_weight__position'> */}
                        {/* <br/> */}
                            <div className='product_weight'>
                                
                                <div className='circle'> 
                                
                                <div className='text_weight'> {props.weight} <br/>
                                    <span>кг </span>  
                                 </div>  
                                </div>
                                 
                                {/* <div className='product_weight__number'>
                                        {props.weight} 
                                </div> 
                                <div className='product_weight__weight' >
                                    кг  
                                </div> */}
                            </div>
                        {/* </div>  */}
                </div>
            </div>
            {/* <div  className="bottom_text">{(props.availability)
            ? (props.select)? textSelectedBottom : textDefaultBottom
            : textDisabledBottom} 
            </div> */}
            
        </div>
        
    )
}

export default Product;