interface OutlineButtonProps {
  label: string;
  onClick?: () => void;
}

const OutlineButton = ({ label, onClick }: OutlineButtonProps) => (
  <button
    className={`bg-primary/10 hover:bg-primary/40 border-2 border-primary/50 hover:border-primary/80 rounded-md py-2 px-8 text-white font-bold transition duration-300`}
    onClick={onClick}
  >
    {label}
  </button>
);

export default OutlineButton