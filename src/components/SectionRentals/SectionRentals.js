import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';

import { NamedLink } from '../../components';

import css from './SectionRentals.module.css';



const SectionRentals = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);
  return (
	
	<div className={classes}>
      
	  
      <div className={css.rentalContainer}>

        <div className={css.rentaldesc}>
          <h2 className={css.title}>
            <FormattedMessage id="SectionRental.title" />
          </h2>
          <p>
            <FormattedMessage id="SectionRental.text" />
          </p>
          
          <NamedLink
          name="SearchPage"
          to={{
            search:
              'address=Slovensko&bounds=49.6138019844419%2C22.5664559475253%2C47.7312160010548%2C16.8331860011003',
          }}
          className={css.rentalButton}
        >
          <FormattedMessage id="SectionRental.button" />
        </NamedLink>
        </div>

      </div>
     
    </div>

	

  );
};

SectionRentals.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionRentals.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionRentals;
