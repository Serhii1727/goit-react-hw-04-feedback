import PropTypes from 'prop-types';
import { Feedback, ButtonsContainer, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback, }) => {
    return (
        <Feedback className="Feedback">
            <ButtonsContainer className='Buttons-container'>
                {options.map(name => {
                    return <Button key={name} className={`button-${name}`} value={name} type='butoon' onClick={onLeaveFeedback}>{name}</Button>
                })}
            </ButtonsContainer>
        </Feedback>
    )
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func,
}