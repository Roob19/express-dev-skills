let express = require('express');
let router = express.Router();
// Require export controller to do CRUD functions // (create, retrieve, update & delete)
let skillsCtrl = require('../controllers/skills');

// All actual paths start with "/skills"

// GET /skills
router.get('/', skillsCtrl.index);
// GET /skills/:id
router.get('/:id', skillsCtrl.show);

module.exports = router;
