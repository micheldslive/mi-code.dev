import { Moon, Sun } from '.';
import { render, screen } from '@testing-library/react';

describe('<Themming Icons />', () => {
  test(`should by render a Moon`, () => {
    render(<Moon />);
    const title = screen.getByLabelText(/moon/i);
    expect(title).toBeInTheDocument();
  });
  test(`should by render a Sun`, () => {
    render(<Sun />);
    const title = screen.getByLabelText(/sun/i);
    expect(title).toBeInTheDocument();
  });
});
