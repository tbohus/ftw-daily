import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';

import { NamedLink } from '../../components';

import css from './SectionHowItWorks.module.css';



const SectionHowItWorks = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);
  return (
	
	
	
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionHowItWorks.titleLineOne" />
      </div>
	  
      <div className={css.steps}>
        <div className={css.step}>
          <div className={css.label}>1.krok</div>
          <h3 className={css.stepTitle}>
            <FormattedMessage id="SectionHowItWorks.part1Title" />
          </h3>
          <p>
            <FormattedMessage id="SectionHowItWorks.part1Text" />
          </p>
        </div>

        <div className={css.step}>
          <div className={css.label}>2.krok</div>
          <h3 className={css.stepTitle}>
            <FormattedMessage id="SectionHowItWorks.part2Title" />
          </h3>
          <p>
            <FormattedMessage id="SectionHowItWorks.part2Text" />
          </p>
        </div>

        <div className={css.step}>
          <div className={css.label}>3.krok</div>
          <h3 className={css.stepTitle}>
            <FormattedMessage id="SectionHowItWorks.part3Title" />
          </h3>
          <p>
            <FormattedMessage id="SectionHowItWorks.part3Text" />
          </p>
        </div>
      </div>
      
      <div className={css.howLink}>
        <a href={"/ako-to-funguje"}><FormattedMessage id="SectionHowItWorks.linkReadMore" /></a>
      </div>
      
      	

      
    </div>
  );
};

SectionHowItWorks.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionHowItWorks.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionHowItWorks;
