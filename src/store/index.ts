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
  },
  actions: {
    addNote(context, note: Note) {
      db.collection('notes')
        .add(note)
        .then((docRef) => {
          console.log('Document written with ID: ', docRef.id);
          context.commit('addNote', { ...note, id: docRef.id });
        })
        .catch((error) => {
          console.error('Error adding document: ', error);
        });
    },
  },
});
