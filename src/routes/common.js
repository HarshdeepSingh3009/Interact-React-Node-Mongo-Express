// contains routes for all links from home page
import express from "express";
import data from "../testData";
import fs from "fs";
import mongoose from 'mongoose';
import config from "../config";
import assert from "assert";
import multer from "multer";
import Grid from "gridfs-stream";
import path from "path";
var upload = multer({ dest: 'public/images/'});
const router = express.Router();

var inputFileName = ""
var outputFilename = ""
router.get('/home/discussions/:userId', (req , res) =>{
    if (req.params.userId.length === 0)
    {
         res.send({});
    }
         res.send(data);
});
router.get('/getProfileImage', (req, res) => {
      mongoose.connect(config.mongodbUri);
                var conn = mongoose.connection;
                Grid.mongo = mongoose.mongo;
                var filename = new Date().valueOf() + ".jpg";
                conn.once('open', function(){
                        console.log("connection open");
                        var gfs = Grid(conn.db);
                        outputFilename = path.join(__dirname,'../public/Assets/img/' + filename);
                        var fs_write_stream = fs.createWriteStream(outputFilename);
                        var readStream  = gfs.createReadStream({
                            filename:"Beauty-Deepika-Padukone-Wallpaper.jpg"
                        });
                        readStream.pipe(fs_write_stream);
                        fs_write_stream.on('close',function(file){
                            console.log("read from DB");
                        });
                        res.send(filename);
                    });
                   
                 });

router.post('/home/uploadImage/upload', upload.any(), (req, res) =>{
        if(req.files[0]){
                var file = req.files[0];
                var filename_1 = (new Date).valueOf() + "-" + file.originalname;
                fs.rename(file.path,path.join(__dirname,'../public/images/'+ filename_1),function(err){
                    if (err) throw err;
                });
                mongoose.connect(config.mongodbUri);
                var conn = mongoose.connection;
                Grid.mongo = mongoose.mongo;
                conn.once('open', function(){
                        console.log("connection open");
                        var gfs = Grid(conn.db);
                        var writeStream = gfs.createWriteStream({
                            filename: file.originalname
                        });
                        var filePath = path.join(__dirname,"../public/images/",filename_1)
                        fs.createReadStream(filePath).pipe(writeStream);
                        writeStream.on('close',function(file){
                            console.log(file.filename + " written To DB");
                        });
                    });
                    res.redirect('/home');
                 }
            });

export default router;