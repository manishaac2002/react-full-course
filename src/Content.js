import React from 'react'

const Content = () => {

    const handleClick = (e) => {
        console.log(e.target.innerText)
    }
    const handleClick2 = (names) => {
        console.log(`Thanks for purchasing course ${names}`)
    }

    function handleChangeName() {
        const programmingLanguage = ["Javascript", "React.js", "MongoDB", "Nodejs", "Express.js"]
        const int = Math.floor(Math.random() * 4)
        return programmingLanguage[int]
    }

    return (

        <main>
            <p>
                <h3 onDoubleClick={() => handleClick2("Manisha")}>
                    Welcome all...!</h3>
                 Let's learn {handleChangeName()}.

                <button onClick= {(e) => handleClick(e)}>
                    Purchase course
                </button>

            </p>
        </main >

    )
}

export default Content