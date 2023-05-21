import { AllProjects } from '.';
import { render, screen } from '@testing-library/react';

describe('<AllProjects />', () => {
  test(`should by render a AllProjects`, () => {
    render(<AllProjects />);
    const projects = screen.getAllByLabelText(/project/i);

    projects.map(project => expect(project).toBeInTheDocument());
  });
});
