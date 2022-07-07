import PropTypes from 'prop-types';
import { StatisticsContainer, StatisticsTitle } from './Statistics.styled';

const Statistics = ({ title, statisticsGood, statisticsNeutral, statisticsBad, totalFeedback, positiveFeedbackPercentage }) => {
    return (
        <StatisticsContainer className="Statistics-container">
            <StatisticsTitle className='Title'>{title}</StatisticsTitle>
            <div>
                <p>Good: {statisticsGood}</p>
                <p>Neutral: {statisticsNeutral}</p>
                <p>Bad: {statisticsBad}</p>
                <p>Total: {totalFeedback()}</p>
                <p>Positive feedback: {positiveFeedbackPercentage()}%</p>
            </div>

        </StatisticsContainer>
    )
}

export default Statistics;

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    statisticsGood: PropTypes.number.isRequired,
    statisticsNeutral: PropTypes.number.isRequired,
    statisticsBad: PropTypes.number.isRequired,
    totalFeedback: PropTypes.func.isRequired,
    positiveFeedbackPercentage: PropTypes.func.isRequired,
}