import Header from '../components/Header'
import HeroContainer from '../components/HeroContainer';
import SearchDateInput from '../components/Inputs/SearchDateInput';
import CardImage from '../components/CardImage';
import getMarsPhotos from '../api/getImages';
import { useEffect, useState } from 'react';
import { useData } from '../contexts/DataContext';
import OutlineButton from '../components/Buttons/OutlineButton';
import ImagePreloaders from '../components/ImagePreloaders';
import { cameras } from '../utils/cameras';
import { FaCamera, FaGlobe, FaSun } from 'react-icons/fa';
import DropdownSelector from '@/components/DropdownSelector';
import NumberInput from '@/components/Inputs/NumberInput';

const timesZones = [
  {
    value: 'earth_date',
    description: 'Earth'
  }, {
    value: 'sol',
    description: 'Solar'
  }
]

export default function Home() {
  const [photos, setPhotos] = useState<any[]>([]);
  const { rover, page, setPage } = useData();
  const [currentCamera, setCurrentCamera] = useState('');
  const [currentTimeZone, setCurrentTimeZone] = useState('earth_date');
  const [isLoading, setIsLoading] = useState(false);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  useEffect(() => {
    setPage(1);
    getPhotos();
  }, [rover, currentCamera, date, currentTimeZone]);

  useEffect(() => {
    if (currentTimeZone === 'earth_date') {
      setDate(new Date().toISOString().split('T')[0]);
    } else {
      setDate('1000')
    }
  }, [currentTimeZone]);

  useEffect(() => {
    getPhotos();
  }, [page]);

  const getPhotos = async () => {
    if (page === 1) {
      setIsLoading(true);
    }
    await getMarsPhotos(rover, page, currentCamera, date, currentTimeZone).then((data: any) => {
      if (page === 1) {
        setIsLoading(false);
        return setPhotos(data.photos);
      }
      setIsLoading(false);
      return setPhotos((prevPhotos: any[]) => [...prevPhotos, ...data.photos]);
    }, (error: any) => {
      setIsLoading(false);
    }).catch((error: any) => {
      setIsLoading(false);
    });
  };

  const incrementPage = () => {
    setPage((prevPage: number) => prevPage + 1);
  };

  return (
    <main className="bg-gradient-to-tr pb-20 from-primary-dark300 from-[-90%] to-black to-[90%] min-h-screen justify-between px-4 sm:px-12 md:px-24">
      <div className='w-[100%] max-w-[1440px] mx-auto'>
        <Header />
        <HeroContainer />
        <div className='py-8 sm:py-20 grid gap-6 items-center grid-cols-12 border-t border-gray-dark1100'>
          <div className='col-span-12 sm:col-span-6 mb-2 sm:mb-6'>
            <div className='flex items-center'>
              <FaCamera className='mr-4 ml-0 sm:mr-4 text-white text-6' />
              <DropdownSelector
                label='Choose a camera'
                onChange={(e) => setCurrentCamera(e.target.value)}
                options={cameras}
              />
            </div>
          </div>
          <div className='col-span-12 sm:col-span-6 mb-2 sm:mb-6'>
            <div className='flex items-center'>
              {
                currentTimeZone === 'earth_date' ?
                  <FaGlobe className='mr-4 ml-0 text-white text-6' />
                  : <FaSun className='mr-4 ml-0 text-white text-6' />
              }

              <DropdownSelector
                label='Choose a time zone'
                onChange={(e) => setCurrentTimeZone(e.target.value)}
                options={timesZones}
                defaultValue={'earth_date'}
              />
            </div>
          </div>
          {
            currentTimeZone === 'earth_date' ?
              <SearchDateInput
                buttonLabel='Search'
                label='Search for earth date:'
                className='col-span-12 flex'
                onChange={(e) => setDate(e.target.value)}
              /> :
              <NumberInput
                buttonLabel='Search'
                label='Search for solar date:'
                className='col-span-12 flex'
                onChange={(e) => setDate(e.target.value)}
              />
          }

        </div>
        <div className='grid grid-cols-12 gap-6'>
          {
            !isLoading ? photos?.map((photo: any) => (
              <CardImage
                key={photo?.id}
                className='col-span-6 sm:col-span-3'
                src={photo?.img_src}
              />
            )) : <ImagePreloaders />
          }
          {
            !isLoading && photos?.length === 0 &&
            <h3 className='text-6 text-gray-dark300 col-span-12 text-center my-20'>
              There's no photos to see with this params
            </h3>
          }
          <div className='col-span-12 flex justify-center my-10'>
            <OutlineButton label='Show more' onClick={() => incrementPage()} />
          </div>
        </div>
      </div>
    </main>
  )
}
