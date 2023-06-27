import * as React from 'react';
import { useNote } from '../../../context/NoteContext/NoteContext';
import Note from '../Note/Note';
import styles from './NoteList.module.css';

const NoteList: React.FC = () => {
  const { notes } = useNote()

  return (
    <div className={styles.list}>
      {notes.map((note) => (
        <Note note={note} key={note.id} />
      ))}
    </div>
  );
};

export default NoteList;
