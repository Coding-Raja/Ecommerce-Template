import Image from 'next/image'

export default function Home() {
  return (
    <>
       <main className="h-[500px] max-w-full w-full md:w-3/4 sm:w-1/2">
        <div className="bgimage flex justify-center items-center">
          <div className="flex flex-col justify-center items-center mt-15 p-5 bg-black/20 backdrop-blur-xs w-1/3 rounded-lg">
            <h1 className="font-fam1 text-white/80 m-5">VibeKiks</h1>
            <p className="font-fam2 text-white/80 mb-5">Step Into Your Vibe</p>
            <button className="w-1/2 bg-black text-lg text-white p-2 mb-5 rounded-lg cursor-pointer hover:bg-white/70 hover:text-black hover:shadow-black hover:shadow-xl transition duration-500">Explore More</button>
          </div>
        </div>
       </main>
       <section className="mt-25 flex flex-col justify-center items-center">
        <div className="parent grid grid-cols-5 grid-rows-5 gap-2 w-3/4">
          <div className="div1 row-span-2">
            <Image 
            src="/Sneaker13.jpg"
            alt="Shoe Image"
            width={300}
            height={200}
            className='w-full h-full object-cover rounded-lg'
            />
          </div>
          <div className="div2 row-span-2 col-start-1 row-start-3">
            <Image 
            src="/Sneaker12.webp"
            alt="Shoe Image"
            width={300}
            height={200}
            className='w-full h-full object-cover rounded-lg'
            />
          </div>
          <div className="div3 row-span-4 col-start-2 row-start-1">
            <Image 
            src="/Sneaker11.jpg"
            alt="Shoe Image"
            width={300}
            height={600}
            className='w-full h-full object-cover rounded-lg'
            />
          </div>
          <div className="div4 col-span-3 row-span-4 col-start-3 row-start-1">
            <h2 className=''>About Us</h2>
            <h1 className=''>We Provide High Quality Shoes</h1>
            <button className="w-1/2 bg-black text-lg text-white p-2 mb-5 rounded-lg cursor-pointer hover:bg-white/70 hover:text-black hover:shadow-black hover:shadow-xl transition duration-500">Explore More</button>
          </div>
        </div>
       </section>
    </>
  );
}
