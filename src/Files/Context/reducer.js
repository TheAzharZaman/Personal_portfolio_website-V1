import { tabNameToIndex } from "../utiils";

export const initialState = {
  activeViewSlug: "",
  activeTabIndex: undefined,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ACTIVE_VIEW_SLUG":
      return {
        ...state,
        activeViewSlug: action.slug,
      };
    case "SET_ACTIVE_TAB_INDEX":
      return {
        ...state,
        activeTabIndex: action.index,
      };
  }
};

export default reducer;
