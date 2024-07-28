// components
import { Navbar } from "../components";

type TMainLayout = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: TMainLayout) => {
  return (
    <>
      <Navbar />
      {children}
      <h1>Footer</h1>
    </>
  );
};
export default MainLayout;
