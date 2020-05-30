import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Article from "./components/articles/Article";
import Articles from "./components/articles/Articles";
import ArticleForm from "./components/articles/ArticleForm";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Container>
          <Switch>
            <Route path="/articles/new" component={ArticleForm} />
            <Route path="/articles/:articleId/edit" component={ArticleForm} />
            <Route path="/articles/:articleId" component={Article} />
            <Route path="/" component={Articles} />
          </Switch>
        </Container>
      </BrowserRouter>
    </div>
  );
};

export default App;
