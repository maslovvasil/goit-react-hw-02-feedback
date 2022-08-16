import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({
  options,
  feedbackCategories,
  total,
  positivePercentage,
}) => (
  <>
    <ul>
      {feedbackCategories.map(item => {
        return (
          <li className={css.statisticsItem} key={item}>
            {item}: {options[item]}
          </li>
        );
      })}
      <li className={css.statisticsItem}>Total: {total}</li>
      <li className={css.statisticsItem}>
        Positive feedback: {positivePercentage}%
      </li>
    </ul>
  </>
);

Statistics.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  feedbackCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;