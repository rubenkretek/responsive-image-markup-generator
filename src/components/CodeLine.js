import React from "react";

import { TiDelete } from 'react-icons/ti';
import { IconContext } from "react-icons";

const CodeLine = ({ width, height, screenWidth, source, result, results, setResults }) => {
    const deleteHandler = () => {
        setResults(results.filter((el) => el.id !== result.id));
    }
    return (
        <div className="code__codeline">
            <span className="code-yellow">&lt;</span><span className="code-red">source</span> <span className="code-yellow">media</span><span className="code-red">=</span><span className="code-blue">"(min-width: {screenWidth}px)"</span> <span className="code-yellow">srcset</span><span className="code-red">=</span><span className="code-blue">"{source}?width={width}</span><span className="code-yellow">&amp;amp;</span><span className="code-blue">height={height}</span><span className="code-yellow">&amp;amp;</span><span className="code-blue">crop=auto"</span><span className="code-yellow">&gt;</span>
            <div className="code__del-icon" onClick={() => deleteHandler()}>
                <IconContext.Provider value={{ size: "1.35em" }}>
                    <TiDelete />
                </IconContext.Provider>
            </div>
        </div>
    )
}

export default CodeLine;