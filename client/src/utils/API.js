import axios from "axios";

export default {
    getSavedArticles: function() {
        return axios.get("/api/articles");
    },
    saveArticle: function(articleData) {
        return axios.post("/api/articles", articleData);
    },
    deleteArticle: function(id) {
        return axios.delete("/api/articles" + id)
    },
    searchArticle: function(searchQuery) {
        const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
        let searchTerm = searchQuery.searchTerm;
        let startYear = searchQuery.startYear;
        let endYear = searchQuery.endYear;
        let articleCounter = 0;
        let result = [];

        let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
                            authKey + "&q=" + searchTerm;

        return axios.get(queryURL);

    }
}