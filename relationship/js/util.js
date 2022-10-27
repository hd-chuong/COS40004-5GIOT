function filter(value, lowerbound, upperbound) {
    let included = true;
    if (lowerbound) {
        included = included && value >= lowerbound;
    }
    if (upperbound) {
        included = included && value <= upperbound;
    }
    return included;
}