import classes from "./TicketItem.module.css";
import TicketItemForm from "./TicketItemForm";

const TicketItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.ticket}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <TicketItemForm />
      </div>
    </li>
  );
};

export default TicketItem;
