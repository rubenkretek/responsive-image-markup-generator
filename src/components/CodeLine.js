import React from "react";

const CodeLine = ({ width, height, screenWidth, source }) => {
    return (
        <div className="codeline">
            <span className="code-yellow">&lt;</span><span className="code-red">source</span> <span className="code-yellow">media</span><span className="code-red">=</span><span className="code-blue">"(min-width: {screenWidth}px)"</span> <span className="code-yellow">srcset</span><span className="code-red">=</span><span className="code-blue">"{source}"?width={width}</span><span className="code-yellow">&amp;amp;</span><span className="code-blue">height={height}</span><span className="code-yellow">&amp;amp;</span><span className="code-blue">crop=auto"</span><span className="code-yellow">&gt;</span>
        </div>
    )
}

export default CodeLine;