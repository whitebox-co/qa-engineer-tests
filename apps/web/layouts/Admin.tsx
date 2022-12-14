import AdminNavbar from "../components/AdminNavbar";
import Sidebar from "../components/Sidebar";
import HeaderStats from "../components/HeaderStats";
import FooterAdmin from "../components/FooterAdmin";

export default function Admin({ children }: {children: JSX.Element | JSX.Element[]}) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
