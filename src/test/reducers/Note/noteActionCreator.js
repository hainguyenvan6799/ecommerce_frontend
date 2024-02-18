import noteService from "test/services/note";

const fetchNotes = () => async (dispatch) => {
  noteService.getAll().then((initialNotes) => {
    dispatch({
      type: "LOADING_NOTE",
      data: initialNotes,
    });
  });
};

const createNote = (content) => async (dispatch) => {
  const returnedNote = await noteService.create(content);
  dispatch({
    type: "NEW_NOTE",
    data: returnedNote,
  });
};

const toggleImportanceOf = (id) => {
  return {
    type: "TOGGLE_IMPORTANCE",
    data: { id },
  };
};

export { fetchNotes, createNote, toggleImportanceOf };
