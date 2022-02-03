import { createStore } from 'vuex';
import { Note } from '../types';
import db from '../db';

interface State {
  notes: Note[];
}

export default createStore<State>({
  state() {
    return {
      notes: [] as Note[],
    };
  },
  mutations: {
    addNote(state, note: Note) {
      state.notes.push(note);
    },
    setNotes(state, notes: Note[]) {
      state.notes = notes;
    },
    setNote(state, payload: { id: string; note: Note }) {
      const editedNoteIndex = state.notes.findIndex(
        (note) => note.id === payload.id
      );
      Object.assign(state.notes[editedNoteIndex], payload.note);
    },
  },
  actions: {
    addNote(context, note: Note) {
      // Date is saved as a string in the database, since firestore doesn't support the javascript Date object

      db.collection('notes')
        .add({ ...note, date: note.date.toString() })
        .then((docRef) => {
          console.log('Document written with ID: ', docRef.id);
          context.commit('addNote', { ...note, id: docRef.id });
        })
        .catch((error) => {
          console.error('Error adding document: ', error);
        });
    },
    updateNote(context, payload: { id: string; note: Note }) {
      db.collection('notes')
        .doc(payload.id)
        .set(payload.note)
        .then(() => {
          context.commit('setNote', payload.note);
        });
    },
    loadNotes(context) {
      db.collection('notes')
        .get()
        .then((snapshot) => {
          const notes = snapshot.docs.map((doc: any) => ({
            ...doc.data(),
            id: doc.id,
            date: new Date(doc.data().date),
          }));

          context.commit('setNotes', notes);
        });
    },
  },
});
