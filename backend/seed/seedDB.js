const mongoose = require("mongoose");
const User = require("../models/User");
const Record = require("../models/Record");
const faker = require("faker");

(async function (){
    const strConn =`mongodb://guderian:Colore12@cluster0-shard-00-02.9of72.mongodb.net:27017/test?authSource=admin&replicaSet=atlas-czzf89-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`
    mongoose.connect(strConn, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify: false,
        useCreateIndex: true,
    })

    mongoose.connection.on("error", ()=>console.log("Cannot connect to the DB"));
    mongoose.connection.on("open", ()=>console.log("Connected to the database..."));

    //DROP USERS
    try{
        await User.deleteMany({});
        console.log("Old Users deleted");
    }catch(error){
        console.log(error);
    }

    //DROP RECORDS
    try{
        await Record.deleteMany({});
        console.log("Old Records deleted");
    }catch(error){
        console.log(error);
    }

    //CREATE 10 FAKE USERS
    const userPromises = Array(10)
    .fill(null)
    .map(()=>{
        const userData = {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            nickname: faker.internet.userName(),
            email: faker.internet.email(),
            password: "01234Ab",
            avatar: 'http://localhost:5001/statics/avatar.jpg',
        }
        const user = new User(userData)
        return user.save()
    })
    try{
        await Promise.all(userPromises);
        console.log("We stored 20 users in the DB");
    }catch(error){
        console.log(error);
    }

    //CREATE 20 FAKE RECORDS
    const recordsPromises = Array(20)
    .fill(null)
    .map(()=>{
        const recordData ={
            cover: `${faker.image.abstract()}?random=${Date.now()}`
            ,
            title: faker.lorem.words(),
            artist: faker.lorem.word(),
            year: faker.date.past(),
        }

        const record = new Record(recordData)
        return record.save()
    })
    try{
        await Promise.all(recordsPromises)
        console.log("We stored 10 records in the DB");
    }catch(error){
        console.log(error);
    }

    mongoose.connection.close();

})();