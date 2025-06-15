export default function Loading(){
    return(
        <div className="bg-black/50 backdrop-blur-sm absolute h-full w-full top-0 left-0 flex justify-center items-center">
             <span className="loading loading-dots loading-lg bg-white"></span>
        </div>
    )
}