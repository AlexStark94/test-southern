interface CardImageProps {
  className: string;
  src: string;
}

const CardImage = ({ className, src }: CardImageProps) => (
  <div className={`relative overflow-hidden bg-gray flex cursor-pointer border-2 border-primary/70 hover:border-primary/90 rounded-md items-center aspect-square transition duration-300 hover:scale-105 hover:shadow-2xl ${className}`}>
    <div className="z-1 loadingImage absolute top-0 left-0 w-[100%] bg-gradient-to-r from-gray via-gray-light100 to-gray w-[100%] h-[100%]"></div>
    <img
      className='h-[100%] z-10'
      src={src}
    />
  </div>
);

export default CardImage;