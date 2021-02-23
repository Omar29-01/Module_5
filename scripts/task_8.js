let map = new Map([
    ["country", "Japan"],
    ["capital", "Tokyo"],
    ["population", "125 million"],
    ["currency", "yen"],
    ["organization", "APEC"]
]);

for(let [key, value] of map) {
    console.log(`Key - ${key}, value - ${value}`);
};