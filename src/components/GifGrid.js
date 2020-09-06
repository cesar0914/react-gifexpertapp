import React from 'react'
import { useFetchGifts } from '../hooks/useFetchGifts'
import { GifGridItem } from './GifGridItem';


export const GifGrid = ( { category } ) => {

    const { data:images, loading } = useFetchGifts( category);    
       
    
    return (
            
            <>
                <h3> { category } </h3>

               { loading && <p className = 'animate__animated animate__bounce animate__fadeI' >loading...</p> }                
                
                <div className = 'card-grid animate__animated animate__bounce animate__flash'>

                    {
                        images.map( img => (
                            <GifGridItem                         
                                key = { img.id }
                                { ...img }
                            />
                            
                        ))
                    }

                </div>
            </>
            
    )
}
