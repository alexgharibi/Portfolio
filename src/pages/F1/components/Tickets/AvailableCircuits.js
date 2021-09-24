import Card from "../UI/Card";
import classes from "./AvailableCircuits.module.css";
import TicketItem from "./TicketItem/TicketItem";

const DUMMY_TICKETS = [
  {
    id: "m1",
    name: "Japanese GP",
    description: "Suzuka",
    price: 22.99,
  },
  {
    id: "m2",
    name: "United states GP",
    description: "Austin",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Italian GP",
    description: "Monza",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Russian GP",
    description: "Sochi",
    price: 18.99,
  },
];

const AvailableCircuits = () => {
  const ticketList = DUMMY_TICKETS.map((ticket) => (
    <TicketItem
      key={ticket.id}
      name={ticket.name}
      description={ticket.description}
      price={ticket.price}
    />
  ));

  return (
    <section className={classes.tickets}>
      <Card>
        <ul>{ticketList}</ul>
      </Card>
    </section>
  );
};

export default AvailableCircuits;
