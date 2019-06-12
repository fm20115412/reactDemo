const initdata = {
    loading :true,
    error :false,
    articleList : []
}

const LOAD_ARTICLES = 'LOAD_ARTICLES';
const LOAD_ARTICLES_SUCCESS = 'LOAD_ARTICLES_SUCCESS';
const LOAD_ARTICLES_ERROR = 'LOAD_ARTICLES_ERROR';

export function loadArticles(){
    return {
        types: [LOAD_ARTICLES,LOAD_ARTICLES_SUCCESS,LOAD_ARTICLES_ERROR],
        url: 'api/articles.json',
    }
}

function previewList(state = initdata ,action){
    switch (action.type){
        case LOAD_ARTICLES : {
            
        }
        case LOAD_ARTICLES_SUCCESS : {

        }
        case LOAD_ARTICLES_ERROR : {

        }
        default : return state
    }
}
export default previewList