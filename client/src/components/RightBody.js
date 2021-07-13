import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"

import { create_note_url, delete_note_url, update_note_url } from "../apis"

import folder_logo from "../assets/images/folder.png"

import {
    changed,
    notes_state,
    opened_note,
    searched_notes,
    selected_note,
} from "../states"

function NoNoteOpened() {
    return (
        <div className="not-selected">
            <img className="logo" src={folder_logo} />
            <div className="heading">No notes selected yet</div>
            <div className="desc">
                Your notes from Google Keep will show up here.
            </div>
        </div>
    )
}

function OpenedNote({ note }) {
    const [_title, setTitle] = useState(note.title)
    const [_body, setBody] = useState(note.body)
    const [notes, setNotes] = useRecoilState(notes_state)
    const [isChanged, setIsChanges] = useRecoilState(changed)
    const [, setOpenedNote] = useRecoilState(opened_note)
    const [clicked, setClicked] = useRecoilState(selected_note)
    const [searchedNotes, setSearchedNotes] = useRecoilState(searched_notes)

    useEffect(() => {
        setTitle(note.title)
        setBody(note.body)
    }, [note])

    useEffect(() => {
        checkchange()
    }, [_title, _body])

    function checkchange() {
        if (note.title !== _title || note.body !== _body) {
            if (!note.new & !isChanged) {
                setIsChanges(true)
            }
            let changed_note = {
                ...note,
                ...{ changed: true, title: _title, body: _body },
            }
            setNotes(notes.map((e) => (e.id === note.id ? changed_note : e)))
            setSearchedNotes(
                searchedNotes.map((e) => (e.id === note.id ? changed_note : e))
            )
        }
    }
    async function uploadNew() {
        // show loading
        try {
            const res = await fetch(create_note_url, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({ title: _title, body: _body }),
            })
            const json = await res.json()
            if (json.added) {
                setNotes([json.note, ...notes.slice(1, notes.length)])
                setOpenedNote(json.note)
            } else {
                throw new Error("Can't Create new Note")
            }
            //hide loading
        } catch (err) {
            console.log(err)
        }
    }
    async function updateNote() {
        //show loading
        try {
            let id = note.id
            const res = await fetch(update_note_url + id, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({ title: _title, body: _body }),
            })
            const json = await res.json()
            if (json.updated) {
                // console.log(json.note)
                setNotes(notes.map((e) => (e.id === note.id ? json.note : e)))
                setOpenedNote(json.note)
                setIsChanges(false)
            } else {
                throw new Error("Can't Update")
            }
        } catch (err) {
            console.log(err)
        }
    }
    async function deleteNote() {
        try {
            if (note.new) {
                setNotes(notes.slice(1, notes.length))
                setSearchedNotes(notes.slice(1, notes.length))
                setOpenedNote(null)
                setClicked(clicked.map((e) => false))
                return
            }
            const id = note.id
            const res = await fetch(delete_note_url + id)
            const json = await res.json()
            if (json.deleted) {
                //do somethin
                setNotes(notes.slice(1, notes.length))
                setSearchedNotes(notes.slice(1, notes.length))
                setOpenedNote(null)
                setClicked(clicked.map((e) => false))
            } else {
                throw new Error("Can't delete")
            }
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div>
            <div className="title_wrap">
                <input
                    className="title"
                    value={_title}
                    onChange={(e) => setTitle(e.target.value)}
                ></input>
                <button className="delete" onClick={deleteNote}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>
            </div>
            <div className="line"></div>
            <textarea
                className="body"
                value={_body}
                onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <button
                className={
                    isChanged || note.changed ? "show btn" : "hidden btn"
                }
                onClick={updateNote}
            >
                Save Change
            </button>
            <button
                className={note.new ? "show btn" : "hidden btn"}
                onClick={uploadNew}
            >
                Create
            </button>
        </div>
    )
}

export default function RightBody() {
    const [openedNote] = useRecoilState(opened_note)
    return (
        <div className="note_body">
            {openedNote ? <OpenedNote note={openedNote} /> : <NoNoteOpened />}
        </div>
    )
}
