const express = require('express'); 
const router = express.Router();
const oAcademica = require('../controllers/ofertaAcademica.controller');

router.post('/', oAcademica.guardarContenidoPDF);

module.exports = router;