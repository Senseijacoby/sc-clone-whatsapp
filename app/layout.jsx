import Sidebar from "../components/Sidebar";

export const metadata = {
  title: "Whatsapp Web",
  description: "Created by Jacoby",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
