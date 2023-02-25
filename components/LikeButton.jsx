import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const LikeButton = () => {
  const [isLike, setIsLike] = useState(false);
  const Icons = isLike ? (
    <AiFillHeart className="text-3xl bg-pink-400 rounded-full p-1 border-2  border-white fill-pink-700" />
  ) : (
    <AiOutlineHeart className="text-3xl bg-slate-400 rounded-full p-1 border-2 border-white fill-white" />
  );
  const handleClickLike = (event) => {
    event.preventDefault();
    if (isLike == false) {
      setIsLike(true);
    } else {
      setIsLike(false);
    }
  };

  return (
    <button className="absolute -bottom-3 right-4" onClick={handleClickLike}>
      {Icons}
    </button>
  );
};

export default LikeButton;
