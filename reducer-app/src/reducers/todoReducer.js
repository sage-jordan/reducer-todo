export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: '3892987589'
    },
    {
        item: 'Reducers project',
        completed: false,
        id: '4927483920'
    },
    {
        item: 'One on One Review',
        completed: false,
        id: '0275630234'
    }
];

export const todoReducer = (state, action) => {
    switch(action.type) {
        case "TOGGLE_EDITING": {
            return {
                ...state,
                editing: !editing.editing
            }
        }
        default:
        return state;
    }
}