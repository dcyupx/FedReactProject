import React from 'react';
import './Articles.css';
import { articlesData } from "../../Data/Data";
import { Link } from 'react-router-dom';

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
                                <h2>
                                <Link to='*' className="articleTitleLink"> {article.title}</Link>
                                </h2>
                                <p className="articleMeta">By {article.author} on {article.date}</p>
                                <p className="articleExcerpt">{article.excerpt}</p>
                              
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

