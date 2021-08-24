/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import './styles.scss';

const MenuModal = ({ menuIsOpen }) => {
  console.log('test');
  return (
    <div className={`menu-modal ${menuIsOpen && 'isOpen'}`}>
      <div className="menu-modal__links-container">
        <Link to="/" className="menu-modal__links-container__link">Accueil</Link>
        <Link to="/partager-une-graine" className="menu-modal__links-container__link">Partager une graine</Link>
        <Link to="/connexion" className="menu-modal__links-container__link">Connexion/Inscription</Link>
        <Link to="/equipe" className="menu-modal__links-container__link">L'équipe</Link>
        <Link to="/profil" className="menu-modal__links-container__link">Profil</Link>
        <Link to="#" className="menu-modal__links-container__link">Déconnexion</Link>
      </div>
    </div>
  );
};

MenuModal.propTypes = {
  menuIsOpen: PropTypes.bool.isRequired,
};

export default MenuModal;
