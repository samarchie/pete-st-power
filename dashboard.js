// Define common headers for your API requests
const headers = {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-NZ,en-GB;q=0.9,en-US;q=0.8,en;q=0.7",
    "cookie": "PHPSESSID=3tpv49l90aa8v70u1250etke50",
    "dnt": "1",
    "referer": "https://www.splashmonitoring.com/system/1063/mobile",
    "sec-ch-ua": '"Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
};

// Prompt the user for a password
// const password = prompt("Please enter the password:");

// if (password === "your_password") {
    fetchAllData(); // Fetch data if password is correct
// } else {
//     document.body.innerHTML = "<h1>Access Denied</h1>";
// }

// Fetch data for all units and measurements
async function fetchAllData() {
    try {
        // Define your API URLs for each unit and measurement
        const urls = {
            'unit1-m1': 'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13397&tid=140252&tz=Pacific/Auckland',
            'unit1-m2': 'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13398&tid=140678&tz=Pacific/Auckland',
            'unit1-m3': 'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13432&tid=142594tz=Pacific/Auckland',
            'unit2-m1': 'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13389&tid=140252&tz=Pacific/Auckland',
            'unit2-m2': 'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13389&tid=140252&tz=Pacific/Auckland',
            'unit2-m3': 'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13389&tid=140252&tz=Pacific/Auckland',
            // Add more URLs for other units
        };

        // Show loading message and progress container
        document.getElementById('loading-message').style.display = 'block';
        document.getElementById('progress-container').style.display = 'block';

        // Initialize progress variables
        const totalRequests = Object.keys(urls).length;
        let completedRequests = 0;

        // Fetch data from all URLs
        const fetchPromises = Object.keys(urls).map(id => {
            return fetchData(urls[id])
                .then(data => {
                    document.getElementById(id).textContent = data;
                    completedRequests++;
                    updateProgressBar(completedRequests, totalRequests);
                    return { id, data };
                })
                .catch(error => {
                    document.getElementById(id).innerHTML = '<span class="error">Error</span>';
                    completedRequests++;
                    updateProgressBar(completedRequests, totalRequests);
                });
        });

        // Wait for all fetch operations to complete
        await Promise.all(fetchPromises);

        // Hide loading message and display dashboard
        document.getElementById('loading-message').style.display = 'none';
        document.getElementById('progress-container').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to fetch data from a given URL with custom headers
async function fetchData(url) {
    const response = await fetch(url, { headers });
    if (response.ok) {
        const data = await response.json();
        return data[0]['v']; // Adjust based on your API response structure
    } else {
        throw new Error('Failed to fetch data');
    }
}

// Function to update the progress bar
function updateProgressBar(completed, total) {
    const progressBar = document.getElementById('progress-bar');
    const progress = (completed / total) * 100;
    progressBar.style.width = progress + '%';
}
