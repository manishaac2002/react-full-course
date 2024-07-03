import React from 'react'

const Content = () => {

    function handleChangeName() {
        const programmingLanguage = ["Javascript", "React.js", "MongoDB", "Nodejs", "Express.js"]
        const int = Math.floor(Math.random() * 4)
        return programmingLanguage[int]
    }

    return (

        <main>
            Welcome all...!
            <p>Let's learn {handleChangeName()}.</p>
        </main >

    )
}

export default Content