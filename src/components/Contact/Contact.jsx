import PropTypes from 'prop-types';

const Contact = ({ contact, onRemoveContact }) => {
  return (
    <>
      👨🏻‍🦱 {contact.name}: {contact.number}
      <button
        onClick={() => {
          onRemoveContact(contact.name);
        }}
        type="button"
      >
        Remove contact
      </button>
    </>
  );
};

export default Contact;

Contact.propTypes = {
  contact: PropTypes.object,
};
