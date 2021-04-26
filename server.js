const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Client } = require('pg');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authJwt = require('./helpers/jwt.js')
var nodemailer = require('nodemailer');
const path = require('path');
//const helmet = require('helmet');

const app = express();
app.use(express.json()); 
//app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api',authJwt);
app.use((err, req, res, next) => {
    if (err) {
        res.status(500).json({ message: err })
    }
});

require('dotenv').config();

//Database connection
const client = new Client({
    connectionString: process.env.DATABASE_URL
})
client.connect(err => {
    if (err) {
        console.error('connection error', err.stack)
    } else {
        console.log('Database is connected')
    }
});

if (process.env.NODE_ENV === 'production') {
   app.use('/',express.static(path.join(__dirname, 'app/build')));
}

app.use('/',express.static(path.join(__dirname, 'app/build')));

// Get database
app.get('/products', async (req, res) => {
    const sql = 'select * from products';
    try {
        const data = await client.query(sql);
        res.json(data.rows)
    } catch (err) {
        console.log(err.stack);
    }

});


// Add to database
app.post('/add', async (req, res) => {
    const sql = `insert into products(name,price,type) values('${req.body.name}',${req.body.price},'${req.body.type}')`;
    try {
        await client.query(sql);
        console.log("Successfully Addition!");
    } catch (err) {
        console.log(err.stack);
    }
   res.json(true)
});

// delete from database
app.delete('/delete', async (req, res) => {
    const sql = `delete from products where id=${req.body.id}`;
    try {
        await client.query(sql);
        console.log("Deleted!");
    } catch (err) {
        console.log(err.stack);
    }
    res.json(true)
});

// Edit to database
app.patch('/edit', async (req, res) => {
    const sql = `update products set name = '${req.body.name}', price = ${req.body.price} where id=${req.body.id};`;
    try {
        await client.query(sql);
        console.log("Successfully Editing!");
    } catch (err) {
        console.log(err.stack);
    }
    res.json(true)
});

//Search in database
app.get('/search/:search_term?', async (req, res) => {
    const sql = `select * from products where name like('%${req.params.search_term}%');`;
    try {
        const data = await client.query(sql);
        res.json(data.rows)
    } catch (err) {
        console.log(err.stack);
    }

});

// Register
app.post('/register/:email', async (req, res) => {
    const sql = `select Count(email)  from users where email = '${req.params.email}';`
    const data = client.query(sql);
    if ((await data).rows[0].count > 0) {
        res.json(0)
    } else {
        let hashPassword = bcrypt.hashSync(req.body.password, 10);
        const sql = `insert into users (firstname,lastname,email,mobile,password)
          select '${req.body.firstname}',
          '${req.body.lastname}',
           '${req.body.email}',
           ${req.body.mobile},
            '${hashPassword}' WHERE not exists (select * from users where email = '${req.params.email}' )`;
        try {
            await client.query(sql) && res.json("Successfully Addition!");
        } catch (err) {
            console.log(err.stack);
        }
    }
    
});

// update user
app.patch('/user/:id/update', async (req, res) => {
    let hashPassword = bcrypt.hashSync(req.body.password, 10);
    const sql = `update users set
   firstname = '${req.body.firstname}',
    lastname = '${req.body.lastname}',
      mobile =  ${req.body.mobile},
    password = '${hashPassword}' where id = ${req.params.id};`;
    try {
        await client.query(sql) && res.json("Successfully updated!");
    } catch (err) {
        console.log(err.stack);
    }
    
    
});

// Login
app.get('/login/:email/:password', async (req, res) => {
    const sql = `select * from users where email = '${req.params.email}'`;
    try {
        const user = await client.query(sql);
        if (!user.rows[0]) {
            res.json({ message: "This email is not found!" })
        } else {
            if (user.rows[0] && bcrypt.compareSync(req.params.password, user.rows[0].password)) {
                const token = jwt.sign({
                    user: user.rows[0]
                }, process.env.SECRET, { expiresIn: '1d' });
                
                res.send({
                    user: user.rows[0],
                    token: token
                });
                
            } else {
                res.json({ message: "This password is wrong!" })
            }
        }
    } catch (err) {
        console.log(err.stack);
    }

});

app.post('/contact', (req, res) => {
    
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'badrhelal1254@gmail.com', // generated ethereal user
          pass: 'B0R1H2L3M4K5@', // generated ethereal password
        },
    });

    var mailOptions = {
         from: `'${req.body.name}' <${req.body.email}>`,
        to: 'baderhelal1254@gmail.com',
        subject: `${req.body.sub}`,
        text: `${req.body.message}`,
        html: `<b>${req.body.message}</b>`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            res.json({ error: 'This email not sending now try again!' })
        } else {
            res.json({ success: 'Email sent: ' + info.messageId })
        }
    });
});

app.get('*', function (req, res) {
     res.sendFile(path.join(__dirname, 'app/build', 'index.html'));
})

let port =process.env.PORT || 5000;
app.listen(port, (() => console.log(`Connected successfully to ${port}`)))
