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
            checked: true,
            item: "Walking in the park",
        },
        {
            id: 3,
            checked: true,
            item: "Read a book",
        }
    ])
    return (

        <main>
            <ul>

                {items.map(item => (
                    <li>
                        <input
                            type="checkbox"
                            checked={item.checked}
                        />
                        <label> {item.item} </label>
                        <button> Delete </button>

                    </li>
                ))}
            </ul>
        </main >

    )
}

export default Content