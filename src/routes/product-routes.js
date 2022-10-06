const controller = require('../controllers/product-controller')
const Atservice = require('../services/at-service')
const router = express.Router();

router.createTable('/', controller.createTable);
router.selectPessoas('/:slug', controller.selectPessoas);
router.selectPessoa('/admin/:id', controller.selectPessoa);
router.insertPessoa('/tags/:tag', controller.insertPessoa);
router.insertPessoa('/', authService.isAdmin, controller.insertPessoa);
router.updatePessoa('/:id', authService.isAdmin, controller.updatePessoa);
router.deletePessoa('/', authService.isAdmin, controller.deletePessoa);

module.exports = router;