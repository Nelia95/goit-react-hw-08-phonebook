import PropTypes from 'prop-types';
import Style from './Section.module.css';

const Section = ({ title, children }) => (
  <div className={Style.section}>
    <h2 className={Style.sectionTitle}>{title}</h2>
    {children}
  </div>
);

Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default Section;
