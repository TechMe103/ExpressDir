const express = require("express");
const app = express();
console.dir(app);

let port= 3000; //8080

app.listen(port , () =>{
    console.log(`app listening on port ${port}`);
});

//Write localhost:3000 on web browser 

// app.use((req , res)=>{
//     // console.log(req);
//     console.log("request received");
//     res.send("this is basic response");
// });

// app.use((req , res) =>{
//     console.log("request received");
//     //json format data
//     // res.send({
//     //     name: "Apple" , 
//     //     color: "red" , 
//     // });

//     //html format data
//     let code="<h1> Fruits </h1> <ul><li>apple</li><li>Orange</li></ul>";
//     res.send(code)

// });

app.get("/" , (req , res) => {
    res.send("You contacted root path");
});

app.get("/apple" , (req , res) => {
    // res.send("You contacted apple path");
    res.send("Hello");
});

app.get("*" , res =>{
    res.send("This path does not exist");
});

app.post("/" , (req , res) =>{
    res.send("You sent a post request to root");
});

//Path parameter
// app.get('/:username/:id' , (req , res) =>{
//     console.log(req.params);
//     let { username , id } = req.params;
//     res.send(`Welcome to the page of @${username}.`);
// });

//Query string
// app.get("/search" , (req , res) => {
//     console.log(req.query);
//     res.send("No result");
// });

app.get("/search" , (req , res)=>{
    let { q }= req.query;
    if(!q){
        res.send("<h1>Nothing searches</h1>");
    }
    res.send(`Search results for query: ${q}`);
});