const express=require("express");

const {PORT}=require('./config/serverConfig') || 3000;


const setupServer=async()=>{

    const app=express();

    app.listen(PORT,()=>{
       console.log(`server listening on localhost:${PORT}`);
    });
}

setupServer();
 