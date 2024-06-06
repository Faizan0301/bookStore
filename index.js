const express = require('express')
const user = require('./models/user.schema')
const db = require('./config/database')
const port = 8083
const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.get('/', (req, res) => {
    return res.render('form')
})
app.get('/viewBook', (req, res) => {
    user.find({}).then((data) => {
        console.log("database add...");
        // console.log(data);
        return res.render('viewBook', {
            data
        })
    }).catch((err) => {
        console.log(err);
    })
})
app.post('/insertData', (req, res) => {
    let { bookName, authName, discription, image, id } = req.body
    if (id) {
        user.findByIdAndUpdate(id, { bookName, authName, discription, image }).then((data) => {
            // console.log(data);
            console.log("Edit data of " + data.bookName);
            return res.redirect('/viewBook')
        }).catch((err) => {
            console.log(err);
        })
    } else {
        user.create({ bookName, authName, discription, image }).then((data) => {
            console.log("show data");
            // console.log(data)
            console.log("Insart data of " + data.bookName);
            return res.redirect('/viewBook')
        }).catch((err) => {
            console.log(err);
        })
    }
})
app.get('/deletedata/:id', (req, res) => {
    let { id } = req.params
    user.findByIdAndDelete(id).then((data) => {
        // console.log(data);
        console.log("delete data of " + data.bookName);
        return res.redirect('back')
    }).catch((err) => {
        console.log(err);
    })
})
app.get('/editData/:id', (req, res) => {
    let { id } = req.params
    user.findById(id).then((data) => {
        // console.log(data);
        return res.render('edit', {
            data
        })
    }).catch((err) => {
        console.log(err);
    })
})
app.listen(port, (err) => {
    if (!err) {
        console.log("Server start. http://localhost:" + port);
    }
})
