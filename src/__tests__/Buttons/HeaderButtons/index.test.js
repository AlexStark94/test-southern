import { render, screen, fireEvent } from '@testing-library/react';
import HeaderButtons from '@/components/Buttons/HeaderButtons';

describe('HeaderButtons', () => {
  it('should call onClick function when clicked', () => {
    const label = 'Button';
    const onClick = jest.fn();
    const active = true;

    render(<HeaderButtons label={label} onClick={onClick} active={active} />);

    const button = screen.getByText(label);
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
