import * as React from 'react';
import NoteForm from './components/ui/NoteForm/NoteForm';
import NoteList from './components/ui/NoteList/NoteList';

const App: React.FC = () => {
  return (
    <div>
      <NoteForm />
      <NoteList />
    </div>
  );
};

export default App;
