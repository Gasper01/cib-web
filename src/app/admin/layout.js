import '../globals.css';
import UserInfo from './userInfo';
export default function AdminLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <div></div>
        <UserInfo />
        {children}
      </body>
    </html>
  );
}
