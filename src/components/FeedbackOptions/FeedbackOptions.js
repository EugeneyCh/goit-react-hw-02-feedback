import React from 'react';
import css from './FeedbackOptions.module.css';

class FeedbackOptions extends React.Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    console.log(options);

    return (
      <div className={css.buttonGroup}>
        {Object.keys(options).map(name => (
          <button
            key={name}
            className={css.buttonFeedback}
            name={name}
            onClick={onLeaveFeedback}
          >
            {name}
          </button>
        ))}
      </div>
    );
  }
}
export default FeedbackOptions;
