import React from "react";

const Form = ({ width, setWidth, ratioWidth, setRatioWidth, ratioHeight, setRatioHeight, screenWidth, setScreenWidth, results, setResults, source, setSource }) => {
    // Functions
    // Calculate the aspect ratio width
    const calulateTotal = (e) => {
        e.preventDefault();
        var ratio = width / ratioWidth;
        var calculated_height = ratio * ratioHeight;
        var rounded_calculated_height = Math.round(calculated_height);
        setResults([
            ...results,
            {
                height: rounded_calculated_height,
                width: width,
                screenWidth: screenWidth,
                source: source
            }
        ]);
        setWidth("");
    }
    // Set aspect ratio when swicther is clicked
    const changeAspectRatio = (width, height) => {
        setRatioHeight(height);
        setRatioWidth(width);
    }

    return (
        <form className="form">

            <div className="form__container">

                <div className="form__scrset">
                    <label for="source">Source</label>
                    <input
                        type="text"
                        name="source"
                        value={source}
                        onChange={e => setSource(e.target.value)}
                        placeholder={source}
                    />
                </div>

                <div className="form__aspect-ratio">
                    <label for="RatioWidth">Aspect Ratio</label>
                    <div className="form__aspect-ratio-inputs">
                        <div className="form__aspect-ratio-width">
                            <input
                                type="number"
                                name="ratioWidth"
                                value={ratioWidth}
                                onChange={e => setRatioWidth(+e.target.value)}
                                placeholder={ratioWidth}
                            />
                        </div>
                        <div className="form__aspect-ratio-height">
                            <input
                                type="number"
                                name="ratioHeight"
                                value={ratioHeight}
                                onChange={e => setRatioHeight(+e.target.value)}
                                placeholder={ratioHeight}
                            />
                        </div>
                    </div>
                    <div className="form__switcher">
                        <div className={`form__switcher-item  ${(ratioWidth === 4 && ratioHeight === 3) ? "active" : ""}`} onClick={() => changeAspectRatio(4, 3)}>4:3</div>
                        <div className={`form__switcher-item  ${(ratioWidth === 16 && ratioHeight === 9) ? "active" : ""}`} onClick={() => changeAspectRatio(16, 9)}>16:9</div>
                    </div>

                </div>

                <div className="form__breakpoint">
                    <label for="cars">Select your breakpoint</label>
                    <select name="screenWidth" onChange={e => setScreenWidth(+e.target.value)}>
                        <option value="1600">1600px</option>
                        <option value="1440">1440px</option>
                        <option value="1200">1200px</option>
                        <option value="1024">1024px</option>
                        <option value="768">768px</option>
                        <option value="600">600px</option>
                        <option value="480">480px</option>
                    </select>
                </div>

                <div className="form__element-width">
                    <label for="width">Width</label>
                    <input
                        type="number"
                        name="width"
                        value={width}
                        onChange={e => setWidth(+e.target.value)}
                        placeholder={width}
                    />
                </div>

                <div className="form__submit">
                    <button onClick={calulateTotal}>Generate</button>
                </div>
            </div>



















        </form>
    )
}

export default Form;