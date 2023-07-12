import { useData } from '@/contexts/DataContext';
import HeaderButtons from '../Buttons/HeaderButtons';

const Header = () => {
  const { rover, setRover } = useData();

  return (
    <div className="flex pt-8 pb-6 items-center w-[100%] justify-between border-b border-gray-dark1100">
      <div className="flex text-9 font-monospace">
        NASA { "{ API }" }
      </div>
      <div className="block sm:flex">
        <HeaderButtons active={rover === "CURIOSITY"} onClick={() => setRover("CURIOSITY")} label="Curiosity" />
        <HeaderButtons active={rover === "OPPORTUNITY"} onClick={() => setRover("OPPORTUNITY")} label="Opportunity" />
        <HeaderButtons active={rover === "SPIRIT"} onClick={() => setRover("SPIRIT")} label="Spirit" />
      </div>
    </div>
  );
}

export default Header;