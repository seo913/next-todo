import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Delete(req,res){
    if(req.method === 'POST'){
      const db = (await connectDB).db('todolist');
      let result = await db.collection('todo').deleteOne({_id : new ObjectId(req.body)});
        res.status(200).redirect(302,'/');
    }
}