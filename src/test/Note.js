const Note = ({ note, sayClick }) => {
  return (
    <>
      <li className="note">{note.content}</li>
      <button onClick={sayClick}>Please click here</button>
    </>
  );
};

export default Note;
