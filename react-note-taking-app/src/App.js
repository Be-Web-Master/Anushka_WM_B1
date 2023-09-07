import './App.css'
import { useState } from 'react'
function NoteTakingApp() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [notes, setNotes] = useState([])
  const [showEditModal, setShowEditModal] = useState(false);

  const buttonSubmit = () => {
    const newNotes = { title, description }
    setNotes([...notes, newNotes])
    setTitle('')
    setDescription('')
    console.log(newNotes)
  }
  function deleteNote(id) {
    setNotes((data) => data.filter((elem, i) => i !== id))
    setShowEditModal(false)
  }
  function editNote(id){
      setTitle(notes[id].title)
      setDescription(notes[id].description)
      setShowEditModal(true)
  }
  return (<>
  <h2>Notes Modal</h2>
    <form className='form' onSubmit={(event) => {
      event.preventDefault()
    }}>
      <input
        type="text"
        id="noteTitle"
        name="noteTitle"
        placeholder='Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        id="noteDescription"
        name="noteDescription"
        placeholder='Description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows="4"
        cols="50"
        required
      ></textarea>
      <button className='submitButton' type='submit' onClick={buttonSubmit} >Submit</button>
    </form>

    <div className='Note'>
      {notes.map((notes, i) => {
        return <div className='card' key={i}>
          <strong>{notes.title}
            <span className="deleteNote" onClick={() => deleteNote(i)}>❌</span>
            <span className='editNote' onClick={() => editNote(i)}>🖊</span></strong>
          {notes.description}
        </div>
      })}
    </div>
    {showEditModal && (<div className='modal'>
      <h2>Edit Modal</h2>
      <form className='form' onSubmit={(event) => {
        event.preventDefault()
      }}>
        <input
          type="text"
          id="noteTitle"
          name="noteTitle"
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          id="noteDescription"
          name="noteDescription"
          placeholder='Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4"
          cols="50"
          required
        ></textarea>
        <button className='submitButton' type='submit' onClick={buttonSubmit} >Update</button>
      </form>
    </div>)}
  </>)
}
export default NoteTakingApp