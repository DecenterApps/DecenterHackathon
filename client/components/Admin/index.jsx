import React from 'react';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import AdminHeader from '../AdminHeader/index.jsx';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import { toggleModal } from '../../actions/modalsActions';

require('./_index.scss');

const Admin = ({ $toggleModal, location, children }) => (
  <div>
    <AdminHeader />
    <div className="container white">
      <div className="tab-wrapper">
        <div className="left-section">
          <a href="#/admin/teams" className={location.pathname === '/admin/' || location.pathname === '/admin/teams' ? 'active' : ''}>Timovi</a>
          <a href="#/admin/sponsors" className={location.pathname === '/admin/sponsors' ? 'active' : ''}>Sponzori</a>
          <a href="#/admin/judges" className={location.pathname === '/admin/judges' ? 'active' : ''}>Sudije</a>
        </div>
        <div
          role="button"
          tabIndex="0"
          className="right-section"
          onClick={() => $toggleModal(location.pathname, true)}
        >
          Dodaj
        </div>
      </div>
      { children }
      <ModalWrapper />
    </div>
  </div>
);

Admin.propTypes = {
  children: PropTypes.object.isRequired,
  $toggleModal: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string
  }).isRequired,
};

const mapStateToProps = (state) => ({
  location: state.routing.locationBeforeTransitions
});

export default connect(mapStateToProps, { $toggleModal: toggleModal })(Admin);

