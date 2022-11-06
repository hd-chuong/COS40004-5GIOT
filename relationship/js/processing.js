function getSpeedBin(row) {
    const speed = parseFloat(row["speed"])

    if (speed < 10)
        return "0-10"
    else if (speed < 20) {
        return "10-20";
   } else if (speed < 30) {
        return "20-30";
   } else if (speed < 40) {
        return "30-40";
   } else if (speed < 50) {
        return "40-50";
   } else if (speed < 60) {
        return "50-60";
   } else if (speed < 70) {
        return "60-70";
   } else if (speed < 80) {
        return "70-80";
   } else if (speed < 90) {
        return "80-90";
   } else if (speed < 100) {
        return "90-100";
    }
    return ">100";
}

function processRow(row) {
    row.Bitrate = parseFloat(row.Bitrate);
    row["Bitrate-RX"] = parseFloat(row["Bitrate-RX"]);
    row.Date = parseInt(row.Date);
    row.Month = parseInt(row.Month);
    row.Year = parseInt(row.Year);
    row["Transfer size"] = parseFloat(row["Transfer size"]);
    row["Transfer size-RX"] = parseFloat(row["Transfer size-RX"]);
    row["send_data"] = parseFloat(row["send_data"]) * 8;
    row["speed"] = parseFloat(row["speed"]);
    row["svr1"] = parseFloat(row["svr1"]);
    row["svr2"] = parseFloat(row["svr2"]);
    row["svr3"] = parseFloat(row["svr3"]);
    row["svr4"] = parseFloat(row["svr4"]);
    row["speed"] = parseFloat(row["speed"]);
    row["Cloud Rate"] = parseInt(row["Cloud Rate"]);
    row["Rain Rate"] = parseInt(row["Rain Rate"]);
    row["Wind Rate"] = parseInt(row["Wind Rate"]);
    row["Speed Bin"] = getSpeedBin(row);

    return row;
}