export const initialState = {
  activeView: "About",
  activeViewSlug: "about",
  activeTabIndex: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ACTIVE_VIEW":
      return {
        ...state,
        activeView: action.payload,
      };
    case "SET_ACTIVE_VIEW_SLUG":
      return {
        ...state,
        activeViewSlug: action.payload,
      };
    case "SET_ACTIVE_TAB_INDEX":
      return {
        ...state,
        activeTabIndex: action.payload,
      };
  }
};
