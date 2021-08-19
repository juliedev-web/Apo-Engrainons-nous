import React from 'react';

import CategoriesFilter from 'src/components/Filters/CategoriesFilter';

import './styles.scss';

import adviceData from 'src/data/conseils';
import detailData from 'src/data/detail';

const FormShareSeed = () => (
  <div className="form-seed">
    <h2>Partagez vos graines</h2>
    <form action="#">
      <div className="fields-zone">
        <CategoriesFilter />
        <input className="input" placeholder="Nom de votre graine" type="text" name="seed_name" />
        <textarea className="description" placeholder={detailData} name="description" cols="100" rows="20" />
        <textarea className="conseil" placeholder={adviceData} name="advice" cols="100" rows="20" />
      </div>
      <button type="button">Valider</button>
    </form>
    <div className="fake-footer" />
  </div>
);

export default FormShareSeed;
