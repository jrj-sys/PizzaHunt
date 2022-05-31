const router = require('express').Router();
const pizzaRoutes = require('./pizza_routes');

router.use('/pizzas', pizzaRoutes);

module.exports = router;