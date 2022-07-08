import React from 'react';
import Activities from '../../components/Home/Activities';
import Banks from '../../components/Home/Banks';
import Header from '../../components/Home/Header';
import Locations from '../../components/Home/Locations';
import Overview from '../../components/Home/Overview';
import Relations from '../../components/Home/Relations';


function Home() {
  return (
    <div className="flex flex-col w-full">

      <div className="mb-6 w-full">
        <Header />
      </div>

      <div className="flex flex-col md:flex-row w-full">

        <div className="w-full md:w-1/4">
          <Overview />
        </div> 

        <div className="flex flex-col w-full md:w-3/4">

          <div className='w-full'>
            <Locations />
          </div>

          <div className="flex flex-col sm:flex-row w-full">

            <div className="w-full sm:w-1/2">
              <Banks />
              <Relations />
            </div>

            <div className="w-full sm:w-1/2">
              <Activities />
            </div>

          </div>

        </div>
        
      </div>

    </div>
  );
}

export default Home;
