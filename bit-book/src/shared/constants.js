export const serviceURL = "http://bitbookapi.azurewebsites.net/api";
export const validationImgUrl = (value) => {
    return /^((https?|ftp):)?\/\/.*(jpeg|jpg|png|gif|bmp)$/.test(value)
};
export const key = "03A18F4";