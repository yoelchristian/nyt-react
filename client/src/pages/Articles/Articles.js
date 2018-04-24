import React, { Component } from "react";
import { DeleteBtn, SaveBtn } from "../../components/Btn";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Articles extends Component {
    state = {
        articles: [],
        searchTerm: "",
        startYear: "",
        endYear: ""
    }

    componentDidMount() {
        this.loadArticles();
    }

    loadArticles = () => {
        API.getSavedArticles()
            .then(res => 
                this.setState({ articles: res.data, title: "", url: "", date: "" })
            )
            .catch(err => console.log(err));
    };

    saveArticle = (title, url, date) => {
        let articleData = {
            title: title,
            url: url,
            date: date
        }
        API.saveArticle(articleData).then(res => this.loadArticles())
    }

    deleteArticle = id => {
        API.deleteArticle(id)
            .then(res => this.loadArticles())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.searchArticle({
            searchTerm: this.state.searchTerm,
            startYear: this.state.startYear,
            endYear: this.state.endYear
        }).then(res => {this.setState({ articles: res.data.response.docs })})
    }

    render() {
        return (
            <div>
            <form>
                <Input 
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    name="searchTerm"
                    placeholder="Search Term (required)"
                />
                <Input 
                    value={this.state.startYear}
                    onChange={this.handleInputChange}
                    name="startYear"
                    placeholder="Start Year (required)"
                />
                <Input 
                    value={this.state.endYear}
                    onChange={this.handleInputChange}
                    name="endYear"
                    placeholder="End Year (required)"
                />
                <FormBtn onClick={this.handleFormSubmit}>
                    Search
                </FormBtn>
            </form>
            {this.state.articles.map(article => (
                <ListItem key={null}>
                    <a target="_blank" href={article.web_url}>
                        <strong>{article.headline.main}</strong>
                        {article.pub_date}
                    </a>
                    <SaveBtn onClick={() => this.saveArticle(article.headline.main, article.web_url, article.pub_date)} />
                </ListItem>
            ))}
            </div>
        )
    }
}

export default Articles;