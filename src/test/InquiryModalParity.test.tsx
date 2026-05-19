import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { InquiryModal } from '@/components/InquiryModal';

describe('Inquiry modal parity behavior', () => {
  it('does not advance to step 2 when step 1 fields are missing', async () => {
    render(<InquiryModal isOpen={true} onClose={() => {}} />);

    fireEvent.click(screen.getByRole('button', { name: 'NEXT STEP' }));

    await waitFor(() => {
      expect(screen.queryByText('Contact Info')).not.toBeInTheDocument();
      expect(screen.getByText('Project Details')).toBeInTheDocument();
    });
  });

  it('submits full flow and reaches success screen', async () => {
    const onClose = vi.fn();
    render(<InquiryModal isOpen={true} onClose={onClose} />);

    fireEvent.click(screen.getByRole('button', { name: '50k - 150k' }));
    fireEvent.change(screen.getByPlaceholderText('e.g. 6 Months'), {
      target: { value: '4 months' },
    });
    fireEvent.change(screen.getByPlaceholderText('Tell us about the scope...'), {
      target: { value: 'A detailed scope that is longer than ten chars.' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'NEXT STEP' }));

    await waitFor(() => expect(screen.getByText('Contact Info')).toBeInTheDocument());

    fireEvent.change(screen.getByPlaceholderText('Alexander Wright'), {
      target: { value: 'Alex Wright' },
    });
    fireEvent.change(screen.getByPlaceholderText('alex@studio.com'), {
      target: { value: 'alex@studio.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Design Collective'), {
      target: { value: 'Design Collective' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'SUBMIT PROJECT' }));

    await waitFor(() => {
      expect(screen.getByText('Transmission Received')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole('button', { name: 'CONTINUE' }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
