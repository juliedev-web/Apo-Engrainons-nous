import React from 'react';

import './styles.scss';

export default function Seedslist() {
  return (
    <div className="seeds-container">
      <h2>Mes graines</h2>
      <section className="seeds-list">
        <article className="seed-card">
          <img src="" alt="" />
          <h3>Catégorie</h3>
          <p>salade</p>
          <h3>Nom de la variété</h3>
          <p>kloug</p>
          <h3>Description</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam vel nulla nesciunt ducimus quisquam quod perspiciatis laborum quaerat accusantium ea reprehenderit sunt, harum architecto alias cum error quam quis nam voluptatibus sed amet voluptate a. Beatae unde placeat voluptate hic esse ipsa reiciendis sapiente veniam doloribus nostrum? Quod, illo inventore!</p>
          <h3>Conseils</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam vel nulla nesciunt ducimus quisquam quod perspiciatis laborum quaerat accusantium ea reprehenderit sunt, harum architecto alias cum error quam quis nam voluptatibus sed amet voluptate a. Beatae unde placeat voluptate hic esse ipsa reiciendis sapiente veniam doloribus nostrum? Quod, illo inventore!</p>
        </article>
      </section>
    </div>
  );
}
