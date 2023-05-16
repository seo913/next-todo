
export default function All(){
    return(
        <div className="mb-5">
        <form action="./api/post/create" method="POST">
                <div>
                <input className="border-2 border-green-300 py-1 px-2 naa" type="text" placeholder="오늘의 할 일을 입력해주세요." 
                name='content'/>
                <button className="bg-green-300 border-green-500 ml-2 border-2 text-white py-1 px-2" type="submit">
                    버튼</button>
                </div>
        </form> 
        </div>
        
    )
}