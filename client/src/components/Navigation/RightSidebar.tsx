const RightSidebar = () => {
  return (
    <aside className="w-[40%] ">
      <div className="sticky top-[4rem]">
        <p className="text-2xl font-bold mb-4">Online Friends</p>
        <ul className="flex flex-col gap-5 ml-5">
          <li>
            <a href="">
              <div className=" w-[5rem] relative flex items-center justify-center">
                <img
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="w-[4rem] h-[4rem] rounded-full object-cover"
                />
                <span className="absolute top-[-0.5rem] right-0 rounded-full bg-green-500 w-[1.5rem] h-[1.5rem] border-2 border-white border-solid"></span>
              </div>
              <span>Safak Kolugala</span>
            </a>
          </li>
          <li>
            <a href="">
              <div className=" w-[5rem] relative flex items-center justify-center">
                <img
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="w-[4rem] h-[4rem] rounded-full object-cover"
                />
                <span className="absolute top-[-0.5rem] right-0 rounded-full bg-green-500 w-[1.5rem] h-[1.5rem] border-2 border-white border-solid"></span>
              </div>
              <span>Jenell Shrum</span>
            </a>
          </li>
          <li>
            <a href="">
              <div className=" w-[5rem] relative flex items-center justify-center">
                <img
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="w-[4rem] h-[4rem] rounded-full object-cover"
                />
                <span className="absolute top-[-0.5rem] right-0 rounded-full bg-green-500 w-[1.5rem] h-[1.5rem] border-2 border-white border-solid"></span>
              </div>
              <span>Alex Duren</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};
export default RightSidebar;
