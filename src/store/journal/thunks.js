import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { loadNotes } from "../../helpers/loadNotes";
import {
  addNewEmptyNote,
  setActiveNote,
  savingNewNote,
  setNotes,
} from "./journalSlice";

export const startNewNote = () => async (dispatch, getState) => {
  dispatch(savingNewNote());

  const { uid } = getState().auth;

  const newNote = {
    title: "",
    body: "",
    date: new Date().getTime(),
  };

  const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));

  await setDoc(newDoc, newNote);

  newNote.id = newDoc.id;

  dispatch(addNewEmptyNote(newNote));
  dispatch(setActiveNote(newNote));
};

export const startLoadingNotes = () => async (dispatch, getState) => {
  const { uid } = getState().auth;
  if (!uid) throw new Error("El UID del usuario de esta establecido");

  const notes = await loadNotes(uid);
  dispatch(setNotes(notes));
};
