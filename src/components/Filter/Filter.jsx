import PropTypes from 'prop-types';
import { StyledLabel } from './Filter.styled';

const Filter = ({ onFilterContacts }) => {
  return (
    <div>
      <StyledLabel htmlFor="">
        <span>Filter by name:</span>
        <input type="text" placeholder="name" onChange={onFilterContacts} />
      </StyledLabel>
    </div>
  );
};

export default Filter;

Filter.propTypes = { onFilterContacts: PropTypes.func };
