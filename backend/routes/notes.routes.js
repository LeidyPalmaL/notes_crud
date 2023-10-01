const { Router } = require('express');

const router = Router();
const { 
    rootGet, 
    getAllNotes, 
    createNewNote, 
    findNote,
    editNote, 
    // deleteNote 
} = require('../controllers/notes.controllers');//desestructción

/* Peticiones GET en la raíz / */
router.get('/', rootGet) //Endpoint
router.get('/notes', getAllNotes)
router.post('/notes/create', createNewNote)
router.post('/notes/find', findNote)
router.post('/notes/edit', editNote)
// router.post('/notes/delete', deleteNote)

module.exports = router;