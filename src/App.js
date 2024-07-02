function App() {

  function handleChangeName() {
    const programmingLanguage = ["Javascript", "React.js", "MongoDB", "Nodejs", "Express.js"]
    const int = Math.floor(Math.random() * 4)
    return programmingLanguage[int]
  }

  return (
    <div >
      Hello react.js !!

      <p>Let's learn {handleChangeName()}.</p>

    </div>
  );
}

export default App;
