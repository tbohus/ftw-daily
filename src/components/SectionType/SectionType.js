import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionType.module.css';

import elektroImage from './images/type_elektro.jpg';
import trailImage from './images/type_trail.jpg';
import roadImage from './images/type_road.jpg';
import crossImage from './images/type_cross.jpg';
import cityImage from './images/type_city.jpg';


class TypeImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(TypeImage);

const typeLink = (name, image, searchQuery) => {
  const nameText = <span>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.type}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.typeImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionType.listingsInType"
          values={{ type: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionType = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionType.title" />
      </div>
      <div className={css.types}>
        {typeLink(
          'Elektrobicykel',
          elektroImage,
          '?pub_category=elektro&?address=Slovensko&bounds=49.6138019844419%2C22.5664559475253%2C47.7312160010548%2C16.8331860011003'
        )}
        
        {typeLink(
          'Trail',
          trailImage,
          '?pub_category=trail&?address=Slovensko&bounds=49.6138019844419%2C22.5664559475253%2C47.7312160010548%2C16.8331860011003&'
        )}
        
        {typeLink(
          'Cestný',
          roadImage,
          '?pub_category=road&?address=Slovensko&bounds=49.6138019844419%2C22.5664559475253%2C47.7312160010548%2C16.8331860011003'
        )}
        
        {typeLink(
          'Cross-country',
          crossImage,
          '?pub_category=cross&?address=Slovensko&bounds=49.6138019844419%2C22.5664559475253%2C47.7312160010548%2C16.8331860011003'
        )}
        
        {typeLink(
          'Mestský',
          cityImage,
          '?pub_category=city&?address=Slovensko&bounds=49.6138019844419%2C22.5664559475253%2C47.7312160010548%2C16.8331860011003'
        )}        
        
        
      </div>
      
    </div>
  );
};

SectionType.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionType.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionType;
