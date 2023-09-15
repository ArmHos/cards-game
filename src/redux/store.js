import { createStore } from "redux";
// Importing images
import ace from "../assets/images/ace-T.png";
import jack from "../assets/images/jack2.png";
import king from "../assets/images/hearts-king.png";
import seven from "../assets/images/spades-seven.png";
import ten from "../assets/images/diamonds-ten.png";
import two from "../assets/images/clubs-two.png";
import eight from "../assets/images/spades-8.png";
import joker from "../assets/images/joker.png";
import queen from "../assets/images/hearts-queen.png";
import nine from "../assets/images/nine.png";
import back from "../assets/images/8cEbeEMLi.png";

const levels = {
    easy: {
        map: [
            [{ id: 1, item: 0, isOpen: false }, { id: 2, item: 1, isOpen: false }, { id: 3, item: 3, isOpen: false }, { id: 4, item: 2, isOpen: false }],
            [{ id: 5, item: 2, isOpen: false }, { id: 6, item: 1, isOpen: false }, { id: 7, item: 0, isOpen: false }, { id: 8, item: 3, isOpen: false }],
            [{ id: 9, item: 5, isOpen: false }, { id: 10, item: 4, isOpen: false }, { id: 11, item: 5, isOpen: false }, { id: 12, item: 4, isOpen: false }]
        ],
        timer: 90,
        width: 610
    },
    medium: {
        map: [
            [{ id: 1, item: 0, isOpen: false }, { id: 2, item: 1, isOpen: false }, { id: 3, item: 3, isOpen: false }, { id: 4, item: 2, isOpen: false }, { id: 5, item: 6, isOpen: false }],
            [{ id: 6, item: 2, isOpen: false }, { id: 7, item: 1, isOpen: false }, { id: 8, item: 0, isOpen: false }, { id: 9, item: 3, isOpen: false }, { id: 10, item: 7, isOpen: false }],
            [{ id: 11, item: 5, isOpen: false }, { id: 12, item: 4, isOpen: false }, { id: 13, item: 5, isOpen: false }, { id: 14, item: 4, isOpen: false }, { id: 15, item: 6, isOpen: false }]
        ],
        timer: 60,
        width: 750
    },
    hard: {
        map: [
            [{ id: 1, item: 0, isOpen: false }, { id: 2, item: 1, isOpen: false }, { id: 3, item: 3, isOpen: false }, { id: 4, item: 2, isOpen: false }, { id: 5, item: 6, isOpen: false }, { id: 6, item: 8, isOpen: false },],
            [{ id: 7, item: 2, isOpen: false }, { id: 8, item: 1, isOpen: false }, { id: 9, item: 0, isOpen: false }, { id: 10, item: 3, isOpen: false }, { id: 11, item: 9, isOpen: false }, { id: 12, item: 1, isOpen: false },],
            [{ id: 13, item: 0, isOpen: false }, { id: 14, item: 5, isOpen: false }, { id: 15, item: 5, isOpen: false }, { id: 16, item: 3, isOpen: false }, { id: 17, item: 8, isOpen: false }, { id: 18, item: 6, isOpen: false },],
            [{ id: 19, item: 3, isOpen: false }, { id: 20, item: 4, isOpen: false }, { id: 21, item: 0, isOpen: false }, { id: 22, item: 4, isOpen: false }, { id: 23, item: 1, isOpen: false }, { id: 24, item: 9, isOpen: false },]
        ],
        timer: 40,
        width: 910
    }
};

const reducer = (state, action) => {
    if (action.type === "set_all_open") {
        return {
            ...state,
            openAll: !state.openAll
        }
    } else if (action.type === "increment_score") {
        return {
            ...state,
            score: state.score + 1
        }
    } else if (action.type === "change_is_open") {
        console.log(action.payload.id);
        return {
            ...state,
            map: state.map.map((item) => {
                return item.map((el) => {
                    if (action.payload.id.includes(el.id)) {
                        return {
                            ...el,
                            isOpen: !(el.isOpen)
                        }
                    }
                    return el
                })
            })
        }
    } else if (action.type === "set_timer") {
        if (!action.payload) {
            return {
                ...state,
                timer: (state.timer - 1) > 0 ? state.timer - 1 : 0
            }
        } else {
            return {
                ...state,
                timer: action.payload.timer
            }
        }
    } else if (action.type === "change_difficulty") {
        return {
            ...state,
            map: levels[action.payload.level].map,
            timer: levels[action.payload.level].timer,
            open_difficulty_modal: action.payload.setOpen,
            width: levels[action.payload.level].width
        }
    }
    return state;
}

const data = {
    map: [
        [{ id: 1, item: 0, isOpen: false }, { id: 2, item: 1, isOpen: false }, { id: 3, item: 3, isOpen: false }, { id: 4, item: 2, isOpen: false }],
        [{ id: 5, item: 2, isOpen: false }, { id: 6, item: 1, isOpen: false }, { id: 7, item: 0, isOpen: false }, { id: 8, item: 3, isOpen: false }],
        [{ id: 9, item: 5, isOpen: false }, { id: 10, item: 4, isOpen: false }, { id: 11, item: 5, isOpen: false }, { id: 12, item: 4, isOpen: false }]
    ],

    images: [
        ace, jack, king, seven, ten, two, eight, joker, queen, nine, back
    ],
    width: 610,
    openAll: true,
    score: 0,
    timer: 90,
    open_difficulty_modal: true
}

const store = createStore(reducer, data);

export default store;