const { Router } = require("express")

const router = Router()

let notes = []

function genId() {
    return "xxxx-xxx-xxx".replace(
        /x/g,
        (e) =>
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"[
                Math.floor(Math.random() * 62)
            ]
    )
}

router.get("/", (req, res) => {
    //handler
    res.json(notes)
})
router.post("/createnew", (req, res, next) => {
    try {
        const { title, body } = req.body
        let note = { id: genId(), title, body, created_at: new Date() }
        notes.unshift(note)
        res.json({ added: true, note })
    } catch (err) {
        next(err)
    }
})
router.get("/delete/:id", (req, res, next) => {
    try {
        const { id } = req.params
        notes = notes.filter((e) => e.id != id)
        res.json({ deleted: true })
    } catch (err) {
        next(err)
    }
})
router.post("/update/:id", (req, res, next) => {
    try {
        const { id } = req.params
        const { title, body } = req.body
        notes = notes.map((e) =>
            e.id == id ? { create_at: new Date(), title, body, id } : e
        )
        res.json({
            updated: true,
            note: { title, body, id, create_at: new Date() },
        })
    } catch (err) {
        next(err)
    }
})

module.exports = router
