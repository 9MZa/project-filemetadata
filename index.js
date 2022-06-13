require('dotenv').config();
var express = require('express');
var cors = require('cors');
var app = express();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});


app.post("/api/fileanalyse", upload.single("upfile"), (req, res) => {
  const file = req.file;
  let detailFile = {
    name: file.originalname,
    type: file.mimetype,
    size: file.size
  }
  console.log(detailFile);
  res.json(detailFile)
})



const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
