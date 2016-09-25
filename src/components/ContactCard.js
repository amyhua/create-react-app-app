import React, { Component, PropTypes } from 'react';

class ContactCard extends Component {
  render() {
    return (
      <div className="ContactCard" >
        <h1>{this.props.contactName}</h1>
        <h3>{this.props.mobileNumber}</h3>
        <h3>{this.props.workNumber}</h3>
        <h3>{this.props.email}</h3>
      </div>
    );
  }
};

ContactCard.propTypes = {
  contactName: PropTypes.string.isRequired,
  mobileNumber: PropTypes.string.isRequired,
  workNumber: PropTypes.string,
  email: PropTypes.string.isRequired
};

export default ContactCard;