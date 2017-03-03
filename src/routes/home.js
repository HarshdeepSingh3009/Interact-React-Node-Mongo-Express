import express from "express";

// redirects to home page
const router = express.Router()
router.get('/home', (req, res) => {
res.render('index',{
    content:"....",
    url : req.url
});
 

});

export default router;