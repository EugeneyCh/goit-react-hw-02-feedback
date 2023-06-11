import React from 'react';
import css from './FeedbackOptions.module.css';

class FeedbackOptions extends React.Component {
  // ({ onLeaveFeedback }) =>
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div className="css.buttonGroup">
        <button
          className="css.buttonFeedback"
          name="good"
          type="button"
          onClick={onLeaveFeedback}
        >
          Good
        </button>
        <button
          className="css.buttonFeedback"
          name="neutral"
          type="button"
          onClick={onLeaveFeedback}
        >
          Neutral
        </button>
        <button
          className="css.buttonFeedback"
          name="bad"
          type="button"
          onClick={onLeaveFeedback}
        >
          Bad
        </button>
      </div>
    );
  }
}
export default FeedbackOptions;
