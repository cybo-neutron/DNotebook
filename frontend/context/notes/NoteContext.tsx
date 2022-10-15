import { createContext } from "react";

interface NoteContextInterface {
  notes: any[];
  fetchNotes?: () => Promise<any>;
  addNote?: (title: string, tag: string, description: string) => Promise<any>;
  deleteNote?: (id: string) => Promise<any>;
  editNote?: (updatedNote: object) => Promise<any>;
  name: string;
}

const NoteContext = createContext<NoteContextInterface | null>(null);

export default NoteContext;
