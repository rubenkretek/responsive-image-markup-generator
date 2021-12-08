import React, { useState } from "react";

import Form from "./Form";
import Code from "./Code";

const Calculator = () => {
    //State
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();
    const [ratioWidth, setRatioWidth] = useState(4);
    const [ratioHeight, setRatioHeight] = useState(3);
    const [screenWidth, setScreenWidth] = useState(1600);
    const [source, setSource] = useState('');

    const [results, setResults] = useState([]);

    return (
        <div className="container">
            <h1>Responsive markup generator</h1>
            <Form
                width={width}
                setWidth={setWidth}
                height={height}
                setHeight={setHeight}
                ratioWidth={ratioWidth}
                setRatioWidth={setRatioWidth}
                ratioHeight={ratioHeight}
                setRatioHeight={setRatioHeight}
                screenWidth={screenWidth}
                setScreenWidth={setScreenWidth}
                results={results}
                setResults={setResults}
                source={source}
                setSource={setSource}
            />
            <Code results={results} setResults={setResults} />
        </div>
    )
}

export default Calculator;