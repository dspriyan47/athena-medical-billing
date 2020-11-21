import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
    const url = "http://localhost:3001/posts"
    const [posts, setPosts] = useState();

    useEffect(() => {
        fetch(url)
        .then(resp=>resp.json())
        .then(data => {
            console.log(data);
            let posts = data.map((post, index) => {
                return (
                    <div key={index}>
                        <h3>{post.title}</h3>
                <p>Tags: {post.tags}</p>
                    </div>
                )
            })
            console.log(posts);
            setPosts(posts)
        })
    }, []);

return ( <div className = "App">{posts}</div>);
}

export default App;