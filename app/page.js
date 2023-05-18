import { connectDB } from '@/util/database';
import All from './all/page';
import Delete from './all/delete';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const db = (await connectDB).db('todolist'); //디비 불러오기2 db('forum') 은 내가 만들어논 몽고디비저장소
  let result = await db.collection('todo').find().toArray(); //디비 불러오기3 // 이 줄이 모든 데이터를가져와주세요.
  // console.log(result);
  return (
      <div className='min-h-screen flex flex-col justify-center items-center '>
        <div className=' font-bold text-2xl mb-5'>TODOLIST</div>
        <All/>
        <Delete result={result}/>
      </div>
    
  );
}
