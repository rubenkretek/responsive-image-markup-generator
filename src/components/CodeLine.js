import React from "react";

const CodeLine = ({ width, height, screenWidth, source }) => {
    const attributes = `<source media="(min-width: ${screenWidth}px)" srcset="${source}"?width=${width}&amp;height=${height}&amp;crop=auto">`;
    return (
        <div className="codeline">
            {attributes}
        </div>
    )
}

export default CodeLine;