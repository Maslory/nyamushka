import React from 'react';
import cat from '../img/cat.png'

const Product = (props) => { 
    let textDisabledBottom =  <span className='not_available'>Печалька,  {props.taste}  закончился.</span>
    let textDefaultBottom = <span>Чего сидишь? Порадуй котэ,  <a className='buy' onClick={selectProduct} >купи. <div className='border-bottom'></div></a></span>
    let textSelectedBottom = props.bottom_text_selected
    let key = props.number
    let currentTargetProduct = null

    function selectProduct(event){
        let current = event.currentTarget
        currentTargetProduct = current
        if(!props.availability){
            return
        }
        if(event.target.className == 'buy'){
            current = event.currentTarget.parentNode.parentNode.parentNode.childNodes[0]
            currentTargetProduct = event.currentTarget.parentNode.parentNode.parentNode.childNodes[0]
        }
        props.selectedProduct(key)
        current.classList.toggle('Selected')
        current.classList.remove('Hover1')
        if(current.className == "product_content__border SelectedHover Hover1"){
            current.classList.toggle('Hover1')
        }
        if("product_content__border SelectedHover" == current.className){
            current.classList.toggle('SelectedHover')
        }
        if(event.target.className == 'buy'){
            addRemoveFocus()
            return
        }
        current.addEventListener('mouseleave', addRemoveFocus)
    }

    function addRemoveFocus (){
        let current = currentTargetProduct
        if(current.className == 'product_content__border'){
            current.classList.remove('SelectedHover')
            current.classList.add('Hover1')
        }
        else if(current.className == 'product_content__border Selected' ){
           current.classList.add('SelectedHover')
            current.classList.remove('Hover1')
            current.removeEventListener('mouseleave', addRemoveFocus)
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
                            <img className='cat' src={cat} alt="cat"/>
                        </div>
                            <div className='product_weight'>
                                <div className='circle'> 
                                <div className='text_weight'> {props.weight}  
                                 </div>  
                                 <span>кг </span>  
                                </div>
                            </div>
                </div>
            </div>
            <div  className="bottom_text">{(props.availability)
            ? (props.select)? textSelectedBottom : textDefaultBottom
            : textDisabledBottom} 
            </div>  
        </div>  
    )
}

export default Product;