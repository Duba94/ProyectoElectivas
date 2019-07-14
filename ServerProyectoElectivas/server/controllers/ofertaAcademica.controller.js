var admin = require('firebase-admin');

var bucket = admin.storage().bucket();
var bucket = admin.storage().bucket();


var multer = require('multer');
var storage = multer.diskStorage({
    destination: function( req, file, cb) {
        cb(null, './uploads/images/');
    },
    filename: function( req, file, cb) {
        if(!file.originalname.match(/\.(pdf)$/)) {
            var err = new Error();
            err.code = 'filetype';
            return cb(err);
        }else{
            cb(null, Date.now() + '_' + file.originalname);
        }
    }
});
var upload = multer({
    storage: storage,
    limits: {fileSize: 50 * 1024 * 1024}
}).single('myFile');


const ofertaAcademicaCtrl = {}
ofertaAcademicaCtrl.guardarContenidoPDF = (req, res) => {
    upload(req,res, function(err){
        if(err){
            if(err.code === 'LIMIT_FILE_SIZE'){
                res.json({success: false, message: 'File size is too large, Max Limit is 50MB'});
            } else if (err.code === 'typefile'){
                res.json({success: false, message: 'File type is invalid. Must be .png'});
            } else {
                console.log(err);
                res.json({success: false, message: 'File was not able to be uploaded'})
            }
        } else {
            if(!req.file){
                res.json({success: false, message: 'No file was selected'})
            } else {

                bucket.upload('./uploads/images/'+req.file.filename);
                console.log('la cargo xD');
                res.json({success: true, message: 'File was uploaded!'})
            }
        }
    });

    
}

module.exports = ofertaAcademicaCtrl;