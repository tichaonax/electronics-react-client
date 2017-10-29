export var bandColorReducer = (state = '', action) => {
    switch (action.type) {
        case 'CHANGE_BAND_A_COLOR':
            return Object.assign({}, state, {
                bandAColor: Object.assign({}, state.bandAColor, {value: action.bandAColor})
            })
        case 'CHANGE_BAND_B_COLOR':
            return Object.assign({}, state, {
                bandBColor: Object.assign({}, state.bandBColor, {value: action.bandBColor})
            })
        case 'CHANGE_BAND_C_COLOR':
            return Object.assign({}, state, {
                bandCColor: Object.assign({}, state.bandCColor, {value: action.bandCColor})
            })
        case 'CHANGE_BAND_D_COLOR':
            return Object.assign({}, state, {
                bandDColor: Object.assign({}, state.bandDColor, {value: action.bandDColor})
            })
        default:
            return state;
    };
};