const Note = ({ note }) => {
  return (
    <li>{note.content}</li>
  )
}

const App = ({ notes }) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
    </div>
  )
}
export default App

// [          <Note key={note.id = 1} note={note} />,
// <Note key={note.id = 2} note={note} />,
//           <Note key={note.id = 3} note={note} />
//         ],

//[<li> html is easy<li/>, <li>Browser can execute only JavaScript<li/>, <li> GET and POST are the most important methods of HTTP protocol <li/> ]