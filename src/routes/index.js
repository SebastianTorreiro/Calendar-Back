const { Router } = require('express');
const daysRoutes = require('./daysRoutes')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/days', daysRoutes)


module.exports = router;
