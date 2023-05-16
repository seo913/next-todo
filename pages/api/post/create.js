import { connectDB } from "@/util/database";

export default async function create(req,res){
    if(req.method === 'POST'){
        // console.log(req.body);
        if(req.body.content === ''){
            return res.status(500).json('할일 입력해주세요.');
        }else{
        const db = (await connectDB).db('todolist');
        let result = await db.collection('todo').insertOne(req.body);
         return res.status(200).redirect(302,'/');
        }
        // .json('요청완료');
    }
}