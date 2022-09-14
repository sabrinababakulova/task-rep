import { Card } from './index';
import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithRouter } from '../../tests/Helpers/renderWithRouter';
import { mockData } from '../../tests/Helpers/mockData';

const mockOnClose = jest.fn();
const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}));

describe('<Card />', () => {
  test('display card on the screen', () => {
    renderWithRouter(<Card data={mockData} />);
    expect(screen.getByTestId('card')).toBeInTheDocument();
  });

  test("on double click card redirect to the card's own page", () => {
    renderWithRouter(<Card data={mockData} />);
    expect(mockUseNavigate).toHaveBeenCalledTimes(0);
    fireEvent.doubleClick(screen.getByTestId('card'));
    expect(mockUseNavigate).toHaveBeenCalledTimes(1);
    expect(mockUseNavigate).toHaveBeenCalledWith(`/card/${mockData.id}`);
  });

  test('on discard card should have initial stats', () => {
    renderWithRouter(<Card data={mockData} />);

    fireEvent.click(screen.getByTestId('editBtn'));

    const discardBtn = screen.getByTestId('discardBtn');
    expect(discardBtn).toBeInTheDocument();
    expect(screen.getByTestId('cardHeader')).toHaveValue(mockData.header);

    fireEvent.input(screen.getByTestId('cardHeader'), {
      target: { value: 'newHeader' },
    });

    expect(screen.getByTestId('cardHeader')).toHaveValue('newHeader');

    fireEvent.click(discardBtn);

    expect(screen.getByTestId('cardHeader')).toHaveValue(mockData.header);
    expect(screen.getByTestId('editBtn')).toBeInTheDocument();
  });

  test('on save card should have new stats', () => {
    renderWithRouter(<Card data={mockData} />);

    fireEvent.click(screen.getByTestId('editBtn'));

    const saveBtn = screen.getByTestId('saveBtn');

    expect(saveBtn).toBeInTheDocument();
    expect(screen.getByTestId('cardHeader')).toHaveValue(mockData.header);

    fireEvent.input(screen.getByTestId('cardHeader'), {
      target: { value: 'newHeader' },
    });

    expect(screen.getByTestId('cardHeader')).toHaveValue('newHeader');

    fireEvent.click(saveBtn);

    expect(screen.getByTestId('cardHeader')).toHaveValue('newHeader');
    expect(screen.getByTestId('editBtn')).toBeInTheDocument();
  });

  test('if user in preview card page, should not have edit button', () => {
    renderWithRouter(<Card cardType="previewCard" data={mockData} />);

    expect(screen.queryByTestId('editBtn')).not.toBeInTheDocument();
  });

  test('if user is creating new card, should have save/delete buttons only', () => {
    renderWithRouter(<Card cardType="newCard" data={mockData} />);
    expect(screen.queryByTestId('editBtn')).not.toBeInTheDocument();
    expect(screen.getByTestId('saveDiscardBtn')).toBeInTheDocument();
  });

  test('if user in preview card and is not editing, should not see checkbox', () => {
    renderWithRouter(<Card cardType="previewCard" data={mockData} />);
    expect(screen.queryByTestId('checkbox')).not.toBeInTheDocument();
  });

  test('after discarding new card, modal should close', () => {
    renderWithRouter(
      <Card cardType="newCard" data={mockData} onClose={mockOnClose} />
    );
    expect(mockOnClose).toHaveBeenCalledTimes(0);
    expect(screen.getByTestId('saveDiscardBtn')).toBeInTheDocument();
    fireEvent.input(screen.getByTestId('cardHeader'), {
      target: { value: 'newHeader' },
    });
    fireEvent.click(screen.getByTestId('discardBtn'));
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  test('after accepting new card, modal should close', () => {
    renderWithRouter(
      <Card cardType="newCard" data={mockData} onClose={mockOnClose} />
    );

    expect(mockOnClose).toHaveBeenCalledTimes(0);
    expect(screen.getByTestId('saveDiscardBtn')).toBeInTheDocument();
    fireEvent.input(screen.getByTestId('cardHeader'), {
      target: { value: 'newHeader' },
    });
    fireEvent.click(screen.getByTestId('saveBtn'));
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  test('if header is empty, should not be able to save', () => {
    renderWithRouter(<Card data={mockData} />);

    fireEvent.click(screen.getByTestId('editBtn'));
    fireEvent.input(screen.getByTestId('cardHeader'), {
      target: { value: '' },
    });
    fireEvent.click(screen.getByTestId('saveBtn'));
    expect(screen.getByTestId('saveBtn')).toBeDisabled();
  });

  test('if user in read only mode, cannot edit card', () => {
    const initialState = {
      cardsCollection: [],
      checkedCards: [],
      isReadOnly: true, // setting read only mode
      status: null,
    };
    renderWithRouter(<Card data={mockData} />, {
      preloadedState: {
        allCardsInfo: initialState,
      },
    });
    expect(screen.getByTestId('editBtn')).toBeDisabled();
  });

  test('if user checkboxes, then the background color of the card should change', () => {
    renderWithRouter(<Card data={mockData} />);
    const cardClass = screen.getByTestId('card').className;
    fireEvent.click(screen.getByTestId('checkbox'));
    expect(screen.getByTestId('card').className).not.toEqual(cardClass);
  });
});
