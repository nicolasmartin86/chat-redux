// TODO: add and export your own actions

const FETCH_MESSAGES = "FETCH_MESSAGES";

export function fetchMessages(channel) {
    const url = `https://wagon-chat.herokuapp.com/${channel}/messages`
    const promise = fetch(url)
        .then(response => response.json());
    return {
        type: FETCH_MESSAGES,
        payload: promise.messages
        }
};