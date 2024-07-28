import { LeftSidebar, RightSidebar, ListOfFeeds } from "../components";

const HomePage = () => {
  return (
    <div className="flex min-h-screen">
      <LeftSidebar />
      <main className="flex-1 ">
        <ListOfFeeds />
      </main>
      <RightSidebar />
    </div>
  );
};
export default HomePage;
