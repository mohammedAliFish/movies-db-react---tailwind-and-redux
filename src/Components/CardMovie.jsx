import { Link } from "react-router-dom";

const CardMovie = ({ mov }) => {
  return (
    <Link to={`/movie/${mov.id}`}>
     
       <div className="m-[5px] ">
         <div className="group relative cursor-pointer rounded-[8px] overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
           <div className="h-90 w-[400px]">
             <img
               className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
               src={`https://image.tmdb.org/t/p/w500` + mov.poster_path}
             />
           </div>
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
           <div className="absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
             <h5 className="font-dmserif text-1xl font-bold text-white mb-4">
               اسم الفلم :{mov.title}
             </h5>
             <h5 className="font-dmserif text-1xl font-bold text-white mb-4">
               تاريخ الاصدار : {mov.release_date}
             </h5>
             <h5 className="font-dmserif text-1xl font-bold text-white mb-4">
               عدد المقيمين : {mov.vote_count}
             </h5>
             <h5 className="font-dmserif text-1xl font-bold text-white mb-4">
               التقييم : {mov.vote_average}
             </h5>
           </div>
         </div>
       </div>
    </Link>
  );
};

export default CardMovie;
