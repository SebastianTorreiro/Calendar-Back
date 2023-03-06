const { Router } = require('express');
const daysRoutes = require('./daysRoutes')
const routinesRoutes = require('./routinesRoutes')
const eventRoutes = require('./eventRoutes')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/days', daysRoutes)
router.use('/routines', routinesRoutes)
router.use('/event', eventRoutes)


module.exports = router;
