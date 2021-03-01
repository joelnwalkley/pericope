import {db} from './firebaseInit';

const validateLink = async (linkInfo) => {
    const {url, title, publisher, days = []} = linkInfo;
    const query = await db.collection('links').where('url','==',url.split('?')[0]).limit(1).get();
    console.log("query lenght",query.docs.length)
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
    if (query.docs.length > 0){
        errors.url = true;
        errors.exists = true;
    }
    return errors;
}

export {validateLink};