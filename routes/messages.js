const { Router } = require('express');
const router = Router();
const {check} = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');

const messageController = require('../controllers/messages.js');

//Petición para Enviar Mensaje
router.post('/', [
    check('message', 'El mensaje es obligatorio').not().isEmpty(),
    check('fromNumber', 'El número de teléfono no es válido').isInt().isLength({ min: 8 }),
    check('toNumber', 'El número de teléfono no es válido').isInt().isLength({ min: 8 }),
    validarCampos
]
, messageController.messaggesPost);

module.exports = router;