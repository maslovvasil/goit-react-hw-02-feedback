import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ feedbackCategories, onLeaveFeedback }) => (
  <div className={css.buttonsContainer}>
    {feedbackCategories.map(item => (
      <button
        className={css.categoryButton}
        type="button"
        key={item}
        name={item}
        onClick={onLeaveFeedback}
      >
        {item}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  feedbackCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;