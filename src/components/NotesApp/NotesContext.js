import React, { createContext, useState } from 'react'

export const NotesContext = createContext()

export default function NotesProvider({ children }) {

    const [notes, setNotes] = useState([])

    const providerValue = {
        notes, setNotes
    }

    return (
        <NotesContext.Provider value={providerValue}>
            {children}
        </NotesContext.Provider>
    )
}
