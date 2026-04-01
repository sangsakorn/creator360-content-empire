import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders Creator360 Content Empire header title', () => {
  render(<App />);
  const titleElement = screen.getByRole('heading', { name: /Creator360 Content Empire/i, level: 1 });
  expect(titleElement).toBeInTheDocument();
});

test('renders Thai subtitle', () => {
  render(<App />);
  const subtitleElement = screen.getByText(/ระบบสร้างเนื้อหาด้วย AI เพื่อสร้างรายได้และตัวตน/i);
  expect(subtitleElement).toBeInTheDocument();
});

test('renders start button', () => {
  render(<App />);
  const startButton = screen.getByRole('button', { name: /เริ่มต้นใช้งาน/i });
  expect(startButton).toBeInTheDocument();
});