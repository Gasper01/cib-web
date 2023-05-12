import './globals.css';
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <p>hola este es root layout</p>
        {children}
      </body>
    </html>
  );
}
