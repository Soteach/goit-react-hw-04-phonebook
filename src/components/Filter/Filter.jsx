import PropTypes from 'prop-types';
import {
  Input,
  Label,
  Container,
} from 'components/ContactForm/ContactForm.styled';

export const Filter = ({ filterValue, onValueChange }) => {
  return (
    <Container>
      <Label htmlFor="">
        Find contact by name
        <Input type="text" value={filterValue} onChange={onValueChange} />
      </Label>
    </Container>
  );
};

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
};
