import jsonInfo from '../lib/elementTest.json';

const EventCard = () => {
  return (
    <article className="">
      {jsonInfo.data.map((data, i) => (
        <section
          className="max-w-xs bg-gray-100 rounded-2xl m-2 max-h-fit overflow-hidden"
          key={i}
        >
          <article className="card__header">
            <img src={data.img} alt="Imagen del concierto" />
          </article>
          <article className="card__body">
            <h2 className="text-2xl">{data.concert}</h2>
            <p className="max-w-xs">{data.description}</p>
          </article>
          <article className="card__b">
            <a href={data.url}>Ir al Concierto</a>
            <h3>Views {data.views}</h3>
          </article>
        </section>
      ))}
    </article>
  );
};

export default EventCard;
