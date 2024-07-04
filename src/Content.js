import React from 'react'
import { useState } from 'react'

const Content = () => {


    const [language,setLanguage]=useState("React.js")

    function handleChangeName() {
        const programmingLanguage = ["Javascript", "React.js", "MongoDB", "Nodejs", "Express.js"]
        const int = Math.floor(Math.random() * 4)
        setLanguage(programmingLanguage[int]) 
    }


    return (

        <main>
            <p>
                <h3>

                    Welcome all..!</h3>
                Let's learn {language}

                <button onClick={handleChangeName}> Purchase course  </button>
                

            </p>
        </main >

    )
}

export default Content