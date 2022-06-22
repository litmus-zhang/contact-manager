import { render, screen ,fireEvent} from '@testing-library/react';
import { click } from '@testing-library/user-event/dist/click';
import App from './App';

test('Check for add contact button', () => {
  render(<App />);
  const addContact = screen.queryByTestId("add-contact-button");
  expect(addContact).toBeInTheDocument();
});
test('Expect Drawer not to show', () => {
  render(<App />);
  const addContactDrawer = screen.queryByTestId("add-contact-drawer");
  expect(addContactDrawer).not.toBeInTheDocument();
});
test('Expect Drawer to show on Click', () => {
  render(<App />);
  const addContact = screen.queryByTestId("add-contact-button");
  fireEvent.click(addContact)

  const addContactDrawer = screen.queryByTestId("add-contact-drawer");
  expect(addContactDrawer).toBeInTheDocument();
});
