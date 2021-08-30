/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import './styles.scss';

const MenuModal = ({
  menuIsOpen, closeModal, isLogged, handleDisconnect,
}) => (
  <div className={`menu-modal ${menuIsOpen && 'isOpen'}`}>
    <div className="menu-modal__links-container">
      <Link onClick={closeModal} to="/" className="menu-modal__links-container__link">Accueil</Link>
      <Link onClick={closeModal} to="/partager-une-graine" className="menu-modal__links-container__link">Partager une graine</Link>

      {
          isLogged ? (
            <Link onClick={closeModal} to={isLogged ? '/compte' : '/connexion'} className="menu-modal__links-container__link">Profil</Link>
          ) : (
            <Link onClick={closeModal} to="/connexion" className="menu-modal__links-container__link">Connexion/Inscription</Link>
          )
        }

      <Link onClick={closeModal} to="/equipe" className="menu-modal__links-container__link">L'équipe</Link>
      {
          isLogged && (
            <Link
              to="/"
              className="menu-modal__links-container__link"
              onClick={() => {
                handleDisconnect();
                closeModal();
              }}
            >Déconnexion
            </Link>
          )
        }
    </div>
  </div>
);

MenuModal.propTypes = {
  menuIsOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  handleDisconnect: PropTypes.func.isRequired,
};

export default MenuModal;
