import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '@/App';

function renderAt(pathname: string) {
  window.history.pushState({}, '', pathname);
  render(<App />);
}

describe('App route parity', () => {
  it('renders home route content at /', () => {
    renderAt('/');
    expect(screen.getByText(/ARCHITECTING/i)).toBeInTheDocument();
  });

  it('renders studio route content at /studio', () => {
    renderAt('/studio');
    expect(screen.getByText('DESIGN LOGIC.', { exact: false })).toBeInTheDocument();
  });

  it('renders expertise route content at /expertise', () => {
    renderAt('/expertise');
    expect(screen.getByText(/ARCHITECTING/i)).toBeInTheDocument();
  });

  it('renders cases route content at /cases', () => {
    renderAt('/cases');
    expect(screen.getByText('CASE STUDIES.')).toBeInTheDocument();
  });

  it('renders journal route content at /journal', () => {
    renderAt('/journal');
    expect(screen.getByText('THE JOURNAL.')).toBeInTheDocument();
  });

  it('renders contact route content at /contact', () => {
    renderAt('/contact');
    expect(screen.getByText('START THE SEQUENCE.')).toBeInTheDocument();
  });

  it('renders dashboard route content at /dashboard', () => {
    renderAt('/dashboard');
    expect(screen.getByText(/WE CODE THE/i)).toBeInTheDocument();
  });

  it('renders privacy route content at /privacy', () => {
    renderAt('/privacy');
    expect(screen.getByText('PRIVACY POLICY')).toBeInTheDocument();
  });

  it('renders terms route content at /terms', () => {
    renderAt('/terms');
    expect(screen.getByText('TERMS OF SERVICE')).toBeInTheDocument();
  });

  it('renders not found content for unknown routes', () => {
    renderAt('/does-not-exist');
    expect(screen.getByText('Signal Lost')).toBeInTheDocument();
  });
});
