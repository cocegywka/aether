import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Layout } from '@/components/Layout';

describe('Layout parity behavior', () => {
  it('opens and closes inquiry modal from nav button', async () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <Layout />
      </MemoryRouter>
    );

    expect(screen.queryByText("Let's craft your vision.")).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'START PROJECT' }));
    expect(await screen.findByText("Let's craft your vision.")).toBeInTheDocument();

    const closeButton = container.querySelector('button.absolute.right-6.top-6');
    expect(closeButton).not.toBeNull();
    fireEvent.click(closeButton!);
    expect(screen.queryByText("Let's craft your vision.")).not.toBeInTheDocument();
  });
});
