import express from "express";

// redirects to login page
const router = express.Router()
router.get(['/','/login'], (req, res) => {
/*fs.readFile("./public/LogIn.html", (err, data) =>{
    res.send(`
    ${data.toString()}`);
})*/
res.render('index',{
    content:"....",
    url : req.url
});
 

});

export default router;