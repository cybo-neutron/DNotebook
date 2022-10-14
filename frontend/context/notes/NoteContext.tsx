import { createContext } from "react";

interface NoteContextInterface {
  notes: any[];
  fetchNotes?: () => Promise<any>;
  addNote?: (title: string, tag: string, description: string) => Promise<any>;
  name: string;
}

const noteContext = createContext<NoteContextInterface | null>(null);

export default noteContext;
