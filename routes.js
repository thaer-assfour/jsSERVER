const express = require('express')
const router = express.Router()

// router.get('/', (req, res) => {
//     req.getConnection((err, conn) => {
//         if (err) return res.send(err)
//         conn.query('SELECT * from users', (err, data) => {
//             if (err) return res.send(err)

//             res.json(data)
//         })
//     })

// })

// router.post('/cr', (req, res) => {

//     req.getConnection((err, conn) => {
//         if (err) return res.send(err)

//         conn.query('INSERT INTO users set ?', [req.body], (err, data) => {
//             if (err) return res.send(err)

//             res.send('added succesfully')
//         });


//     })

// })

// router.delete('/delete', (req, res) => {

//     req.getConnection((err, conn) => {
//         if (err) return res.send(err)

//         conn.query('DELETE FROM users WHERE name = ?', [req.body.name], (err, data) => {
//             if (err) return res.send(err)

//             res.send('deleted succesfully')
//         });


//     })
// })
module.exports = router