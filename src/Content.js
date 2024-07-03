import React from 'react'
import { useState } from 'react'

const Content = () => {



    // function handleChangeName() {
    //     const programmingLanguage = ["Javascript", "React.js", "MongoDB", "Nodejs", "Express.js"]
    //     const int = Math.floor(Math.random() * 4)
    //     return programmingLanguage[int]
    // }

    const [count, setCount] = useState(99)

    const incrementFunction = () => {
        setCount(prevCount => prevCount + 1)
    }
    const decrementFunction = () => {
        setCount(prevCount => prevCount - 1)
    }

    return (

        <main>
            <p>
                <h3>

                    Welcome all...!</h3>
                Let's learn React.js

                <button> Purchase course  </button>
                <button onClick={decrementFunction}> - </button>
                <span> {count} </span>
                <button onClick={incrementFunction}> + </button>

            </p>
        </main >

    )
}

export default Content