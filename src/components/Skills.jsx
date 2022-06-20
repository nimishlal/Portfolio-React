import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import AWS from '../assets/aws.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import Adobe from '../assets/adobe-xd.png';
import CSharp from '../assets/c--4.png';
import Azure from '../assets/microsoft-azure-2.png';
import Typescript from '../assets/typescript.png';
import Angular from '../assets/angular-icon-1.png';
import Docker from '../assets/docker.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0C4346] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4'> These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#AD9128] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#AD9128] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#AD9128] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#AD9128] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#AD9128] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#AD9128] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-[#AD9128] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                  <p className='my-4'>MONGO DB</p>
              </div>
              <div className='shadow-md shadow-[#AD9128] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={AWS} alt="HTML icon" />
                  <p className='my-4'>AWS</p>
              </div>
              <div className='shadow-md shadow-[#AD9128] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto pt-5' src={Angular} alt="HTML icon" />
                  <p className='my-4'>Angular</p>
              </div>
              <div className='shadow-md shadow-[#AD9128] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto pt-5' src={CSharp} alt="HTML icon" />
                  <p className='my-4'>C#</p>
              </div>
              <div className='shadow-md shadow-[#AD9128] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto pt-5 mt-8' src={Azure} alt="HTML icon" />
                  <p className='my-4'>Azure</p>
              </div>
              <div className='shadow-md shadow-[#AD9128] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto pt-5' src={Typescript} alt="HTML icon" />
                  <p className='my-4'>Typescript</p>
              </div>
              <div className='shadow-md shadow-[#AD9128] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto pt-5' src={Adobe} alt="HTML icon" />
                  <p className='my-4'>Adobe Xd</p>
              </div>
              <div className='shadow-md shadow-[#AD9128] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto pt-5' src={FireBase} alt="HTML icon" />
                  <p className='my-4'>Firebase</p>
              </div>
              <div className='shadow-md shadow-[#AD9128] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto pt-5' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>Tailwind</p>
              </div>
              <div className='shadow-md shadow-[#AD9128] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto pt-5' src={Docker} alt="HTML icon" />
                  <p className='my-4'>Docker</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
