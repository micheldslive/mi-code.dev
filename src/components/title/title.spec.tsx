import { Title } from '.';
import { render, screen } from '@testing-library/react';

describe('<Title />', () => {
  test(`should by render a Title`, () => {
    render(<Title subTitle='Subtitle' />);
    const title = screen.getByLabelText(/title/i);
    expect(title).toBeInTheDocument();
  });
});
