const unitData = [
    {
        unit: 5,
        heatEnergyUrl: "https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13389&tid=140252&tz=Pacific/Auckland",
        electricalEnergyUrl: "https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13389&tid=140253&tz=Pacific/Auckland",
        otherEnergyUrl: "https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13389&tid=140254&tz=Pacific/Auckland",
    },
    // Add more objects for each unit (2 to 14)
    // {
    //     unit: 2,
    //     heatEnergyUrl: "https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13389&tid=140255&tz=Pacific/Auckland",
    //     electricalEnergyUrl: "https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13389&tid=140256&tz=Pacific/Auckland",
    //     otherEnergyUrl: "https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13389&tid=140257&tz=Pacific/Auckland",
    // },
    // Continue for all 14 units...
];

const headers = {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-NZ,en-GB;q=0.9,en-US;q=0.8,en;q=0.7",
    "cookie": "PHPSESSID=3tpv49l90aa8v70u1250etke50",
    "dnt": "1",
    // "priority": "u=1, i",
    "referer": "https://www.splashmonitoring.com/system/1063/mobile",
    "sec-ch-ua": '"Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
};

async function fetchData(url) {
    try {
        const response = await fetch(url, {
            method: 'GET',  // Explicitly specifying GET request
            headers: headers
        });
        if (response.ok) {
            const data = await response.json();
            return data[0]['v'];
        } else {
            console.error(`Error fetching data from ${url}:`, response.statusText);
            return '<span class="error">Error</span>';
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return '<span class="error">Error</span>';
    }
}

async function updateTable() {
    const tableBody = document.querySelector('#energy-table tbody');

    for (const unit of unitData) {
        const row = document.createElement('tr');

        const unitCell = document.createElement('td');
        unitCell.textContent = `Unit ${unit.unit}`;
        row.appendChild(unitCell);

        const heatEnergyCell = document.createElement('td');
        const electricalEnergyCell = document.createElement('td');
        const otherEnergyCell = document.createElement('td');

        heatEnergyCell.textContent = await fetchData(unit.heatEnergyUrl);
        electricalEnergyCell.textContent = await fetchData(unit.electricalEnergyUrl);
        otherEnergyCell.textContent = await fetchData(unit.otherEnergyUrl);

        row.appendChild(heatEnergyCell);
        row.appendChild(electricalEnergyCell);
        row.appendChild(otherEnergyCell);

        tableBody.appendChild(row);
    }
}

updateTable();
