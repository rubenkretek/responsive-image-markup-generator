import React from "react";

import CodeLine from "./CodeLine";

const Code = ({ results }) => {
    return (
        <div className="code">
            <h2 className="code__heading">Your Code</h2>
            <pre>
                <code className="html">
                    {results.map(result => (
                        <CodeLine
                            width={result.width}
                            height={result.height}
                            screenWidth={result.screenWidth}
                            source={result.source}
                        />
                    ))}
                </code>
            </pre>
        </div>
    )
}

export default Code;