

export default function Home() {
  return (
    <>
       <main className=" max-w-full w-full md:w-3/4 sm:w-1/2">
        <div className="bgimage flex justify-center items-center">
          <div className="flex flex-col justify-center items-center m-auto p-5 bg-black/30 backdrop-blur-4xl w-1/3 rounded-lg">
            <h1 className="font-fam1 text-white/70 m-5">VibeKiks</h1>
            <p className="font-fam2 text-white/70 mb-5">Step Into Your Vibe</p>
            <button className="w-1/2 bg-black text-white p-2 mb-5 rounded-lg hover:cursor-pointer hover:bg-white/70 hover:text-black durition-200">View More</button>
          </div>
        </div>
       </main>
    </>
  );
}
