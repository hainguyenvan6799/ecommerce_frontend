import { useEffect, useState } from "react";
import LoginForm from "test/LoginForm";
import NotesContainer from "test/Note/index";
import NoteFormContainer from "test/NoteForm/noteFormContainer";
import Notification from "test/Notification";
import Togglable from "test/Togglable/index";
import loginService from "../services/login";
// services
import noteService from "../services/note";



const NoteApp = () => {
    const [showAll, setShowAll] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null)

    // const dispatch = useDispatch()
    // const notes = useSelector(state => state.notes)

    // useEffect(() => {
    //     noteService.getAll()
    //         .then(initialNotes => {
    //             dispatch(fetchNotes(initialNotes))
    //         })
    // }, [dispatch]);

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
            noteService.setToken(user.token)
        }
    }, [])

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const user = await loginService.login({ username, password });

            window.localStorage.setItem(
                'loggedNoteappUser', JSON.stringify(user)
            )
            noteService.setToken(user.accessToken)
            setUser(user);
            setUsername("");
            setPassword("");
        } catch (exception) {
            setErrorMessage('Wrong credentials')
            setTimeout(() => {
                setErrorMessage(null)
            }, 5000)
        }
    }

    const loginForm = () => {

        return (
            <Togglable buttonLabel="login">
                <LoginForm
                    username={username}
                    password={password}
                    handleUsernameChange={({ target }) => setUsername(target.value)}
                    handlePasswordChange={({ target }) => setPassword(target.value)}
                    handleSubmit={handleLogin}
                />
            </Togglable>

        )
    };

    // const addNote = async (noteObject) => {
    //     noteFormRef.current.toggleVisibility()
    //     const returnedNote = await noteService.create(noteObject);
    //     dispatch(createNote(returnedNote))
    // }

    // const toggleImportance = (id) => {
    //     dispatch(toggleImportanceOf(id))
    // }

    const noteForm = () => (
        // <Togglable buttonLabel="new note" ref={noteFormRef}>
        //     <NoteForm
        //         createNote={addNote}
        //     />
        // </Togglable>
        <NoteFormContainer />
    )

    return (
        <div>
            <h1>Notes</h1>

            <Notification message={errorMessage} />

            {user === null ? loginForm() : noteForm()}

            <div>
                <button onClick={() => setShowAll(!showAll)}>show {showAll ? "important" : "all"}</button>

            </div>

            <NotesContainer />



        </div>
    )
}

export default NoteApp;