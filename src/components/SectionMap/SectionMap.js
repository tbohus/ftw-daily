import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';

import { NamedLink } from '../../components';

import css from './SectionMap.module.css';




const SectionMap = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);
  return (
	
	
	
    <div className={classes}>

      <div className={css.title}>
        <FormattedMessage id="SectionMap.titleLineOne" />
      </div>
      
	  <div className={css.bigMap}><iframe height="100" src="https://map.okolo.io/map.html"></iframe></div>
	  
    </div>
	
	    
    
    
  );
};

SectionMap.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionMap.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionMap;
