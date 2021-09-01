import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import PropTypes from 'prop-types';

import CategoriesFilter from 'src/containers/CategoriesFilter';

import './styles.scss';

import adviceData from 'src/data/conseils';
import detailData from 'src/data/detail';

const FormShareSeed = ({
  isLogged,
  varietyInputValue,
  handleInputValue,
  textAreaDetailValue,
  textAreaAdviceValue,
  handleOnSubmit,
  from,
  closeEditSeed,
  title,
  createSeedConfirmMsg,
  closeMessage,
  varietyInputValueEdit,
  textAreaDetailValueEdit,
  textAreaAdviceValueEdit,
  categorySeedValueEdit,
}) => {
  const history = useHistory();

  useEffect(() => () => {
    closeEditSeed();
  }, [createSeedConfirmMsg]);

  useEffect(() => {
    setTimeout(() => {
      closeMessage();
    }, 3000);
  }, [createSeedConfirmMsg]);
  return (
    <div className="form-seed">
      <h2>{title}</h2>

      {createSeedConfirmMsg && <p className={(createSeedConfirmMsg === 'Votre graine a bien été ajoutée !' || createSeedConfirmMsg === 'Les informations de votre graine ont bien été mises à jour !') ? 'confirm-seed-created-msg' : 'error-seed-create-msg'}>{createSeedConfirmMsg}</p>}

      <form onSubmit={(e) => {
        handleOnSubmit(e, from);
      }}
      >
        {
          from === 'editSeedForm'
            ? (
              <div className="fields-zone">
                <CategoriesFilter from="editSeedPage" categorySeedValueEdit={categorySeedValueEdit} />
                <input required className="input" placeholder="Nom de la variété" value={varietyInputValueEdit} onChange={(e) => handleInputValue(e.target.value, 'varietyInputValueEdit', from)} type="text" name="seed_name" />
                <textarea className="description" placeholder={detailData} name="description" cols="100" rows="20" value={textAreaDetailValueEdit} onChange={(e) => handleInputValue(e.target.value, 'textAreaDetailValueEdit', from)} />
                <textarea className="conseil" placeholder={adviceData} name="advice" cols="100" rows="20" value={textAreaAdviceValueEdit} onChange={(e) => handleInputValue(e.target.value, 'textAreaAdviceValueEdit', from)} />
              </div>
            )
            : (
              <div className="fields-zone">
                <CategoriesFilter from="sharedSeedPage" />
                <input required className="input" placeholder="Nom de la variété" value={varietyInputValue} onChange={(e) => handleInputValue(e.target.value, 'varietyInputValue', from)} type="text" name="seed_name" />
                <textarea className="description" placeholder={detailData} name="description" cols="100" rows="20" value={textAreaDetailValue} onChange={(e) => handleInputValue(e.target.value, 'textAreaDetailValue', from)} />
                <textarea className="conseil" placeholder={adviceData} name="advice" cols="100" rows="20" value={textAreaAdviceValue} onChange={(e) => handleInputValue(e.target.value, 'textAreaAdviceValue', from)} />
              </div>
            )
        }
        {isLogged ? (
          <>
            <button type="submit">Valider</button>
            {
              from === 'editSeedForm' && (
                <Link
                  className="cancelSeedModification"
                  to="/mesgraines"
                >
                  Annuler
                </Link>
              )
            }
          </>
        ) : (
          <Link className="link-to-connexion" to="/connexion">
            Pour partager vos graines, connectez-vous
            <span>se connecter</span>
          </Link>
        )}

      </form>

      {/* <div className="fake-footer" /> */}
    </div>
  );
};
FormShareSeed.propTypes = {
  from: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
  varietyInputValue: PropTypes.string.isRequired,
  handleInputValue: PropTypes.func.isRequired,
  textAreaDetailValue: PropTypes.string.isRequired,
  textAreaAdviceValue: PropTypes.string.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  closeEditSeed: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  createSeedConfirmMsg: PropTypes.string.isRequired,
  closeMessage: PropTypes.func.isRequired,
};

export default FormShareSeed;
