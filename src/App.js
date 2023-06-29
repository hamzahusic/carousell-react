import { useState } from 'react';

function App() {
  const images = ["https://images.pexels.com/photos/1438248/pexels-photo-1438248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1,https://images.pexels.com/photos/3933881/pexels-photo-3933881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/3933881/pexels-photo-3933881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/2909077/pexels-photo-2909077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"]
  const [carousel,setCarousel] = useState(0);
  
  return (
    <div >

    <h1 className='text-center py-10 uppercase tracking-[20px] font-bold text-xl'>carousel</h1>

      <div className='flex items-center flex-col'>
        <div className='flex gap-5 '>
          <button onClick={() => {carousel === 0 ? setCarousel(-(images.length-1)*100) : setCarousel(carousel+100)}} className=' z-99 bg-white text-7xl'>&#8249;</button>
          {<div className=" border-[5px] max-w-[550px] border-black overflow-hidden">
            <div className={`flex transition-transform duration-500 ease-in-out translate-x-[${carousel}%]`}>
            {images.map((img) => (
              <img src={img} alt=''/>
            ))}
            </div>
          </div>}
          <button onClick={() => {carousel === -(images.length-1)*100 ? setCarousel(0) : setCarousel(carousel-100)}} className='relative z-99 bg-white text-7xl'>&#8250;</button>
        </div>
        <div className='flex gap-5 justify-center items-center py-5'>
          {
            images.map((img,index) => (
              <button onClick={() => {setCarousel(index*(-100))}} className={`w-2 h-2 ${ index*(-100) === carousel ? "bg-black" : "bg-gray-400"} rounded-full`}></button>
            ))
          }
        </div>
      </div>

    </div>
  );
}

export default App;
