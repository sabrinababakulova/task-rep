import CardHeader from '.';
import { screen, fireEvent, within } from '@testing-library/react';
import { renderWithRouter } from '../../../tests/Helpers/renderWithRouter';
import { mockData } from '../../../tests/Helpers/mockData';

const mockSetHeader = jest.fn();
const mockSetEditApproved = jest.fn();
const mockReduxDispatch = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockReduxDispatch,
}));

describe('<CardHeader />', () => {
  test('card header should be rendered', () => {
    renderWithRouter(
      <CardHeader
        editApproved={true}
        setHeader={mockSetHeader}
        setEditApproved={mockSetEditApproved}
        header={mockData.header}
      />
    );
    expect(screen.getByTestId('cardHeader')).toBeInTheDocument();
    expect(screen.getByTestId('cardHeader')).toHaveAttribute(
      'value',
      mockData.header
    );
  });

  test('on clicking checkbox redux action should be called', () => {
    renderWithRouter(
      <CardHeader
        showBtns={true}
        editApproved={true}
        setHeader={mockSetHeader}
        setEditApproved={mockSetEditApproved}
        header={mockData.header}
        cardId={mockData.id}
      />
    );
    expect(mockReduxDispatch).toHaveBeenCalledTimes(0);
    expect(screen.getByTestId('checkbox')).toBeInTheDocument();
    fireEvent.change(screen.getByTestId('checkbox'), {
      target: { checked: true },
    });
    expect(screen.getByTestId('checkbox')).toBeChecked();
    // fireing change AND click because of the bug in react-testing-library
    fireEvent.click(screen.getByTestId('checkbox'));
    expect(mockReduxDispatch).toHaveBeenCalledTimes(1);
    const mockDispatchUncheck = {
      payload: mockData.id,
      type: 'allCardsInfo/unCheckCard',
    };
    expect(mockReduxDispatch).toHaveBeenCalledWith(mockDispatchUncheck);
    const mockDispatchCheck = {
      payload: mockData.id,
      type: 'allCardsInfo/checkCard',
    };
    fireEvent.click(screen.getByTestId('checkbox'));
    expect(mockReduxDispatch).toHaveBeenCalledTimes(2);
    expect(mockReduxDispatch).toHaveBeenCalledWith(mockDispatchCheck);
  });
});
