import Form from 'react-bootstrap/Form';
import React, { useState } from "react";

function SizeOption({defaultSize,options,changeImage,changePrice, onClickCallback}){
    return (
      <div class="item-wrap">
            <div className="mb-3 align-items-center">
                <h1>Seleccione el tamaño</h1>
            {options.map((option) => (
                <Form.Check
                    className='form-control-lg'
                    inline
                    id={option.name}
                    key={option.name}
                    defaultChecked= {option.size===defaultSize}
                    label=<div>
                    {option.name.toUpperCase()}
                    <p className='fade alert alert-warning show'>{option.price}</p></div>
                    name='size'
                    
                    value={option.size}
                    type='radio'
                    onClick={ (e) =>{ 
                        const data = {
                            key: e.target.name,
                            value : e.target.value
                        }
                        onClickCallback(data);
                        changeImage(option.imagePath);
                        changePrice(option.price);
                    }}
                 />
            ))}
        </div>
      </div>
    )
}

export default SizeOption;
