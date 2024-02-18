import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import NoteForm from "test/NoteForm/index";
import { createNote } from "test/reducers/Note/noteActionCreator";
import Togglable from "test/Togglable/index";

const NoteFormContainer = () => {
  const noteFormRef = useRef();
  const dispatch = useDispatch();

  const addNote = async (noteObject) => {
    noteFormRef.current.toggleVisibility();
    dispatch(createNote(noteObject));
  };

  return (
    <Togglable buttonLabel="new note" ref={noteFormRef}>
      <NoteForm createNote={addNote} />
    </Togglable>
  );
};

export default NoteFormContainer;
