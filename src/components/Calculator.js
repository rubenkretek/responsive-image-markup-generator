import React, { useState } from "react";

const Calculator = () => {
    //State
    const [width, setWidth] = useState(400);
    const [height, setHeight] = useState(300);
    const [screenWidths, setscreenWidths] = useState([480, 600, 1024, 1200]);

    const [total, setTotal] = useState(width + height);

    // Functions
    const calulateTotal = (e) => {
        e.preventDefault();
        setTotal(width + height)
    }


    return (
        <div>
            <form>
                <label for="width">Width</label>
                <input
                    type="number"
                    name="width"
                    value={width}
                    onChange={e => setWidth(+e.target.value)}
                    placeholder={width}
                />

                <label for="height">Height</label>
                <input
                    type="number"
                    name="height"
                    value={height}
                    onChange={e => setHeight(+e.target.value)}
                    placeholder={height} />
                <button onClick={calulateTotal}>Total</button>
            </form>
            <div className="result">
                <h2>The current width is</h2>
                <p>{width}px</p>
                <h2>And the current height is</h2>
                <p>{height}px</p>
                <h2>And the total is</h2>
                <p>{total}px</p>
            </div>


            <div className="screenwidths">
                <h2>Here are the screen widths</h2>
                {screenWidths.map((screenWidth) => (
                    <p>{screenWidth}</p>
                ))}
            </div>


        </div>
    )
}

export default Calculator;