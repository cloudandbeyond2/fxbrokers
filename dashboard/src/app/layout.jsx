import './globals.css';
import './font.css';
import ClientProviders from '@/components/ClientProviders';

export const metadata = {
  title: "Forex",
  description:
    "Forex",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
