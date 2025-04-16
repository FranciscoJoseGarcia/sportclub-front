import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import BenefitCard from './BenefitCard';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('BenefitCard', () => {
  const mockProps = {
    id: 1,
    comercio: 'Test Commerce',
    descripcion: 'Test Description',
    imagen: 'test.jpg',
    archivado: false
  };

  it('renders correctly with active status', () => {
    render(
      <MemoryRouter>
        <BenefitCard {...mockProps} />
      </MemoryRouter>
    );

    expect(screen.getByText('Test Commerce')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('Activo')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', 'test.jpg');
  });

  it('renders correctly with inactive status', () => {
    render(
      <MemoryRouter>
        <BenefitCard {...mockProps} archivado={true} />
      </MemoryRouter>
    );

    expect(screen.getByText('Inactivo')).toBeInTheDocument();
  });

  it('navigates to benefit detail on click', () => {
    render(
      <MemoryRouter>
        <BenefitCard {...mockProps} />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole('img').parentElement!);
    expect(mockNavigate).toHaveBeenCalledWith('/beneficio/1');
  });
}); 