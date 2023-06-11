import React from 'react';
import css from './Section.module.css';
import PropTypes from 'prop-types';

class Section extends React.Component {
  render() {
    const { title, children } = this.props;
    return (
      <div className={css.section}>
        <h2>{title}</h2>
        {children}
      </div>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
