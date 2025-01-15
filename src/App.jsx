import { data } from "autoprefixer"
import Input from "./component/Input"
import React,{useState} from 'react'


function App() {
  
    const [dataArr, setDataArr] = useState([])

    const handleThree = (e)=>{
      let values = e.target.value
      if(values >= 100 && values <=999){ //for both length and breadth, values >= 100 && values <=999 else values >= 10 && values <=99
          
          // console.log(values)

          const temp1 = values.split('');
        
        //   const length = 3; //all length is 8
        //  const breadth = `${temp1[0]}${temp1[1]}` //for both lenght nad breadth, temp1[1]}${temp1[2]

          const length = temp1[0]; //for normal use
          const breadth = `${temp1[1]}${temp1[2]}`
          // console.log(length);
          // console.log(breadth);

          setDataArr(prev=> [...prev, {length, breadth}]);
          

        e.target.value = '';
          
      }
  }

 

  return (
    <>
    <div className="h-screen border-white p-2 ">

   

      <input type='number' onChange={(e)=> handleThree(e)} min={0} max={100} placeholder="पहिले लम्बाइ र पछि चौडाइ राख्नुहोस्" className='placeholder:text-xs w-4/5 border-2 border-blue-300 text-2xl bg-black text-white p-2' />

      { dataArr ? <Input data={dataArr} setDataArr={setDataArr} /> : <div>enter number</div> }


      <div className="text-xs text-teal-500 grid place-items-center">
      | भास्कर स: मिल तथा फर्निचर उद्योगबाट निर्मित |
    </div>

    </div>

   
    </>
  )
}

export default App
