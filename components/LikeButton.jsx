import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const LikeButton = () => {
  const [isLike, setIsLike] = useState(false);
  const Icons = isLike ? (
    <AiFillHeart className="like__icon" />
  ) : (
    <AiOutlineHeart className="unlike__icon" />
  );
  const handleClickLike = (event) => {
    event.preventDefault();
    if (isLike == false) {
      setIsLike(true);
    } else {
      setIsLike(false);
    }
  };

  return <button onClick={handleClickLike}>{Icons}</button>;
};

export default LikeButton;
