const expressJwt = require('express-jwt');

const authJwt = () =>{

    const secret = process.env.SECRET;
    return expressJwt({ secret, algorithms: ['HS256'] }).unless({
        path:[
            {URL:'/products(.*)/',method:['GET']},
            '/login(.*)/',
            '/register(.*)/'
            
        ]
    })
}
module.exports =authJwt;