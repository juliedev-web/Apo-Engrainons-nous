// Action types
export const GETTING_ONE_SEED = 'GETTING_ONE_SEED';

// Action creators
export const gettingOneSeed = (id) => ({
  type: GETTING_ONE_SEED,
  id,
});

export const toggleMail = () => ({
  type: 'ON_TOGGLE_CLICK_MAIL_OWNER',
});

export const hideMailAction = () => ({
  type: 'HIDE_MAIL',
});

export const toggleEditSeed = () => ({
  type: 'ON_TOGGLE_EDIT_SEED',
});
