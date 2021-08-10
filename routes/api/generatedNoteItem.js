//TODO: consider using async/await instead of fetch

const express = require('express');
const router = express.Router();


const NoteItem = require('../../models/NoteItem');

//GET all NoteItem

router.get('/all', (req, res) => {
    NoteItem.find()
        .then(NoteItems => res.json(NoteItems))
        .catch(err => res.status(404).json({ noNoteItemsfound: 'No Note item found' }));
}
);
//GET NoteItem by ID
router.get('/', (req, res) => {
    NoteItem.findById(req.query.id)
      .then(res.json(NoteItem))
      .catch(res.status(404).json({ noNoteItemsfound: 'No Note item found' }));
});
//PUT NoteItem
router.put('/', (req, res) => {
    
    NoteItem.findByIdAndUpdate(req.query.id, req.body, { new: true }, function (err, data) {
        if (!data) {
            return res.status(404).json({ message: err.message });
        }
        else {
            return res.send({ data });
        }
    })
        

});
//POST NoteItem
router.post('/', (req, res) => {
    NoteItem.create(req.body)
        .then( res.json({
            reqBody: req.body
        }))
        .catch(err => res.status(404).json({ error: 'create note failed' }));
});
//DELETE NoteItem by id
router.delete('/', (req, res) => {
    NoteItem.findByIdAndRemove(req.query.id)
      .then(res.json({ mgs: 'Note item deleted' }))
      .catch(err => res.status(404).json({ error: 'No such note' }));
  });


module.exports = router;