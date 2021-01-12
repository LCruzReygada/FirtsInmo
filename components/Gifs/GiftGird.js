import React from 'react'
import { useFetchGifs } from '../Hooks/useFetchGifs'
import { GifGirdItem } from './GifGirdItem';


const GiftGird = ({ category })=> {

   const {data:images, loading} = useFetchGifs(category);
           
    return (

       <>
       <h3 className  = 'animate__animated animate__fadeIn' >{category}</h3>
       {loading  && <p  className ='animate__animated animate__flash' >Loading</p>}
       <div className="card-gird">
                 {
                   images.map( img =>(<GifGirdItem 
                    key = {img.id}
                    {...img}
                    />)) 
                  
                }
                
            </div> 
       </> 
    )
}

export default GiftGird
