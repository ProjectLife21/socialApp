const Share = () => {
  return (
    <div className="mb-5 mt-5">
      <div className="flex items-center gap-5">
        <img
          src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="w-[4rem] h-[4rem] object-cover rounded-full"
        />
        <input
          type="text"
          placeholder="What's in your mind Safak?"
          className="flex-1"
        />
      </div>
      <hr />
      <div>
        <button className="bg-green-700 text-white rounded-md px-2 py-1 mt-4 transition-all hover:bg-green-400">
          Share
        </button>
      </div>
    </div>
  );
};
export default Share;
