import React, { useState } from 'react'
import { AddCategory } from './AddCategory';

import GiftGird from './GiftGird';

function GiftExpertApp(props) {

const [categories, setCategories] = useState(['casa']);

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

