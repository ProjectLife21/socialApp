// components
import { Navbar, LeftSidebar } from "../components";

type TMainLayout = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: TMainLayout) => {
  return (
    <>
      <Navbar />
      <main className="flex">
        <LeftSidebar />
        {children}
      </main>
    </>
  );
};
export default MainLayout;
