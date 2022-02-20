import React, { useState } from 'react'
import CategoryAdd from './components/CategoryAdd'
import GifGrid from './components/GifGrid'

const GifExpertApp = ({defaultCategories =[]}) => {    
    const [categories, setCategories] =useState(defaultCategories);
     
    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <CategoryAdd setCategories={setCategories}></CategoryAdd>
            <ol>
                {categories.map(category =>{                    
                    return <GifGrid key={category} category={category}></GifGrid>
                })}
            </ol>            
        </>
      )
}

export default GifExpertApp;
