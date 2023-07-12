interface Option {
  value: any;
  description: any;
}

interface DropdownSelectorProps {
  label: string;
  onChange: (e: any) => void;
  options: Array<Option>;
  defaultValue?: string;
}

const DropdownSelector = ({ label, onChange, options, defaultValue }: DropdownSelectorProps) => (
  <select
    defaultValue={defaultValue ? defaultValue : ''}
    className={
      `mx-0 w-[100%] border-primary outline-none text-white/80 hover:border px-4 bg-[#C1C1C110] py-2 rounded-md`
    }
    onChange={onChange}
  >
    <option disabled value="">{label}</option>
    {
      options.map((option, index) => (
        <option key={`${option.value}${index}`} value={option.value}>{option.description}</option>
      ))
    }
  </select>
);

export default DropdownSelector;