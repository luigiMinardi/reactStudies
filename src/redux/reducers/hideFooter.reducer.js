import { IS_HOME, NOT_HOME } from '../actions';

const initialSTate = {
    isHome: false
}

const checkIsHome = (state = initialSTate, action) => {
    switch (action.type) {
        case IS_HOME:
            return { isHome: true }
        case NOT_HOME:
            return { isHome: false }
        default:
            return state
    }
}

export default checkIsHome;