var express = require('express');
var router = express.Router();
var con = require('../config')


router.get("/Posts", function (req, res) {

    con.query("Select * from tbusers where UserID=?", [0], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.send({ "count": "non zero" })
        }
        else {
            res.send({ "count": "zero" })
        }
    })
})



module.exports = router;