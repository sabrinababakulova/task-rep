import CardBody from '.';
import { screen, render, fireEvent } from '@testing-library/react';
import { renderWithRouter } from '../../../tests/Helpers/renderWithRouter';
import { mockData } from '../../../tests/Helpers/mockData';

const mockSetRevertedBody = jest.fn();
const mockSetBody = jest.fn();

describe('<CardBody />', () => {
  test('card body should be rendered', () => {
    renderWithRouter(
      <CardBody
        body={mockData.body}
        setBody={mockSetBody}
        setRevertBody={mockSetRevertedBody}
      />
    );
    expect(screen.getByTestId('cardBody')).toBeInTheDocument();
    expect(screen.getByTestId('cardBody')).toHaveTextContent(mockData.body);
  });

  test('user should not be able to edit if not editing', () => {
    renderWithRouter(
      <CardBody
        body={mockData.body}
        setBody={mockSetBody}
        setRevertBody={mockSetRevertedBody}
        isEditing={false}
      />
    );
    expect(screen.getByTestId('cardBody')).toHaveAttribute('readonly');
  });
  test('user should be able to edit if editing', () => {
    renderWithRouter(
      <CardBody
        body={mockData.body}
        setBody={mockSetBody}
        setRevertBody={mockSetRevertedBody}
        isEditing={true}
      />
    );
    expect(screen.getByTestId('cardBody')).not.toHaveAttribute('readonly');
  });

  test('the edited body should be saved as new body', () => {
    renderWithRouter(
      <CardBody
        body={mockData.body}
        setBody={mockSetBody}
        setRevertBody={mockSetRevertedBody}
        isEditing={true}
      />
    );
    expect(mockSetBody).toHaveBeenCalledTimes(0);
    expect(mockSetRevertedBody).toHaveBeenCalledTimes(0);
    fireEvent.change(screen.getByTestId('cardBody'), {
      target: { value: 'new body' },
    });
    expect(mockSetBody).toHaveBeenCalledTimes(1);
    expect(mockSetBody).toHaveBeenCalledWith('new body');
  });
});
