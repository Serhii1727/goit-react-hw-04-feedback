import PropTypes from 'prop-types';
import { Container } from './Notification.styled';

const Notification = ({ message }) => {
    return <Container className='Notification-container'>
        <p>{message}</p>
    </Container>
}

export default Notification;

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}