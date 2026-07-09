import { useState } from "react";

export function Post(props) {
    const [likes, setLikes] = useState(0);

    function handleLike() {
        setLikes(estadoAnterior => estadoAnterior + 1);
    }

    return (
        <article className="post-card">
            <header>
                <strong>@{props.author}</strong>
                <span>
                    sent a vibe: <strong>{props.vibe}</strong>
                </span>
            </header>

            <p>{props.content}</p>

            <footer>
                <button onClick={handleLike} className="btn-like">
                    Curtir Vibe ({likes})
                </button>
            </footer>
        </article>
    );
}
