import Contact from 'components/Contact/Contact';
import PropTypes from 'prop-types';
import { StyledLi, StyledOl } from './ContactList.styled';

const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <div>
      <StyledOl>
        {contacts.map(contact => {
          return (
            <StyledLi key={contact.name}>
              <Contact contact={contact} onRemoveContact={onRemoveContact} />
            </StyledLi>
          );
        })}
      </StyledOl>
    </div>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array,
  onRemoveContact: PropTypes.func,
};
