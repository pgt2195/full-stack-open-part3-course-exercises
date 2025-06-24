const Note = ({ note, toggleImportance }) => {
  const label = note.important 
    ? 'make not important' 
    : 'make important';

  return (
    <li className='note'>
      {note.content} 
      <button onClick={toggleImportance} style={{marginLeft: 10}}>{label}</button>
    </li>
  )
}

export default Note