import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchNotes,
  toggleImportanceOf,
} from "test/reducers/Note/noteActionCreator";

const Note = ({ note, toggleImportance }) => {
  const label = note.important ? "make not important" : "make important";

  return (
    <li className="note">
      {note.content}
      <button onClick={toggleImportance}>{label}</button>
    </li>
  );
};

const Notes = ({ notes, toggleImportance }) => {
  return (
    <ul>
      {notes.map((note, index) => (
        <Note
          key={index}
          note={note}
          toggleImportance={() => toggleImportance(note.id)}
        />
      ))}
    </ul>
  );
};

const NotesContainer = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  const toggleImportance = (id) => {
    dispatch(toggleImportanceOf(id));
  };

  return <Notes notes={notes} toggleImportance={toggleImportance} />;
};

export default NotesContainer;
