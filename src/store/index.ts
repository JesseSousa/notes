import { createStore } from 'vuex';
import { Note } from '../types';

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
});
