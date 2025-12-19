import Image from 'next/image'

export default function Home() {
  return (
    <>
       {/* Background Section on landing page */}
       <main className="h-[500px] max-w-full w-full md:w-3/4 sm:w-1/2">
        <div className="bgimage flex justify-center items-center">
          <div className="flex flex-col justify-center items-center mt-15 p-5 bg-black/20 backdrop-blur-xs w-1/3 rounded-lg">
            <h1 className="font-fam1 text-white/80 m-5">VibeKiks</h1>
            <p className="font-fam2 text-white/80 mb-5">Step Into Your Vibe</p>
            <button className="w-1/2 bg-black text-md text-white p-2 mb-5 rounded-lg cursor-pointer hover:bg-white/70 hover:text-black hover:shadow-black hover:shadow-xl transition duration-500">Explore More</button>
          </div>
        </div>
       </main>

       {/* About Section on landing page */}
       <section className="flex flex-col justify-center items-center bg-gray-100">
        <div className="parent grid grid-cols-5 grid-rows-5 gap-4 w-3/4 mt-25">
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
            <h2 className="text-lg stfont mb-4 mt-4 ml-5">About Us</h2>
            <h1 className="text-4xl font-bold stfont mb-8 ml-5">We Provide High Quality Shoes</h1>
            <p className="stfont text-base mb-8 ml-5">Your style journey starts from the ground up. At VibeKiks, we deliver more than just sneakers – 
              we provide confidence, comfort, and connection. Explore our collection of premium footwear where 
              every stitch tells a story, every design makes a statement, and every pair helps you walk through 
              life with intention and flair.</p>
            <button className="w-1/3 bg-black ml-5 text-md text-white p-2  rounded-lg cursor-pointer hover:bg-white/70 hover:text-black hover:shadow-black hover:shadow-xl transition duration-500">Explore More</button>
          </div>
        </div>
       </section>

       {/* Categories Section on landing page */}
       <section className="flex justify-center items-center w-full mt-25">
        <div className="w-3/4">
          <div className="w-full flex justify-center items-center">
            <div className="w-1/2 justify-start flex">
              <h1 className="font-bold text-4xl mb-12">Categories</h1>
            </div>
            <div className="w-1/2 justify-end flex">
              <h1 className="text-md mb-12">All Products →</h1>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="bg-[url('/MenS.jpg')] bg-center bg-cover bg-no-repeat w-1/3 h-60 rounded-md flex flex-col justify-end">
              <p className="bg-black/50 text-white py-4 text-center text-lg items-end rounded-b-md">Man</p>
            </div>
            <div className="bg-[url('/WomenS.jpeg')] bg-center bg-cover bg-no-repeat w-1/3 h-60 rounded-md flex flex-col justify-end">
              <p className="bg-black/50 text-white py-4 text-center text-lg items-end rounded-b-md">Woman</p>
            </div>
            <div className="bg-[url('/KidS.jpg')] bg-center bg-cover bg-no-repeat w-1/3 h-60 rounded-md flex flex-col justify-end">
              <p className="bg-black/50 text-white py-4 text-center text-lg items-end rounded-b-md">Kids</p>
            </div>
          </div>
        </div>
       </section>

       {/* Trending Section on landing page */}
       <section className="bg-gray-100 flex justify-center items-center w-full mt-25">
        <div className="w-3/4">
          <div className="w-full flex justify-center items-center mt-25">
            <div className="w-1/2 justify-start flex">
              <h1 className="font-bold text-4xl mb-12">Trending Now</h1>
            </div>
            <div className="w-1/2 justify-end flex">
              <h1 className="text-md mb-12">All Products →</h1>
            </div>
          </div>
          <div className="flex gap-8 mb-20">
            <div className="bg-[url('/Vomero.jpeg')] w-1/2 h-60 bg-cover bg-no-repeat bg-center rounded-md flex flex-col justify-end">
              <p className="bg-black/50 text-white py-4 text-center text-lg items-end rounded-b-md">Nike Vomero 5</p>
            </div>
            <div className="bg-[url('/Samba.webp')] w-1/2 h-60 bg-cover bg-no-repeat bg-center rounded-md flex flex-col justify-end">
              <p className="bg-black/50 text-white py-4 text-center text-lg items-end rounded-b-md">Adidas Samba</p>
            </div>
          </div>
        </div>
       </section>

       {/* New Arrival Section on landing page */}
       <section className="flex justify-center items-center w-full mt-25">
        <div className="w-3/4">
          <div className="w-full flex justify-center items-center">
            <div className="w-1/2 justify-start flex">
              <h1 className="font-bold text-4xl mb-12">New Arrivals</h1>
            </div>
            <div className="w-1/2 justify-end flex">
              <h1 className="text-md mb-12">All Products →</h1>
            </div>
          </div>
          <div className="flex gap-8 mb-20">
            <div className="bg-[url('/Vomero.jpeg')] bg-center bg-cover bg-no-repeat w-1/3 h-60 rounded-md flex flex-col justify-end">
              <p className="bg-black/50 text-white py-4 text-center text-lg items-end rounded-b-md">Nike Vomero 5</p>
            </div>
            <div className="bg-[url('/V1.jpeg')] bg-center bg-cover bg-no-repeat w-1/3 h-60 rounded-md flex flex-col justify-end">
              <p className="bg-black/50 text-white py-4 text-center text-lg items-end rounded-b-md">Nike Vomero 5</p>
            </div>
            <div className="bg-[url('/V2.jpeg')] bg-center bg-cover bg-no-repeat w-1/3 h-60 rounded-md flex flex-col justify-end">
              <p className="bg-black/50 text-white py-4 text-center text-lg items-end rounded-b-md">Nike Vomero 5</p>
            </div>
          </div>
        </div>
       </section>

    </>
  );
}
