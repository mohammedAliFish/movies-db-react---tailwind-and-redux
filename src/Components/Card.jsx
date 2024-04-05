const Card = () => {
  return (
    <div className="flex justify-center m-[50px]">
      <div className="w-[1000px] h-[600px] flex relative overflow-hidden">
      <h1 className="text-blue-950 z-20 absolute right-[342px] top-[30px] rotate-[-7deg]">Travel</h1>
      <div className="bg-white w-[100px] h-[50px] bottom-[120px] z-10 absolute"></div>


      <div className=" w-[80px] absolute flex justify-around bottom-[420px] right-[260px] z-20 ">
        <button className="font-semibold text-2xl w-[30px] bg-white rounded-[8px] shadow-lg shadow-indigo-500/50">
            <a className=" rounded-[6px]">&lt;</a>
        </button>

        <button className="font-semibold text-2xl w-[30px] bg-white rounded-[8px] shadow-lg shadow-indigo-500/50"> 
            <a>&gt;</a>
        </button>
      </div>
      
        <div className=" m-auto ">

         
          <div className="w-[400px] h-[370px] bg-white absolute z-10 right-[100px] rounded-[10px] top-[165px] shadow-2xl shadow-blue-500/40 p-[10px]">
          
          </div>
          
          <div className="w-[350px] h-[550px]  bg-blue-950 skew-x-6 absolute rotate-90 right-[20px] top-2">
            
          </div>


        </div>

        <div className="w-[400px] h-[600px] bg-zinc-500"></div>
      </div>
    </div>
  );
};

export default Card;
