const EventCard = () => {
  return (
    <article className="event__card">
      <div className="header__card">
        <img src="" alt="Artist Image" />
      </div>
      <div className="body__card">
        <h3>Concert #1</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo fugit
          obcaecati quos dignissimos amet impedit odit molestiae rem,{' '}
        </p>
      </div>
      <div className="footer__card">
        <a href="">Enlace de Destino</a>
        <div>
          <img src="" alt="" />
          <p>vte count</p>
        </div>
      </div>
    </article>
  );
};

export default EventCard;
