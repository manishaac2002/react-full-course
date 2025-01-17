import React from 'react'
import ItemsLists from './ItemsLists'

const Content = ({ items, handleCheck, handleDelete }) => {


    return (

        <main>

            {items.length ? (

            <ItemsLists
            items={items} 
            handleCheck={handleCheck} 
            handleDelete={handleDelete} />
                

            ) :
                (<p style={{ marginTop: "2rem" }}> Your list is empty</p>)
            }

        </main >

    )
}

export default Content

