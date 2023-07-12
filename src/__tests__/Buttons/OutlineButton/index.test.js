import { render, screen, fireEvent } from '@testing-library/react';
import OutlineButton from '@/components/Buttons/OutlineButton';

describe('OutlineButton', () => {
  it('should render the button correctly', () => {
    const label = 'Click Me';
    render(<OutlineButton label={label} />);

    const button = screen.getByRole('button', { name: label });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-primary/10');
    expect(button).toHaveTextContent(label);
  });

  it('should call onClick function when clicked', () => {
    const label = 'Click Me';
    const onClick = jest.fn();
    render(<OutlineButton label={label} onClick={onClick} />);

    const button = screen.getByRole('button', { name: label });
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
