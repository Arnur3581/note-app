import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { NoteContextProvider } from '../NoteContext/NoteContext';

const NOTE_DEFAULT_VALUE = [
  {
    id: uuidv4(),
    title: 'Undefined',
    content: 'write something...',
    createdOn: `${new Date().getDate()} ${new Date().toLocaleString('defult', { month: 'long' })}`,
  },
];

interface NoteProviderProps {
  children: React.ReactNode;
}

const NoteProvider: React.FC<NoteProviderProps> = ({ children }) => {
  const [notes, setNotes] = React.useState<NoteProps[]>(NOTE_DEFAULT_VALUE);

  const addNoteById = React.useCallback(
    ({ title, content }: Omit<NoteProps, 'id'>) => {
      if (!title || !content) {
        throw new Error('Props dont must be empty');
      }

      setNotes([
        ...notes,
        {
          id: uuidv4(),
          title: title,
          content: content,
          createdOn: `${new Date().getDate()} ${new Date().toLocaleString('default', {month: 'long'})
          }`,
        },
      ]);
    },
    [notes]
  );

  const deleteNoteById = React.useCallback(
    (id: NoteProps['id']) => {
      setNotes(notes.filter((note) => note.id !== id));
    },
    [notes]
  );

  const value = React.useMemo(
    () => ({ notes, deleteNoteById, addNoteById }),
    [notes, addNoteById, deleteNoteById]
  );

  return <NoteContextProvider value={value}>{children}</NoteContextProvider>;
};

export default NoteProvider;
