import * as d3 from 'd3';

export function initClock(containerId) {
    const width = 700;
    const height = 700;
    const radius = Math.min(width, height) / 2;

    const svg = d3.select(containerId)
        .append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`)
        .append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`);

    // Clock Face Group (Static)
    const faceGroup = svg.append("g").attr("class", "face-group");

    // Draw Ticks ONLY on load (Static)
    // Ticks should be OUTSIDE the donut (radius * 1.05?)
    const ticks = d3.range(0, 24);
    const tickScale = d3.scaleLinear().domain([0, 24]).range([0, 360]);

    faceGroup.selectAll(".tick")
        .data(ticks)
        .enter()
        .append("g")
        .attr("class", d => (d % 6 === 0) ? "tick major" : "tick")
        .attr("transform", d => `rotate(${tickScale(d)})`)
        .each(function (d) {
            const isMajor = d % 6 === 0;
            const outerR = radius * 1.0;
            const len = isMajor ? 20 : 10;

            d3.select(this).append("line")
                .attr("y1", -outerR)
                .attr("y2", -outerR - len) // Pointing outwards
                .attr("stroke-width", isMajor ? 2 : 1)
                .attr("stroke", "#2D3436");

            if (isMajor) {
                // Numbers
                d3.select(this).append("text")
                    .attr("y", -outerR - len - 15)
                    .attr("transform", `rotate(${-tickScale(d)})`) // Keep upright
                    .text(d === 0 ? "24" : d)
                    .attr("text-anchor", "middle")
                    .attr("alignment-baseline", "middle")
                    .style("font-family", "var(--font-serif)")
                    .style("fill", "var(--color-text)")
                    .style("font-weight", "bold");
            }
        });

    // Chart Group (Rotates)
    const chartGroup = svg.append("g").attr("class", "chart-group");

    // Center Text Group
    const textGroup = svg.append("g").attr("class", "text-group");
    const centerLabel = textGroup.append("text")
        .attr("text-anchor", "middle")
        .attr("dy", "0.35em")
        .style("font-size", "3rem")
        .style("font-family", "var(--font-serif)")
        .style("fill", "var(--color-text)")
        .style("font-style", "italic");

    return { svg, chartGroup, centerLabel, radius };
}

export function updateClock(instance, dataset) {
    const { chartGroup, radius, centerLabel } = instance;
    const { data, highlight } = dataset;

    // Create the pie layout
    const pie = d3.pie()
        .value(d => d.value)
        .sort(null);

    const arc = d3.arc()
        .innerRadius(radius * 0.5) // Thinner elegant donut
        .outerRadius(radius * 0.9);

    // Data Binding
    const path = chartGroup.selectAll("path")
        .data(pie(data));

    // ENTER + UPDATE
    path.join(
        enter => enter.append("path")
            .attr("class", "arc")
            .attr("d", arc)
            .each(function (d) { this._current = d; })
            .style("opacity", 0)
            .transition().duration(1000).style("opacity", d => {
                if (!highlight) return 1;
                return d.data.label === highlight ? 1 : 0.15; // Fade others
            })
            .attr("fill", d => d.data.color),
        update => update
            .transition().duration(1000)
            .attrTween("d", function (d) {
                const i = d3.interpolate(this._current, d);
                this._current = i(0);
                return t => arc(i(t));
            })
            .style("opacity", d => {
                if (!highlight) return 1;
                return d.data.label === highlight ? 1 : 0.15; // Fade others
            })
            .attr("fill", d => d.data.color)
    );
}

export function rotateClock(instance, angle) {
    instance.chartGroup.attr("transform", `rotate(${angle})`);
}
