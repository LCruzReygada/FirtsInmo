import React, { useState } from 'react'
import { AddCategory } from './Components/AddCategory';
import GiftGird from './Components/GiftGird';

function GiftExpertApp(props) {

const [categories, setCategories] = useState(['Esto']);

    return (
        <>
          <h2>GiftExpretApp</h2>  
          <AddCategory setCategories={setCategories}/>
          <hr/>
          <ol>  
              {
                  categories.map( category => 
                    <GiftGird 
                    key = {category}
                    category = {category} 
                    />
                  
                  )
              }
          </ol>
        </>
    )
}

export default GiftExpertApp

