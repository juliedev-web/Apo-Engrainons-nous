import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { formatDate } from 'src/selectors/seeds';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEdit, faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';

import './styles.scss';

export default function MySeeds({
  myList,
  getUserSeedsList,
  handleDeleteSeedClickConfirm,
  confirmDeleteSeedMsg,
  handleDeleteSeedClick,
  toBeDeletedSeedId,
  closeDeleteConfirmButton,
}) {
  const history = useHistory();
  useEffect(() => {
    console.log('test my graines');
    getUserSeedsList();
  }, []);
  return (
    <div className="my-seeds">
      <h1>Mes graines</h1>
      {myList[0] ? (
        <table className="my-seeds__list">
          <thead className="my-seeds__list__thead">
            <tr className="my-seeds__list__thead__row">
              <th className="my-seeds__list__thead__row__th">Catégorie</th>
              <th className="my-seeds__list__thead__row__th">Variété</th>
              <th className="my-seeds__list__thead__row__th">Date de création/mise à jour</th>
              <th className="my-seeds__list__thead__row__th">Editer</th>
              <th className="my-seeds__list__thead__row__th">Supprimer</th>
            </tr>
          </thead>
          <tbody className="my-seeds__list__tbody">
            {myList.map((seed) => (
              <tr className="my-seeds__list__tbody__row">
                <td className="my-seeds__list__tbody__row__td">{seed.category_name}</td>
                <td className="my-seeds__list__tbody__row__td">{seed.variety_name}</td>
                <td className="my-seeds__list__tbody__row__td">{formatDate(seed)}</td>
                <td className="my-seeds__list__tbody__row__td">
                  <FontAwesomeIcon
                    icon={faEdit}
                    className="faEdit"
                  />
                </td>
                <td className="my-seeds__list__tbody__row__td">
                  {
                    (confirmDeleteSeedMsg && toBeDeletedSeedId === seed.id) ? (
                      <button
                        className="btn-delete-one-seed"
                        type="button"
                        onClick={() => {
                          console.log('test');
                          handleDeleteSeedClickConfirm(seed.id);
                        }}
                      > {confirmDeleteSeedMsg}
                      </button>
                    )
                      : (
                        <FontAwesomeIcon
                          icon={faTrashAlt}
                          className="faTrashAlt"
                          onClick={() => {
                            handleDeleteSeedClick(seed.id);
                            setTimeout(() => {
                              closeDeleteConfirmButton();
                            }, 3000);
                          }}
                        />
                      )
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="no-seeds-message">Vous n'avez actuellement pas de graines en partage</p>
      )}
    </div>
  );
}
