'use client'
export default function Delete({ result }) {
  return (
    <div>
      {result.map((v, i) => {
        return (
          <div key={i} className="flex ">
            <div >{result[i].content}</div>
            <span onClick={(e)=>{
                fetch('./api/post/delete',{
                method : 'POST', 
                body : result[i]._id
            }).then(()=>{
                e.target.parentElement.style.opacity = 0;
                setTimeout(()=>{
                  e.target.parentElement.style.display = 'none';
                }, 1000);
            })
            }}
            className="ml-3">🗑️</span>
          </div>
        );
      })}
      
    </div>
  );
}
