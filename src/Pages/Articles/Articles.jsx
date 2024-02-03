import React from 'react';
import './Articles.css';
import { articlesData } from "../../Data/Data";

export default function ArticlesPage() {
    return (
        <div className="articlesPage">
            <div className="container">
                <header className="pageHeader">
                    <h1>Featured Articles</h1>
                </header>

                <div className="articlesList">
                    {articlesData.map(article => (
                        <div key={article.id} className="articleCard">
                            <div className="articleImage">
                                <img src={article.image} alt={article.title} />
                            </div>
                            <div className="articleInfo">
                                <h2>{article.title}</h2>
                                <p className="articleMeta">By {article.author} on {article.date}</p>
                                <p className="articleExcerpt">{article.excerpt}</p>
                                <button className="btn btn-border">Read More</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
