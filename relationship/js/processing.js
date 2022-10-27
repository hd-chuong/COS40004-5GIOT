function processRow(row) {
    row.Bitrate = parseFloat(row.Bitrate);
    row["Bitrate-RX"] = parseFloat(row["Bitrate-RX"]);
    row.Date = parseInt(row.Date);
    row.Month = parseInt(row.Month);
    row.Year = parseInt(row.Year);
    row["Transfer size"] = parseFloat(row["Transfer size"]);
    row["Transfer size-RX"] = parseFloat(row["Transfer size-RX"]);
    row["send_data"] = parseFloat(row["send_data"]);
    row["speed"] = parseFloat(row["speed"]);
    row["svr1"] = parseFloat(row["svr1"]);
    row["svr2"] = parseFloat(row["svr2"]);
    row["svr3"] = parseFloat(row["svr3"]);
    row["svr4"] = parseFloat(row["svr4"]);
    row["speed"] = parseFloat(row["speed"]);
    row["Cloud Rate"] = parseInt(row["Cloud Rate"]);
    row["Rain Rate"] = parseInt(row["Rain Rate"]);
    row["Wind Rate"] = parseInt(row["Wind Rate"]);


    return row;
}