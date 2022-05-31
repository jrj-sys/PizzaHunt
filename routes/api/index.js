const router = require('express').Router();

const commentRoutes = require('./comment_routes');
const pizzaRoutes = require('./pizza_routes');

router.use('/comments', commentRoutes);
router.use('/pizzas', pizzaRoutes);

module.exports = router;