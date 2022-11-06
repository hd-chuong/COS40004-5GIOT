function getPointTooltipHtml(data) {
    return `
        <div>
            <p><span style='color:grey'>Upload speed (Mbits/sec): </span>${data["Upload speed (Mbits/sec)"]}</p>
            <p><span style='color:grey'>Download speed (MBits/sec): </span>${data["Download speed (MBits/sec)"]}</p>
            <p><span style='color:grey'>Upload throughput (MBytes): </span>${data["Upload throughput (MBytes)"]}</p>
            <p><span style='color:grey'>Upload size (MBytes): </span>${data["Upload size (MBytes)"]}</p>
            <p><span style='color:grey'>Download size (MBytes): </span>${data["Download size (MBytes)"]}</p>
            <p><span style='color:grey'>Response time from CloudflareDNS (ms): </span>${data["Response time from CloudflareDNS (ms)"]}</p>
            <p><span style='color:grey'>Response time from GoogleDNS (ms): </span>${data["Response time from GoogleDNS (ms)"]}</p>
            <p><span style='color:grey'>Response time from OptusDNS (ms): </span>${data["Response time from OptusDNS (ms)"]}</p>
            <p><span style='color:grey'>Response time from EC2DNS (ms): </span>${data["Response time from EC2DNS (ms)"]}</p>
            <p><span style='color:grey'>Speed: </span>${data.speed}</p>
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