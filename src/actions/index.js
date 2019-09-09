// TODO: add and export your own actions

// const FETCH_MESSAGES = "FETCH_MESSAGES";

export function fetchMessages(channel) {
    const url = `https://wagon-chat.herokuapp.com/${channel}/messages`
    const promise = fetch(url)
        .then(response => response.json());   
    return {
        type: "FETCH_MESSAGES",
        payload: promise
        }
};

export function createMessage(channel, author, content) {

    const messageParams = {
            author: author,
            content: content
        };
    const url = `https://wagon-chat.herokuapp.com/${channel}/messages`
    const promise = fetch(url, {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(messageParams)
        })
        .then(r => r.json());

    return {
        type: "CREATE_MESSAGE",
        payload: promise
    }
  };