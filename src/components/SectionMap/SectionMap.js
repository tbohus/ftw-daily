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
      
<<<<<<< HEAD
	  <div className={css.bigMap}><iframe height="100" src="http://map.1155.sk/map.html"></iframe></div>
=======
	  <div className={css.bigMap}><iframe height="100" src="https://map.1155.sk/map.html"></iframe></div>
>>>>>>> f0c6da720bb73a5e738a9e1c1f6f592ea43660fb
	  
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
