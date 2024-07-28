import { LeftSidebar, RightSidebar } from "../components";

const HomePage = () => {
  return (
    <div className="flex min-h-screen">
      <LeftSidebar />
      <main className="flex-1 bg-green-400 h-[200vh]">
        <h1>Main</h1>
      </main>
      <RightSidebar />
    </div>
  );
};
export default HomePage;
