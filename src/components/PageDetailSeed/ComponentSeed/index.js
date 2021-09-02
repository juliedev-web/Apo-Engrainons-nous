/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.scss';

import FormShareSeed from 'src/containers/FormShareSeed';

const ComponentSeed = ({
  seed,
  getOneSeed,
  toggleMail,
  showMail,
  isLogged,
  hideMail,
  toggleEditSeed,
  editSeed,
  userId,
  contact,
  copytoClipBoard,
  copyMailToClipBoardMsg,
  clearMessageCopy,
}) => {
  useEffect(() => {
    getOneSeed();
    return () => {
      hideMail();
    };
  }, [editSeed]);

  return (
    editSeed ? (
      <>
        <FormShareSeed from="editSeedForm" title="Modifiez les informations de votre graine" />
      </>
    ) : (
      <div className="container-seed">
        <div className="top">
          <div className="imgCat">
            <img src={seed.category_img} alt="legume" />
          </div>
          <div className="descriptionVariety">
            <h4>Catégorie : </h4>
            <p>{seed.category_name}</p>
            <h4>Nom de la variété : </h4>
            <p>{seed.variety_name}</p>
            <h2>Description : </h2>
            <p>
              {seed.description}
            </p>
            <h4>Conseils :</h4>
            <p>
              {seed.conseil}
            </p>
          </div>
        </div>
        {isLogged ? (
          <div>
            {(seed.user_id === userId) && (
              <>
                <button type="button" className="btn_modify_seed" onClick={toggleEditSeed}>Modifier ma graine</button>
                {/* <button type="button"> */}
                <Link
                  className="myseeds"
                  to="/mesgraines"
                >
                  Mes graines
                </Link>
                {/* </button> */}
              </>
            )}
            {(seed.user_id !== userId) && (
              <div className="buttons-detail-seed">
                <p
                  className="email-contact"
                  onClick={() => {
                    navigator.clipboard.writeText(seed.email_user).then(() => {
                      copytoClipBoard();
                    });

                    setTimeout(() => {
                      clearMessageCopy();
                    }, 2000);

                    toggleMail();
                  }}
                > {showMail ? seed.email_user : 'Email du propriétaire'}
                </p>

                <Link
                  className="tchatMySeeds"
                  to="/tchat"
                  onClick={() => {
                    contact();
                  }}
                >Envoyer un message
                </Link>
                {copyMailToClipBoardMsg && <p className="copy-clipboard-msg">{copyMailToClipBoardMsg}</p>}
              </div>

            )}
          </div>
        ) : (
          <button type="button" onClick={toggleMail}> {showMail ? 'Connectez-vous pour voir l\'email' : 'Contacter le propriétaire'}</button>
        )}
      </div>
    )
  );
};

ComponentSeed.propTypes = {
  seed: PropTypes.object.isRequired,
  getOneSeed: PropTypes.func.isRequired,
  toggleMail: PropTypes.func.isRequired,
  showMail: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
  hideMail: PropTypes.func.isRequired,
  toggleEditSeed: PropTypes.func.isRequired,
  editSeed: PropTypes.bool.isRequired,
  userId: PropTypes.number.isRequired,
  contact: PropTypes.string.isRequired,
};

export default ComponentSeed;
