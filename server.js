let express = require('express');
let app = express();
//uses the css file
app.use('/public', express.static('public'));

const studentsDb = require("./students/students")
console.log(studentsDb)

app.get('/students', function(req, res) {
    res.render("home.ejs", {
        students: studentsDb.getAll()
    })
});


app.listen(3000, function () {
    console.log('Listening on port 3000');
});