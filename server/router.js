'use strict'

const router = require('koa-router')()
const adminController = require('./controllers/admin')
const roleController = require('./controllers/role')
const userController = require('./controllers/user')
const accessController = require('./controllers/access')
const schemaController = require('./controllers/schema')
const auth = require('./middlewares/auth')

module.exports = router

router.post('/admin/login', adminController.login)
router.get('/admin/info', auth(), adminController.info)

router.get('/roles', auth('/roles'), roleController.list)
router.get('/role/:id', roleController.findOne)
router.post('/role', roleController.insert)
router.put('/role/:id', roleController.update)
router.del('/role/:id', roleController.remove)

router.get('/user/list', userController.list)
router.get('/user/:id', userController.findOne)
router.post('/user', userController.insert)
router.put('/user/:id', userController.update)

router.get('/accesses', accessController.list)
router.post('/access', accessController.insert)
router.put('/access/:id', accessController.update)
router.del('/access/:id', accessController.remove)

router.get('/schema/code/:code', schemaController.getByCode)
