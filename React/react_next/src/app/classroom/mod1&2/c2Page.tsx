import React from 'react';
import { GeoForm } from '@/components/mod1_2/c2geoform';
const Page = () => {
   return (
      <div className='flex flex-col items-center gap-6 p-8'>
         <h1 className='text-3xl font-bold'>Welcome to new GeoForm</h1>
         <GeoForm/>
      </div>
   )
};
export default Page;