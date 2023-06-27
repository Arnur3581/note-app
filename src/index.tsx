import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import "./assets/index.css"
import NoteProvider from './context/NoteContext/NoteProvider';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <NoteProvider>
    <App />
  </NoteProvider>
);
