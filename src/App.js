import Note from './note'
import { useState , useEffect} from 'react'
import axios from 'axios'
import noteService from './services/note'

const App = (props) => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('') 
  const [showAll, setShowAll] = useState(true)


  useEffect(() => {
    console.log('effect')
    noteService.getAll()
    .then(response => {
        console.log('promise fulfilled')
        console.log(response.data)
        setNotes(response.data)
      })
  }, [])
  console.log('render', notes.length, 'notes')


  const handleNoteChange = (event) => {
    //console.log(event.target.value )
    setNewNote(event.target.value)
  }

  const notesToShow = showAll
  ? notes
  : notes.filter(note => note.important === true)




  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
    }
  noteService.create(noteObject).then(response => {
    console.log(response.data)
        setNotes(notes.concat(noteObject))

   // setNotes(response.data)
  })


    setNewNote('')
   } 

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>

      <ul>
        {notesToShow.map(note => 
          <Note key={note._id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote}
                  onChange={handleNoteChange}
                  />
        <button type="submit">save</button>
      </form>   
    </div>
  )
}


export default App

