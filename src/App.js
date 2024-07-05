import Content from "./Content"
import Footer from "./Footer"
import Header from "./Header"

import { useState } from 'react'

function App() {

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
    <div >

      <Header />

      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />

      <Footer 
      
        length={items.length}
      />

    </div>
  )
}

export default App