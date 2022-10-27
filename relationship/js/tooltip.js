function getPointTooltipHtml(data) {
    return `
        <div>
            <p><span style='color:grey'>Speed: </span>${data.speed}</p>
            <p><span style='color:grey'>Transfer size (Transmit): </span>${data["Transfer size"]}</p>
            <p><span style='color:grey'>Transfer size (Receive): </span>${data["Transfer size-RX"]}</p>
            <p><span style='color:grey'>Send data: </span>${data["send_data"]}</p>
            <p><span style='color:grey'>Responding to Server 1: </span>${data["svr1"]}</p>
            <p><span style='color:grey'>Responding to Server 2: </span>${data["svr2"]}</p>
            <p><span style='color:grey'>Responding to Server 3: </span>${data["svr3"]}</p>
            <p><span style='color:grey'>Responding to Server 4: </span>${data["svr4"]}</p>
        </div>
    `;
}

function getBoxTooltipHtml({median, q1, q3, min, max}) {
    return `
        <div>
            <p><span style='color:grey'>Median: </span>${median}</p>
            <p><span style='color:grey'>Q1: </span>${q1}</p>
            <p><span style='color:grey'>Q3: </span>${q3}</p>
            <p><span style='color:grey'>Min: </span>${min}</p>
            <p><span style='color:grey'>Max: </span>${max}</p>
        </div>
    `;
}

function mouseover(tooltip, formatData, d) {
    tooltip
    .transition()
    .duration(200)
    .style("opacity", 1)
    tooltip
        .html(formatData(d))
        .style("left", (d3.mouse(this)[0]+30) + "px")
        .style("top", (d3.mouse(this)[1]+30) + "px")
};

function mousemove(tooltip, d) {
    tooltip
    .style("left", (d3.mouse(this)[0]+30) + "px")
    .style("top", (d3.mouse(this)[1]+30) + "px")
};

function mouseleave(tooltip, d) {
    tooltip
    .transition()
    .duration(200)
    .style("opacity", 0)
};