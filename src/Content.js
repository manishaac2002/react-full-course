import React from 'react'
import { useState } from 'react'


const Content = () => {

    const [items, setItems] = useState([
        {
            id: 1,
            checked: true,
            item: "Practicing code",
        },
        {
            id: 2,
            checked: false,
            item: "Walking in the park",
        },
        {
            id: 3,
            checked: false,
            item: "Read a book",
        }
    ])

    const handleCheck = (id) => {
        const listItems = items.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item)
        setItems(listItems)
        localStorage.setItem('todo_lists', JSON.stringify(listItems))
    }


    return (

        <main>

                <ul>

                    {items.map(item => (
                        <li className='item' key={item.id}>

                            <input
                                type="checkbox"
                                onChange={() => handleCheck(item.id)}
                                checked={item.checked}
                            />

                            <label> {item.item} </label>


                        </li>
                    ))}

                </ul> 

        </main >

    )
}

export default Content

