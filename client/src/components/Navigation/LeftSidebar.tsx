import { Link } from "react-router-dom";

// tempData
import { menuLinks } from "../../utils/tempData";

const LeftSidebar = () => {
  return (
    <aside className="flex-1 ">
      <div className="sticky top-[5rem] ml-2 mt-5">
        <ul className="flex flex-col gap-5">
          {menuLinks?.map((link) => {
            const { id, icon, path, text } = link;
            return (
              <li key={id}>
                <Link to={path} className="flex items-center gap-3">
                  {icon}
                  <span>{text}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};
export default LeftSidebar;
