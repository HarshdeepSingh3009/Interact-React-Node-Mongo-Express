import express from "express";

// redirects to register page
var router  = express.Router();
router.get('/login/register', (req, res) => {
    res.render('index',{
    content:"....",
    url : req.url
    });
})

export default router;