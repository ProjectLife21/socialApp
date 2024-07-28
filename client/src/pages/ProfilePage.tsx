import { ListOfFeeds, Share } from "../components";

const ProfilePage = () => {
  return (
    <div className="flex-1 ">
      <header className="flex flex-col items-center justify-center mt-5 bg-orange-50">
        <img
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          alt=""
          className="border-4 border-solid border-violet-700 rounded-full w-[10rem]"
        />
        <h4 className="text-2xl font-bold mt-2 mb-2">Safak Kocaoglu</h4>
        <p>Hello my friends!</p>
      </header>
      <main className="lg:flex">
        <div className="w-[70%]">
          <Share />
          <ListOfFeeds />
        </div>
        <div className="lg:w-[30%] flex flex-col gap-5  ">
          <div>
            <h4 className="font-bold">User Information</h4>
            <div className="grid grid-cols-2">
              <p>City:</p>
              <p>New York</p>
            </div>
            <div className="grid grid-cols-2">
              <p>From:</p>
              <p>Madrid</p>
            </div>
            <div className="grid grid-cols-2">
              <p>Relationship:</p>
              <p>Single</p>
            </div>
          </div>
          <div>
            <h4 className="font-bold">User friends</h4>
          </div>
        </div>
      </main>
    </div>
  );
};
export default ProfilePage;
