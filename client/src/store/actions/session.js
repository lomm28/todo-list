import { successAction, START_SESSION } from '../types';
// eslint-disable-next-line import/prefer-default-export
export const startSession = () => {
  return {
    type: successAction(START_SESSION),
  };
};
