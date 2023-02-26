import { AiOutlineUser } from 'react-icons/ai';
import LikeButton from '../components/LikeButton';
import jsonInfo from '../lib/elementTest.json';

const EventCard = () => {
  return (
    <section className="flex flex-wrap items-center justify-center">
      {jsonInfo.data.map((data, i) => (
        <article
          className="max-w-xs bg-gray-100 rounded-2xl m-2 max-h-fit overflow-hidden shadow-xl"
          key={i}
        >
          <article className="card__header relative">
            <picture>
              <img src={data.img} alt="Imagen del concierto" />
            </picture>
            <LikeButton />
          </article>
          <div className="p-1">
            <article className="card__body">
              <h2 className="text-2xl p-1 font-bold">{data.concert}</h2>
              <p className="max-w-xs p-1">{data.description}</p>
            </article>
            <article className="p-2">
              <a href={data.url}>Ir al Concierto</a>
              <div className="flex flex-row items-center gap-x-1">
                <AiOutlineUser />
                <h3>{data.views} votos</h3>
              </div>
            </article>
          </div>
        </article>
      ))}
    </section>
  );
};

export default EventCard;
