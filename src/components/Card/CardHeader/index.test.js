import CardHeader from '.';
import { screen, fireEvent, within } from '@testing-library/react';
import { renderWithRouter } from '../../../tests/Helpers/renderWithRouter';

const mockSetHeader = jest.fn();
const mockSetEditApproved = jest.fn();
const mockReduxDispatch = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockReduxDispatch,
}));
test('card header should be rendered', () => {
  renderWithRouter(
    <CardHeader
      editApproved={true}
      setHeader={mockSetHeader}
      setEditApproved={mockSetEditApproved}
      header="header"
    />
  );
  expect(screen.getByTestId('cardHeader')).toBeInTheDocument();
});

test('on clicking checkbox redux action should be called', () => {
  renderWithRouter(
    <CardHeader
      showBtns={true}
      editApproved={true}
      setHeader={mockSetHeader}
      setEditApproved={mockSetEditApproved}
      header="header"
    />
  );
});
