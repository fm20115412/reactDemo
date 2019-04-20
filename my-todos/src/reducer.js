export default function (state = 1, action) {
    let payload = action.payload;
    switch (action.type) {
        case "ADD":
            return state + payload;
        default:
            return state;
    }
}
 