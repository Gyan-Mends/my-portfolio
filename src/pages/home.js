//imported assets
import React from 'react';
// import programming from '../images/progamming.jpg';


function Home() {
  return (
    <div className="bg-gray-800 h-screen">
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-2 h-[350px] w-[1000px] mt-10 bg-gray-600 bg-programming">
          {/* Content of the div */}
          <div>

          </div>
          <div className=' backdrop-filter backdrop-blur-sm flex justify-center items-center'>
                <div>
                    <p className='text-white text-[20px]'>Design</p>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
