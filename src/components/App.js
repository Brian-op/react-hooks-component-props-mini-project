import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import ArticleList from "./ArticleList";
import About from "./About";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <aside>
        <About />
      </aside>
      <main>
        <ArticleList posts={blogData.posts} />
      </main>
    </div>
  );
}

export default App;
