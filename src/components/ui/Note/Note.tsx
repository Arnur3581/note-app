import * as React from "react"
import { useNote } from "../../../context/NoteContext/NoteContext"

interface NoteProp {
  note: NoteProps
}

const Note: React.FC<NoteProp> = ({note}) => {
  const { deleteNoteById } = useNote()

  return (
    <div>
      <h1>{note.title}</h1>
      <span>{note.createdOn}</span>
      <p>{note.content}</p>
      <button onClick={() => deleteNoteById(note.id)}>delete</button>
    </div>
  )
}

export default Note 