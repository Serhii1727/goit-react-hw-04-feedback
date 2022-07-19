//import PropTypes from 'prop-types';
import { Feedback, ButtonsContainer, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <Feedback className="Feedback">
            <ButtonsContainer className='Buttons-container'>
                {options.map(nameKey => {
                    return <Button key={nameKey} className={`button-${nameKey}`} value={nameKey} type='butoon' onClick={onLeaveFeedback}>{nameKey}</Button>
                })}
            </ButtonsContainer>

        </Feedback>
    )
}

export default FeedbackOptions;

// FeedbackOptions.propTypes = {
//     onControlGood: PropTypes.func,
//     onControlNeutural: PropTypes.func,
//     onControlBad: PropTypes.func,
// }