// const express = require('express');
// const router = express.Router();
// const userController = require('../controller/usercontroller')


// router.post('/user',userController.create1);
// router.get('/user',userController.fetchalluserData);
// router.delete('/purgeUser/:id',userController.deleteuserData);

// router.post('/jobList',userController.jobList);
// router.get('/joblist',userController.fetchalljoblist);
// router.delete('/purgejoblist/:id',userController.deletejoblist);






// module.exports = router;

// routers/userRouter.js
const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
// const { adminAuth } = require('../db/models/auth');

// User routes
router.post('/user', userController.create1);
router.get('/user', userController.fetchalluserData);
router.delete('/purgeUser/:id', userController.deleteuserData);

// Admin routes
router.post('/jobList', userController.jobList); // Admins only
router.get('/joblist', userController.fetchalljoblist);
router.delete('/purgejoblist/:id', userController.deletejoblist); // Admins only

module.exports = router;
