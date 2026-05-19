import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { InquiryModal } from '../components/InquiryModal';

describe('InquiryModal', () => {
  it('renders nothing when closed', () => {
    const { container } = render(<InquiryModal isOpen={false} onClose={() => {}} />);
    expect(container.firstChild).toBeNull();
  });

  it('renders when open', async () => {
    render(<InquiryModal isOpen={true} onClose={() => {}} />);
    expect(await screen.findByText("Let's craft your vision.")).toBeInTheDocument();
  });

  it('progresses to step 2 when required fields are filled', async () => {
    render(<InquiryModal isOpen={true} onClose={() => {}} />);
    
    // Select Budget
    const budgetBtn = await screen.findByRole('button', { name: '50k - 150k' });
    fireEvent.click(budgetBtn);
    
    // Fill Timeline
    const timelineInput = screen.getByPlaceholderText('e.g. 6 Months');
    fireEvent.change(timelineInput, { target: { value: '4 months' } });
    
    // Fill Description
    const descInput = screen.getByPlaceholderText('Tell us about the scope...');
    fireEvent.change(descInput, { target: { value: 'Testing scope is large enough to pass validation' } });
    
    // Click Next
    const nextBtn = screen.getByRole('button', { name: 'NEXT STEP' });
    fireEvent.click(nextBtn);
    
    await waitFor(() => {
      expect(screen.getByText('Contact Info')).toBeInTheDocument();
    });
  });
});
