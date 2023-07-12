import OutlineInput from "../../Buttons/OutlineButton"

interface NumberInputProps {
  buttonLabel: string;
  label: string;
  className?: string;
  color?: string;
  onChange: (e: any) => void;
}

const NumberInput = ({ onChange, buttonLabel, label, className, color = '#9900FF' }: NumberInputProps) => (
  <div className={className}>
    <label className='w-content text-5 text-white/90 font-bold' htmlFor="date-search">{label}</label>
    <input 
      id='date-search' 
      style={{
        borderColor: color
      }} 
      defaultValue={1000}
      className={`w-[100%] outline-none mx-4 text-white/80 hover:border px-4 bg-[#C1C1C110] py-2 rounded-md`} 
      type="number"
      step={1}
      onBlur={onChange}
    />
    <OutlineInput label={buttonLabel} />
  </div>
)

export default NumberInput