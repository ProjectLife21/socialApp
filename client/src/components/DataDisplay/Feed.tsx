const Feed = ({
  id,
  author: { name, img: authorImg },
  comments,
  desc,
  date,
  img,
  likes,
}) => {
  return (
    <div>
      <header className="flex gap-2 items-center">
        <img src={authorImg} className="w-[3rem] h-[3rem] rounded-full" />
        <p className="text-[0.75rem]">{name}</p>
        <small>{date}</small>
      </header>
      <main>
        <p>{desc}</p>
        <img src={img} alt="" className="w-full h-[15rem] object-cover" />
      </main>
      <footer className="flex justify-between mt-2">
        <p>{likes} people like it</p>
        <p>{comments}</p>
      </footer>
    </div>
  );
};
export default Feed;
