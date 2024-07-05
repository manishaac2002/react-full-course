import React from 'react'
import { useState } from 'react'
import { FaTrashAlt } from "react-icons/fa";

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

    const handleDelete = (id) => {
        const listItems = items.filter(item => item.id !== id)
        setItems(listItems)
        localStorage.setItem('todo_lists', JSON.stringify(listItems))
    }


    return (

        <main>

            {items.length ? (

                <ul>

                    {items.map(item => (
                        <li className='item' key={item.id}>

                            <input
                                type="checkbox"
                                onChange={() => handleCheck(item.id)}
                                checked={item.checked}
                            />

                            <label
                                style={{ textDecoration: item.checked ? "line-through" : null }}
                                onClick={() => handleCheck(item.id)}>
                                {item.item} </label>

                            <FaTrashAlt
                                role='button'
                                tabIndex='0'
                                onClick={() => handleDelete(item.id)}
                            />

                        </li>
                    ))}

                </ul>

            ) :
                (<p style={{ marginTop: "2rem" }}> Your list is empty</p>)
            }

        </main >

    )
}

export default Content

