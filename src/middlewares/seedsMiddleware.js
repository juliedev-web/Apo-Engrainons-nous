import axios from 'axios';

const seedsMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case 'GET_LIST_PAGE': {
      const options = {
        method: 'GET',
        url: `https://engrainonsnous.herokuapp.com/paginate/seed/${action.pageNumber * 12}`,
      };

      axios(options).then((response) => {
        store.dispatch({ type: 'GETTING_LIST_SUCCESS', data: response.data });
      }).catch((error) => {
        console.error(error);
      });
    }
      break;

    case 'GETTING_CATEGORY': {
      const options = {
        method: 'GET',
        url: 'https://engrainonsnous.herokuapp.com/category',
      };
      axios(options).then((response) => {
        store.dispatch({ type: 'GETTING_CATEGORY_SUCCESS', data: response.data.result });
      }).catch((error) => {
        console.error(error);
      });
    }
      break;

    case 'GET_CATEGORY_FILTERED': {
      if (action.categoryId === 'categories') {
        store.dispatch({ type: 'GETTING_LIST' });
        return;
      }

      const options = {
        method: 'GET',
        url: `https://engrainonsnous.herokuapp.com/category/${action.categoryId}`,
      };
      next(action);
      axios(options).then((response) => {
        store.dispatch({ type: 'GETTING_CATEGORY_FILTERED_SUCCESS', data: response.data.result });
      }).catch((error) => {
        console.error(error);
      });
    }
      break;

    case 'GETTING_ONE_SEED': {
      const options = {
        method: 'GET',
        url: `https://engrainonsnous.herokuapp.com/seed/${action.id}`,
      };
      axios(options).then((response) => {
        store.dispatch({ type: 'GETTING_ONE_SEED_SUCCESS', data: response.data.result[0] });
      });
    }

      break;

    case 'ON_SUBMIT_SHARED_SEED': {
      const state = store.getState();

      const options = {
        method: 'POST',
        url: 'https://engrainonsnous.herokuapp.com/create/seed',
        data: {
          user_id: state.user.profil.id,
          variety_name: state.user.varietyInputValue,
          category_id: state.seeds.selectedNewSeedCategory,
          description: state.user.textAreaDetailValue,
          advice: state.user.textAreaAdviceValue,
        },
      };
      axios(options).then((response) => {
        console.log(response);
        store.dispatch({ type: 'ON_SUBMIT_SHARED_SEED_SUCCESS' });
      }).catch((error) => {
        console.error(error);
      });
    }
      break;

    case 'GET_USER_SEEDS_LIST': {
      const state = store.getState();
      const options = {
        method: 'GET',
        url: `https://engrainonsnous.herokuapp.com/user/seedlist/${state.user.profil.id}`,
      };

      axios(options).then((response) => {
        console.log(response.data);
        store.dispatch({ type: 'GET_USER_SEEDS_LIST_SUCCESS', list: response.data.seed });
      }).catch((error) => {
        console.error(error);
      });
    }
      break;

    default:
      next(action);
  }
};

export default seedsMiddleWare;
