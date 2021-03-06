import { v4 } from 'uuid';
import {
  ListActionTypes,
  CreateListAction,
  ChangeListAction,
  DeleteListThunk,
  MoveCardAction,
} from './types';
const { CREATE_LIST, DELETE_LIST, CHANGE_LIST, MOVE_CARD } = ListActionTypes;

export const createList = (
  boardId: string,
  title: string
): CreateListAction => ({
  type: CREATE_LIST,
  payload: { boardId, listId: v4(), title },
});

export const deleteList: DeleteListThunk = (
  boardId: string,
  listId: string
) => (dispatch, getState) => {
  const { lists } = getState();
  const cardsIds = lists[listId].cards;

  return dispatch({
    type: DELETE_LIST,
    payload: {
      boardId,
      listId,
      cardsIds,
    },
  });
};

export const changeList = (
  listId: string,
  title: string
): ChangeListAction => ({
  type: CHANGE_LIST,
  payload: { listId, title },
});

export const moveCard = (
  fromListId: string,
  toListId: string,
  fromIndex: number,
  toIndex: number
): MoveCardAction => ({
  type: MOVE_CARD,
  payload: {
    fromListId,
    toListId,
    fromIndex,
    toIndex,
  },
});
