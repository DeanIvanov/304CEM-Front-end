import React from 'react';
import PropTypes from 'prop-types';



export class SingleAdd extends React.Component {
    render() {
        return (
            <div style={{backgroundColor: '#D1D0CE', padding: '15px', borderBottom: '2px #000 groove'}}>
                <p>Title: {this.props.ad.title}</p>
                <p>Price: {this.props.ad.price}</p>
                <p>Condition: {this.props.ad.condition}</p>
                <p>Location(city): {this.props.ad.city}</p>
                <p>Features: {this.props.ad.features}</p>
                <p>Description: {this.props.ad.description}</p>
            </div>
        )
    }
}

SingleAdd.propTypes = {
    ads: PropTypes.object.isRequired
}

export default SingleAdd;
