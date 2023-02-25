import CategorieButton from '../components/CategorieButton';
import EventCard from '../components/EventCard';
import MainButton from '../components/MainButton';
import SearchBar from '../components/SearchBar';

export default function Home() {
  return (
    <div className="bg-red-200 home__page">
      <h2>HOME</h2>
      <SearchBar />
      <CategorieButton />
      <MainButton />
      <EventCard />
    </div>
  );
}
