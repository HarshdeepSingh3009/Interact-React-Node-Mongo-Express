import express from "express";

// redirects to forgot password page
const router = express.Router()
router.get('/login/Forgot', (req, res) => {
  res.render('index',{
    content:"....",
    url : req.url
});
});


 

export default router;