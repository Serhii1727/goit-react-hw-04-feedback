import PropTypes from 'prop-types';
import { Feedback, ButtonsContainer } from './FeedbackOptions.styled';

const FeedbackOptions = ({ onControlGood, onControlNeutural, onControlBad }) => {
    return (
        <Feedback className="Feedback">
            <ButtonsContainer className='Buttons-container'>
                <button className='button-good' type='butoon' onClick={onControlGood}>Good</button>
                <button className='button-neutural' type='butoon' onClick={onControlNeutural}>Neutural</button>
                <button className='button-bad' type='butoon' onClick={onControlBad}>Bad</button>
            </ButtonsContainer>

        </Feedback>
    )
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    onControlGood: PropTypes.func,
    onControlNeutural: PropTypes.func,
    onControlBad: PropTypes.func,
}