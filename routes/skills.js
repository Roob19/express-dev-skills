const express = require('express');
const router = express.Router();
// Require export controller to do CRUD functions // (create, retrieve, update & delete)
const skillsCtrl = require('../controllers/skills');

// All actual paths start with "/skills"

// GET /skills
router.get('/', skillsCtrl.index);
// GET /skills/new
router.get('/new', skillsCtrl.new);
// GET /skills/:id
router.get('/:id', skillsCtrl.show);

router.post('/', skillsCtrl.create);

router.delete('/:id', skillsCtrl.delete);

router.put('/edit/:id', skillsCtrl.update);

module.exports = router;
