import { RightSidebar, ListOfFeeds, Share } from "../components";

const HomePage = () => {
  return (
    <div className="flex-1 flex min-h-screen ">
      <main className="w-[100%]">
        <Share />
        <ListOfFeeds />
      </main>
      <RightSidebar />
    </div>
  );
};
export default HomePage;
