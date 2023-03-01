import PropTypes from 'prop-types';
import { List, ListItem, DelButton } from './Contacts.styled';

export const Contacts = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(({ name, id, number }) => {
        return (
          <ListItem key={id}>
            <span>{name}:</span>
            <span>{number}</span>
            <DelButton onClick={() => onDelete(id)}>Delete</DelButton>
          </ListItem>
        );
      })}
    </List>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
