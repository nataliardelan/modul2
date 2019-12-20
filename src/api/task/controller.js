import { MongoClient, ObjectID } from 'mongodb';
import mongoose from "mongoose";

const url = 'mongodb://localhost:27017';
const dbName = 'taskDB';
mongoose.connect(url + '/' + dbName);

const Controler = {
    post: function (req, res) {
        let n = req.query.n;
        let j = 0
        for (var i = 0; n >= 1; i++) {
            n /= 10;
            j += 1
        }
        const answer = `${j}`
        res.send(answer)
    }
}


export default Controler;