import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function Layout({ children }) {
  const sidebarWidth = 240;

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* NAVBAR */}
      <Navbar sidebarWidth={sidebarWidth} />

      <div style={{ display: "flex", flex: 1 }}>
        {/* SIDEBAR */}
        <Sidebar width={sidebarWidth} />

        {/* MAIN CONTENT */}
        <main style={{ flex: 1, padding: "20px", marginTop: 64 }}>
          {children}
        </main>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
