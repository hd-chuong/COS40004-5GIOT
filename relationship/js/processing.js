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
    row["Upload speed (Mbits/sec)"] = parseFloat(row["Upload speed (Mbits/sec)"]);
    row["Download speed (MBits/sec)"] = parseFloat(row["Download speed (MBits/sec)"]);
    row.Date = parseInt(row.Date);
    row.Month = parseInt(row.Month);
    row.Year = parseInt(row.Year);
    row.hour = parseInt(row.hour);
    row["Upload size (MBytes)"] = parseFloat(row["Upload size (MBytes)"]);
    row["Download size (MBytes)"] = parseFloat(row["Download size (MBytes)"]);
    row["Upload throughput (MBytes)"] = parseFloat(row["Upload throughput (MBytes)"]);
    row["speed"] = parseFloat(row["speed"]);
    row["Response time from CloudflareDNS (ms)"] = parseFloat(row["Response time from CloudflareDNS (ms)"]);
    row["Response time from GoogleDNS (ms)"] = parseFloat(row["Response time from GoogleDNS (ms)"]);
    row["Response time from OptusDNS (ms)"] = parseFloat(row["Response time from OptusDNS (ms)"]);
    row["Response time from EC2DNS (ms)"] = parseFloat(row["Response time from EC2DNS (ms)"]);
    row["speed"] = parseFloat(row["speed"]);
    row["Cloud Rate"] = parseInt(row["Cloud Rate"]);
    row["Rain Rate"] = parseInt(row["Rain Rate"]);
    row["Wind Rate"] = parseInt(row["Wind Rate"]);
    row["Speed Bin"] = getSpeedBin(row);

    return row;
}