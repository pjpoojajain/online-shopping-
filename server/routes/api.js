var app = require('express')();

var mongo = require('mongodb').MongoClient;

app.post('/register',(req,res)=>{

   var url="mongodb://localhost:27017/shopdata"

   mongo.connect(url,(err,db)=>
   {
    
    var dbo=db.db("shopdata") 
    dbo.collection('register').insertOne(req.body)
   }) 

    res.send("successfully");
    res.end;
    dbo.collection('register').findByIdAndUpdate(req.body.id, { Fname: req.body.Fname, Lname: req.body.Lname, mail: req.body.mail, pw: req.body.pw,},  
        function(err,data) {  
        if (err) {  
        res.send(err);         
        }  
        else{        
               res.send({data:"Record has been Updated..!!"});  
          }  
      })  
}    
    
);  

  
  
 
app.post('/login',(req,res)=>{

    var url="mongodb://localhost:27017/shopdata"
 
    mongo.connect(url,(err,db)=>
    {
     var dbo=db.db("shopdata") 
     dbo.collection('register').find({"mail":req.body.mail,"pw":req.body.pws})
                                                    .toArray((err,data)=>{
                                                        if(err || data.length<=0)
                                                        {
                                                            res.send("user undefined")
                                                        }
                                                        else{
                                                            res.send("successfully login")
                                                        }

                                                    })
    })
 })
 app.post('/admin',(req,res)=>{

    var url="mongodb://localhost:27017/shopdata"
 
    mongo.connect(url,(err,db)=>
    {
     var dbo=db.db("shopdata") 
     dbo.collection('admin').find({"admin":req.body.admin,"password":req.body.adpass})
                                                    .toArray((err,data)=>{
                                                        if(err || data.length<=0)
                                                        {
                                                            res.send("user undefined")
                                                        }
                                                        else{
                                                            res.send("successfully login")
                                                        }

                                                    })
    })
 })
 app.post('/familyinfo',(req,res)=>{

   var url="mongodb://localhost:27017/youraccount"

   mongo.connect(url,(err,db)=>
   {
    var dbo=db.db("shopdata") 
    dbo.collection('FamilyInfo').insertMany(req.body)
   })                                                                                                                                                                                           
    res.send("successfully");
    res.end;
})




module.exports = app; 