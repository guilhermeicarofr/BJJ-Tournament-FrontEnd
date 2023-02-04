import { useParams } from 'react-router-dom';

function EventPage() {
  const { eventId } = useParams();



  return (
    <h1>Event {eventId}</h1>
  );
}

export { EventPage };
