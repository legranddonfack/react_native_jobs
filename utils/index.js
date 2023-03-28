export const checkImageUrl = (url) => {
    if (!url) return false
    else {
        const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|web)$', 'i');
        return pattern.test(url);
    }
};