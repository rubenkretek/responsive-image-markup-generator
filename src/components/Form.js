import React from "react";

const Form = ({ width, setWidth, ratioWidth, setRatioWidth, ratioHeight, setRatioHeight, screenWidth, setScreenWidth, results, setResults, source, setSource }) => {
    // Functions
    const calulateTotal = (e) => {
        e.preventDefault();
        var ratio = width / ratioWidth;
        var calculated_height = ratio * ratioHeight;
        setResults([
            ...results,
            {
                height: calculated_height,
                width: width,
                screenWidth: screenWidth,
                source: source
            }
        ]);
        setWidth("");
    }

    return (
        <form>
            <label for="RatioHeight">Screen Width</label>
            <input
                type="screenWidth"
                name="screenWidth"
                value={screenWidth}
                onChange={e => setScreenWidth(+e.target.value)}
                placeholder={screenWidth}
            />

            <label for="width">Width</label>
            <input
                type="number"
                name="width"
                value={width}
                onChange={e => setWidth(+e.target.value)}
                placeholder={width}
            />

            <label for="RatioWidth">RatioW</label>
            <input
                type="number"
                name="ratioWidth"
                value={ratioWidth}
                onChange={e => setRatioWidth(+e.target.value)}
                placeholder={ratioWidth}
            />

            <label for="RatioHeight">RatioH</label>
            <input
                type="number"
                name="ratioHeight"
                value={ratioHeight}
                onChange={e => setRatioHeight(+e.target.value)}
                placeholder={ratioHeight}
            />

            <label for="source">Source</label>
            <input
                type="text"
                name="source"
                value={source}
                onChange={e => setSource(e.target.value)}
                placeholder={source}
            />

            <button onClick={calulateTotal}>Total</button>
        </form>
    )
}

export default Form;