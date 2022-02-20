import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CategoryAdd = ({setCategories}) => {
  const [inputValue, setInputValue] = useState('')
  const handleInputChange = (e) =>{
    //console.log(e.target.value);
    setInputValue(e.target.value);
    //console.log('handleInputChange llamado');
  }

  const handleSubmit=(e) => {
      e.preventDefault();
      if(inputValue.trim().length > 2){
        setCategories(cats => [ inputValue, ...cats] );
        setInputValue("");
      }
      
      console.log('handle Submit', inputValue);
  }
  return (
     <form onSubmit={handleSubmit}>
       <p>{inputValue}</p>
        <input 
            type="text"
            value= {inputValue}
            onChange= {handleInputChange}
            ></input>
        
    </form>

  )
}

CategoryAdd.propTypes = {
  setCategories : PropTypes.func.isRequired
}

export default CategoryAdd