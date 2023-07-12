import { useEffect, useState } from "react";

interface HeaderButtonsProps {
  label: string;
  onClick: () => void;
  active: boolean;
}

const HeaderButtons = ({ label, onClick, active }: HeaderButtonsProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const style = isHydrated
    ? { color: active ? '#7600C7' : '#FCFCFD' }
    : { color: '#7600C7' };

  return (
    <div onClick={onClick} style={style} className={`px-4 py-2 hover:!text-primary cursor-pointer transition duration-500`}>
      <p className="text-6 font-bold">{label}</p>
    </div>
  )
}

export default HeaderButtons;