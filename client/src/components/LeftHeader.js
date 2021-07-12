import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { api_url } from "../apis"
import {
    notes_state,
    opened_note,
    selected_note,
    changed,
    searched_notes,
} from "../states"

function Note({ isClicked, index, note }) {
    const [, setOpenedNote] = useRecoilState(opened_note)
    const [clicked, setClicked] = useRecoilState(selected_note)
    const [, setIsChanges] = useRecoilState(changed)

    function openNote(note) {
        setOpenedNote(note)
        setClicked(clicked.map((e, i) => (i === index ? true : false)))
        setIsChanges(false)
    }

    return (
        <div
            className={isClicked ? "note_list highlight" : "note_list"}
            onClick={() => openNote(note)}
        >
            <div className="title">{note.title}</div>
            <div className="body">{note.body.slice(0, 25)}...</div>
        </div>
    )
}

export default function LeftHeader() {
    const [notes, setNotes] = useRecoilState(notes_state)
    const [searchedNotes, setSearchedNotes] = useRecoilState(searched_notes)
    const [searchValue, setSearchValue] = useState("")
    const [clicked, setClicked] = useRecoilState(selected_note)
    const [, setOpenedNote] = useRecoilState(opened_note)
    const [, setIsChanges] = useRecoilState(changed)

    function addNotesInSeachedNotes() {
        let ns = []
        notes.forEach((e) => {
            if (
                e.title.indexOf(searchValue) !== -1 ||
                e.body.indexOf(searchValue) !== -1
            ) {
                ns.push(e)
            }
        })
        setSearchedNotes(ns)
        setClicked(new Array(ns.length).fill(false))
    }

    function createNew() {
        let new_note = {
            title: "Untitled " + notes.length,
            body: "..",
            id: Date.now(),
            created_at: new Date(),
            new: true,
        }
        setNotes([new_note, ...notes])
        setSearchedNotes([new_note, ...notes])

        setOpenedNote(new_note)
        setClicked(
            new Array(searchedNotes.length + 1)
                .fill(0)
                .map((_, i) => (i == 0 ? true : false))
        )
        setIsChanges(false)
    }
    async function getAllNotes() {
        try {
            let res = await fetch(api_url)
            let json = await res.json()
            return json
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        // show loading
        getAllNotes().then((json) => {
            // hide loading
            setNotes(json)
            setSearchedNotes(json)
            setClicked(new Array(json.length).fill(false))
        })
    }, [])

    useEffect(() => {
        //do something
        addNotesInSeachedNotes()
    }, [searchValue])

    // useEffect(() => {}, [notes])

    return (
        <div className="header">
            <div className="search">
                <input
                    placeholder="search note"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                ></input>
            </div>
            <div className="all_notes">
                {searchedNotes.map((note, i) => (
                    <Note
                        key={note.id}
                        note={note}
                        isClicked={clicked[i]}
                        index={i}
                    ></Note>
                ))}
            </div>
            <div className="create_new" onClick={createNew}>
                New
            </div>
        </div>
    )
}
