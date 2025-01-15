import React,{useRef, useEffect, useState} from 'react'

const Input = ({data,setDataArr}) => {
  
   
    let temps = 0;
    
    const parentRef = useRef(null)
    

    useEffect(()=>{
        parentRef.current?.lastElementChild?.scrollIntoView()

    },[data])


    const getValue = (l,b)=>{
         const res =  Math.trunc(((parseFloat(l)*(parseFloat(b) *parseFloat(b)))/2304)*100)/100;
        


         return  res;
    }

    // console.log(total)



    const deleteThis = (e,indext)=>{
    //    console.log(indext)
        setDataArr(data.filter((ele,index)=> index!=indext))
       

    }

    const getTotalValue = ()=>{
    

    data.forEach(e => {
        // Scale up all numbers to integers (multiply by 100)
        let length = Math.round(parseFloat(e.length) * 100);
        let breadth = Math.round(parseFloat(e.breadth) * 100);

        // Perform calculations in scaled-up integer form
        let k = Math.trunc(((length * (breadth * breadth)) / 2304) / 10000);
        
        // Add k to temps
        temps += k;
        
    });

    // Scale temps back down to 2 decimal places
    return temps / 100;

    


      
    }

 
  

  return ( 
    <div className='w-full   h-[37rem] overflow-y-scroll grid place-items-center gap-3 mt-2 py-2 relative'>

            <div className="text-right pb-5 fixed right-0 top-2 text-base ">
                <pre>{`Total:
                 ${data && getTotalValue()} `}</pre>
            </div>


<div ref={parentRef} className=' grid place-items-center py-4  gap-3  '>
        {
            data.length >0 ?

            data.map((e,index)=>(
                // tablet:w-28 
                <div id={index} className='w-fit  flex justify-around relative gap:2  mb-2'>


                    <input type='number' className='text-center bg-black text-white mr-1' min={0} max={100} value={e.length}/>
                    <input type='number' className='text-center bg-black text-white mr-1' min={0} max={100} value={e.breadth}/>

                    <input type='number' className='text-center bg-black text-white mr-1' min={0} max={100}  value={getValue(e.length, e.breadth)} readOnly />
                
                    <button className='h-14 w-14 font-black text-black hover:scale-110 hover:bg-red-900 active:scale-90 bg-red-400' onClick={()=>deleteThis(e,index)} >X</button>
                </div>

                
            ))
            :
            <div>
                enter number </div>
        }
</div>
  


    </div>
  )
}

export default Input