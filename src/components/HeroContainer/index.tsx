import Image from 'next/image';
import NebulaImage from '../../assets/images/nebula.png';

const HeroContainer = () => (
  <div className='relative py-20 mt-8 sm:mt-20 w-[100%] grid grid-cols-2 gap-4 items-center'>
    <div className='col-span-2 sm:col-span-1 z-10'>
      <h1 className='text-12 font-bold'>DISCOVER MARS</h1>
      <p className='text-6 text-gray-light300 mt-8'>
        Welcome to the NASA API portal.
        The objective of this site is to make NASA data,
        including imagery, eminently accessible to application
        developers.
      </p>
    </div>
    <div className='hidden sm:block col-span-1'>
      <Image
        className='right-16 bottom-20'
        src={NebulaImage}
        alt="Nebula picture"
        width={"100%" as unknown as number}
        height={500}
      />
    </div>
  </div>
);

export default HeroContainer;