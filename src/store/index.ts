import { createStore } from 'vuex';
import { Note } from '../types';
import db from '../db';

interface State {
  notes: Note[];
  currentNote: Note;
}

export default createStore<State>({
  state() {
    return {
      notes: [] as Note[],
      currentNote: {} as Note,
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
    setCurrentNote(state, note: Note) {
      state.currentNote = note;
    },
  },
  actions: {
    addNote(context, note: Note) {
      db.collection('notes')
        .add(note)
        .then((docRef) => {
          // TODO: Display to user
          console.log('Document written with ID: ', docRef.id);
          context.commit('addNote', { ...note, id: docRef.id });
        })
        .catch((error) => {
          // TODO: Display error to user
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
    getCurrentNote(context, id: string) {
      return db
        .collection('notes')
        .doc(id)
        .get()
        .then((doc: any) => {
          context.commit('setCurrentNote', doc.data());
        })
        .catch((e) => {
          console.log('ERROR AT CONNECTING TO THE DATABASE');
          console.log(e);
        });
    },
  },
});
