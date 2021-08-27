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
      {/* <section className="seeds-list">
         <ul className="list list-menu">
          <li className="list-menu_item">Catégorie</li>
          <li className="list-menu_item">Variété</li>
        </ul>
        <ul className="detail-list">
          <li className="detail-list_item detail-category">
            <NavLink
              className="seed-category"
              to="/detail-graine/1"
              exact
              activeClassName="seed-category--active"
            >
              Courgette
            </NavLink>
          </li>
          <li className="detail-list_item detail-variety">
            <NavLink
              className="seed-variety"
              to="/detail-graine/1"
              exact
              activeClassName="seed-category--active"
            >
              de Laval
            </NavLink>
          </li>
          </ul>
          </section> */}

    </div>
  );
}
