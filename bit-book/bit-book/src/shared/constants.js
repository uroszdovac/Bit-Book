export const serviceURL = "https://bitbookapi.azurewebsites.net/api";
export const validationImgUrl = (value) => {
    return /^((https?|ftp):)?\/\/.*(jpeg|jpg|png|gif|bmp)$/.test(value)
};
export const key = "03A18F4";

export const getSessionId = () => {
    const local = localStorage.getItem('user')
    if (local) {
        const user = JSON.parse(local);
        const SessionId = user.sessionId;
        return SessionId;
    }
    return "";
}