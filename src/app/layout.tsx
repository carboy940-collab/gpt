import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Now What? Phase 1',
  description: 'Playable vertical slice for teen life skills game.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
