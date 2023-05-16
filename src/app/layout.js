import './globals.css';
export default function RootLayout({ children}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CIB</title>
      </head>
      <body>
      {children}
      </body>
    </html>
  );
}
