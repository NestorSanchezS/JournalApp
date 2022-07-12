import { createSlice } from "@reduxjs/toolkit";
import { setNestedObjectValues } from "formik";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: false,
    messageSaved: "",
    notes: [],
    active: null,
    // actve: {
    //   id: "ABC123",
    //   title: "",
    //   body: "",
    //   date: "1234567",
    //   imageURL: [], // https://foto1.jpg, https://foto2.jpg, https://foto3.jpg
    // },
  },
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true;
    },
    //Agrega nota vacia
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    //Nota Activa
    setActiveNote: (state, action) => {
      state.active = action.payload;
    },
    //Cargar las notas
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    //Guardando la snotas
    setSaving: (state) => {},
    //Actualizando las notas
    updateNote: (state, action) => {},
    //eliminar nota
    deleteNoteById: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const {
  savingNewNote,
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById,
} = journalSlice.actions;
