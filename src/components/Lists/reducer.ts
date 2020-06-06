import {
  ListActionTypes,
  ListsState,
  ListActions,
  CreateListAction,
  DeleteListAction,
  ChangeListAction,
} from './types';
import { Reducer } from 'react';
import { BoardActionTypes, DeleteBoardAction } from 'components/Boards/types';
import {
  CardActionTypes,
  CreateCardAction,
  DeleteCardAction,
} from 'components/Cards/types';
const { CREATE_LIST, DELETE_LIST, CHANGE_LIST } = ListActionTypes;
const { CREATE_CARD, DELETE_CARD } = CardActionTypes;
const { DELETE_BOARD } = BoardActionTypes;

const initialState: ListsState = {};

const listReducer: Reducer<
  ListsState,
  ListActions | CreateCardAction | DeleteCardAction | DeleteBoardAction
> = (state = initialState, { type, payload }): ListsState => {
  switch (type) {
    case CREATE_LIST: {
      const { listId, title } = payload as CreateListAction['payload'];

      return {
        ...state,
        [listId]: { id: listId, title, cards: [] },
      };
    }

    case DELETE_LIST: {
      const { listId } = payload as DeleteListAction['payload'];

      const { [listId]: ignore, ...rest } = state;

      return {
        ...rest,
      };
    }

    case CHANGE_LIST: {
      const { listId, title } = payload as ChangeListAction['payload'];

      return {
        ...state,
        [listId]: { ...state[listId], title },
      };
    }

    case CREATE_CARD: {
      const { listId, cardId } = payload as CreateCardAction['payload'];

      const list = { ...state[listId] };
      list.cards = [...list.cards, cardId];

      return {
        ...state,
        [listId]: list,
      };
    }

    case DELETE_CARD: {
      const { listId, cardId } = payload as DeleteCardAction['payload'];

      const list = { ...state[listId] };
      list.cards = list.cards.filter(id => id !== cardId);

      return {
        ...state,
        [listId]: list,
      };
    }

    case DELETE_BOARD: {
      const { listsIds } = payload as DeleteBoardAction['payload'];

      const newState: ListsState = {};
      for (const prop in state) {
        if (state.hasOwnProperty(prop) && !listsIds.includes(prop)) {
          newState[prop] = state[prop];
        }
      }

      return newState;
    }

    default: {
      return state;
    }
  }
};

export default listReducer;
