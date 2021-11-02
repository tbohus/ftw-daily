import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.module.css';

import liptovImage from './images/location_liptov.jpg';
import zilinaImage from './images/location_zilina.jpg';
import tatryImage from './images/location_tatry.jpg';
import bystricaImage from './images/location_bystrica.jpg';
import kosiceImage from './images/location_kosice.jpg';
import bratislavaImage from './images/location_bratislava.jpg';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionLocations.title" />
      </div>
      <div className={css.locations}>
        {locationLink(
          'Liptov',
          liptovImage,
          '?address=Liptovský%20Mikuláš%2C%20Žilinský%20kraj%2C%20Slovensko&bounds=49.51858473%2C20.06001372%2C48.67709461%2C19.03949742'
        )}
        {locationLink(
          'Žilina',
          zilinaImage,
          '?address=Žilina%2C%20Žilinský%20kraj%2C%20Slovensko&bounds=49.46489081%2C19.02040787%2C49.00199939%2C18.45751018'
        )} 
        {locationLink(
          'Tatry',
          tatryImage,
          '?address=Vysoké%20Tatry%2C%20Prešovský%20kraj%2C%20Slovensko&bounds=49.58025143%2C20.47471541%2C48.76459178%2C19.48403741'
        )} 
      
        {locationLink(
          'Fatra',
          bystricaImage,
          '?address=Banská%20Bystrica%2C%20Banskobystrický%20kraj%2C%20Slovensko&bounds=48.804184%2C19.265296%2C48.673598%2C18.99'
        )}
        
        
      </div>
      
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
