import { render, screen, fireEvent } from '@testing-library/react';
import Header from '@/components/Header';
import { useData } from '../../../contexts/DataContext';

jest.mock('../../../contexts/DataContext', () => ({
  useData: jest.fn(),
}));

describe('Header', () => {
  it('should render the component correctly', () => {
    const rover = 'CURIOSITY';
    const setRover = jest.fn();
    useData.mockReturnValue({
      rover,
      setRover,
    });

    render(<Header />);

    // Verificar que el componente se renderice correctamente
    const heading = screen.getByText('NASA { API }');
    expect(heading).toBeInTheDocument();

    // Verificar que los botones se rendericen correctamente y se establezcan los estilos y propiedades adecuados
    const curiosityButton = screen.getByText('Curiosity');
    expect(curiosityButton).toBeInTheDocument();
    expect(curiosityButton).toHaveTextContent('Curiosity');
    fireEvent.click(curiosityButton);
    expect(setRover).toHaveBeenCalledWith('CURIOSITY');

    const opportunityButton = screen.getByText('Opportunity');
    expect(opportunityButton).toBeInTheDocument();
    expect(opportunityButton).toHaveTextContent('Opportunity');
    fireEvent.click(opportunityButton);
    expect(setRover).toHaveBeenCalledWith('OPPORTUNITY');

    const spiritButton = screen.getByText('Spirit');
    expect(spiritButton).toBeInTheDocument();
    expect(spiritButton).toHaveTextContent('Spirit');
    fireEvent.click(spiritButton);
    expect(setRover).toHaveBeenCalledWith('SPIRIT');
  });
});
