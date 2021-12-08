import React from "react";
import { GrPowerReset, GrCopy } from 'react-icons/gr';
import { IconContext } from "react-icons";

import CodeLine from "./CodeLine";

const Code = ({ results, setResults }) => {

    const resetCode = () => {
        setResults([]);
    }
    const copyCode = () => {
        var range = document.createRange();
        range.selectNode(document.getElementById("html"));
        console.log(range);
        window.getSelection().removeAllRanges(); // clear current selection
        window.getSelection().addRange(range); // to select text
        document.execCommand("copy");
        window.getSelection().removeAllRanges();// to deselect
    }

    return (
        <div className="code">
            <h2 className="code__heading">Your Code</h2>
            <pre>
                <code className="html" id="html">
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
            <div className="code__button code__button--reset" onClick={resetCode}>
                <div className="code__icon">
                    <IconContext.Provider value={{ size: "1.35em" }}>
                        <GrPowerReset />
                    </IconContext.Provider>
                </div>
                <span>
                    Reset
                </span>
            </div>
            <div className="code__button code__button--copy" onClick={copyCode}>
                <div className="code__icon">
                    <IconContext.Provider value={{ size: "1.35em" }}>
                        <GrCopy />
                    </IconContext.Provider>
                </div>
                <span>
                    Copy
                </span>
            </div>
        </div>
    )
}

export default Code;
