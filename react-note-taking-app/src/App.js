import './App.css'
import { useState, useRef ,useEffect} from 'react'
function NoteTakingApp() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [notes, setNotes] = useState([])
  const [showEditModal, setShowEditModal] = useState(false);
  const firstref = useRef(null)

  const buttonSubmit = () => {
    const newNotes = { title, description }
    setNotes([...notes, newNotes])
    setTitle('')
    setDescription('')
  }
  const removeModal = () => {
    const newNotes = { title, description }
    setNotes([...notes, newNotes])
    setTitle('')
    setDescription('')
    const f = firstref.current
    console.log(firstref)
    f.style.display = 'none'
  }
  function deleteNote(id) {
    setNotes((data) => data.filter((elem, i) => i !== id))
    setShowEditModal(false)
  }
  function editNote(id) {
    setTitle(notes[id].title)
    setDescription(notes[id].description)
    setShowEditModal(true)
  }
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);
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
    {showEditModal && (<div ref={firstref} className='modal'>
      <h2>Edit Modal</h2>
      <div className='form' onSubmit={(event) => {
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
        <button className='submitButton' type='submit' onClick={removeModal} >Update</button>
      </div>
    </div>)}
  </>)
}
export default NoteTakingApp