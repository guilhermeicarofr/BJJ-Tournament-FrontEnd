import { useQuery } from 'react-query';
import { getAllEvents } from '../services/eventsServices';

function EventsDashboard() {
  const { data, isFetching, isLoading, error,  } = useQuery("events", getAllEvents);

  console.log(data);

  return (
    <>
      {data.map(event => <h3>{event.name}</h3>)}
    </>
  );
}

export { EventsDashboard };
