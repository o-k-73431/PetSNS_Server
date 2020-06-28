const express = require('express');
const router = express.Router();

const signupDao = require('../models/signup-dao.js');



router.post('/', (req, res) => {

    const u_name = req.body.u_name;
    const u_pass = req.body.u_pass;

    signupDao.insert(u_name, u_pass)
        .then(() => res.render('main'))
        .catch(err => {
            console.log(err.sqlState);

            if (err.sqlState == 23000) {
                res.render('signup', { error: '入力したusernameは既に登録されています。' });
                return;
            }
            res.render('error', { error: err })
        });
});

module.exports = router;
