import { atom } from "recoil"

export const notes_state = atom({
    key: "notes", // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
})
export const searched_notes = atom({
    key: "searched_notes", // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
})
export const selected_note = atom({
    key: "selected_note",
    default: [false, false],
})
export const opened_note = atom({
    key: "opened",
    default: null,
})

export const changed = atom({
    key: "changed",
    default: false,
})
