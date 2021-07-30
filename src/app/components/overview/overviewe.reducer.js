const defaultState = {
    news: [],
};

export default function overview(state = defaultState, action) {
    switch (action.type) {
        case "list": {
            return {
                ...state,
              news: []
            };
        }
        default:
            return state;
    }
}