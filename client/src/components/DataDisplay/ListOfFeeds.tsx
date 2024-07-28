import Feed from "./Feed";

// temp data
import { feeds } from "../../utils/tempData";

const ListOfFeeds = () => {
  return (
    <div className="flex flex-col gap-10 mt-5">
      {feeds?.map((feed) => {
        const { id } = feed;
        return <Feed key={id} {...feed} />;
      })}
    </div>
  );
};
export default ListOfFeeds;
