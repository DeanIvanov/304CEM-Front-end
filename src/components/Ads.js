import React from 'react';
import AdItem from './SingleAd';
import PropTypes from 'prop-types';

class Ads extends React.Component {
    render() {
        return this.props.ads.map((ad) => (
            <AdItem key={ad.id} ad={ad}/>

        ));
    }
}

//PropTypes
Ads.propTypes = {
    ads: PropTypes.array.isRequired
}

export default Ads;