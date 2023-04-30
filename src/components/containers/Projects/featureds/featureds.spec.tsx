import { FeaturedProjects } from '.';
import { screen } from '@testing-library/react';
import { featured } from '@/src/data';
import { renderWithProviders } from '@/src/libs';
import { cleanup } from '@testing-library/react';
import i18next from 'i18next';

jest.mock('next/router', () => require('next-router-mock'));
void i18next.changeLanguage('cimode');

afterEach(cleanup);

describe('<FeaturedProjects />', () => {
  test(`should by render a FeaturedProjects`, () => {
    renderWithProviders(<FeaturedProjects featured={featured} />);

    const featuredProjects = screen.getByLabelText(/featuredProjects/i);
    expect(featuredProjects).toBeInTheDocument();
  });
});
