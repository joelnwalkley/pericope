import {db} from './firebaseInit';

const sanitizeURL = (url) => {
    const urlNoParams = url.split('?')[0];
    const urlNoAnchor = urlNoParams.split('#')[0];
    return urlNoAnchor;
}

const linkExists = async (url) => {
    const sanitzedURL = sanitizeURL(url);
    const query = await db.collection('links').where('url','==',sanitzedURL).limit(1).get();
    return query.docs.length > 0;
}

const validateLink = async (linkInfo) => {
    const {url, title, publisher, days = []} = linkInfo;
    
    let errors = {};
    //required fields populated
    if (url === '') {
        errors.url = true;
    }
    if (title === '') {
        errors.title = true;
    }
    if (publisher === ''){
        errors.publisher = true;
    }
    if (days.length <= 0){
        errors.days = true;
    }
    //check url format
    const urlRegex = /^(http|https):///;
    if (!urlRegex.test(url)){
        errors.url = true;
        errors.urlFormat = true;
    }
    //check if the link exists
    if (await linkExists(url)){
        errors.url = true;
        errors.exists = true;
    }
    return errors;
}

export {validateLink, sanitizeURL};