import { Test } from '.';
import { render, screen } from '@testing-library/react';

describe('<Test />', () => {
  test(`should by render a Test`, () => {
    render(<Test subTitle='Subtitle' />);
    const logo = screen.getByLabelText(/logo/i);
    expect(logo).toBeInTheDocument();
  });
});
