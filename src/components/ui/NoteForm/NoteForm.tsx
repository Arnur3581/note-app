import * as React from 'react';
import { useNote } from '../../../context/NoteContext/NoteContext';

const DEFAULT_NOTE = {
  title: '',
  content: '',
};

const NoteForm = () => {
  const [note, setNote] = React.useState<Omit<NoteProps, 'id' | 'createdOn'>>(DEFAULT_NOTE);
  const {notes, addNoteById } = useNote();
  const formId = React.useId();

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    addNoteById({ title: note.title, content: note.content });

    setNote(DEFAULT_NOTE)
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;

    setNote({
      ...note,
      [name]: value,
    });
  };

  return (
    <>
      <form id={formId} onSubmit={handleFormSubmit}>
        <label>
          <span>Title</span>
          <input
            value={note.title}
            name="title"
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          <span>Content</span>
          <input
            value={note.content}
            onChange={handleInputChange}
            name="content"
            required
          />
        </label>
      </form>
      <button type="submit" form={formId}>
        create
      </button>
    </>
  );
};

export default NoteForm;
