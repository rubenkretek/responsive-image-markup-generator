import React from "react";

import CodeLine from "./CodeLine";

const Code = ({ results }) => {
    return (
        <pre>
            <code className="html">
                &lt;picture&gt;
                {results.map(result => (
                    <CodeLine
                        width={result.width}
                        height={result.height}
                        screenWidth={result.screenWidth}
                        source={result.source}
                    />
                ))}
                &lt;/picture&gt;
            </code>
        </pre>
    )
}

export default Code;