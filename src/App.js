import AddItem from "./AddItem"
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

  const [newItem, setNewItem] = useState('')

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const addNewItem = { id, checked: false, item }
    const listItems = [...items, addNewItem]
    setItems(listItems)
    localStorage.setItem('todo_lists', JSON.stringify(listItems))
  }



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


  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItem) return
    addItem(newItem)
    setNewItem('')
  }

  return (
    <div >

      <Header />

      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />

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