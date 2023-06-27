import { createContext, useContext } from 'react'

interface NoteContextProps {
  notes: NoteProps[];
  addNoteById: ({ title, content }: Omit<NoteProps, 'id' | "createdOn">) => void;
  deleteNoteById: (id: NoteProps['id']) => void
}

const NoteContext = createContext<NoteContextProps | null>(null)

const NoteContextProvider = NoteContext.Provider

const useNote = () => {
  const context = useContext(NoteContext)

  if (!context) {
    throw new Error("You can't use `useNote` outside a `NoteProvider`")
  }

  return context;
}

export {
  NoteContextProvider,
  useNote
}