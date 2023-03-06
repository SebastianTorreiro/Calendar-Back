const { Router } = require('express');
const daysRoutes = require('./daysRoutes')
const routinesRoutes = require('./routinesRoutes')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/days', daysRoutes)
router.use('/asd', routinesRoutes)


module.exports = router;
