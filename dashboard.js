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
const password = prompt("Please enter the password:");

if (password === "mrscat22") {
    fetchAllData(); // Fetch data if password is correct
} else {
    document.body.innerHTML = "<h1>Access Denied</h1>";
}

// Fetch data for all units and measurements
async function fetchAllData() {
    try {
        // Define your API URLs for each unit and measurement
        const urls = {
            'unit1-m1': 'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13397&tid=140252&tz=Pacific/Auckland',
            'unit1-m2': 'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13398&tid=140678&tz=Pacific/Auckland',
            'unit1-m3': 'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13432&tid=142594&tz=Pacific/Auckland',
            'unit2-m1': 'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13395&tid=140252&tz=Pacific/Auckland',
            'unit2-m2': 'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13396&tid=140678&tz=Pacific/Auckland',
            'unit2-m3': 'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13432&tid=142592&tz=Pacific/Auckland',
            'unit3-m1': 'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13393&tid=140252&tz=Pacific/Auckland',
            'unit3-m2': 'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13394&tid=140678&tz=Pacific/Auckland',
            'unit3-m3': 'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13432&tid=142579&tz=Pacific/Auckland',
            'unit4-m1': 'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13391&tid=140252&tz=Pacific/Auckland',
            'unit4-m2': 'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13392&tid=140678&tz=Pacific/Auckland',
            'unit4-m3': 'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13432&tid=142578&tz=Pacific/Auckland',
            'unit5-m1': 'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13389&tid=140252&tz=Pacific/Auckland',
            'unit5-m2': 'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13390&tid=140678&tz=Pacific/Auckland',
            'unit5-m3': 'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13432&tid=142576&tz=Pacific/Auckland',
            'unit6-m1': '',
            'unit6-m2': 'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13387&tid=140678&tz=Pacific/Auckland',
            'unit6-m3':'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13432&tid=142591&tz=Pacific/Auckland',
            'unit7-m1': 'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13381&tid=140147&tz=Pacific/Auckland',
            'unit7-m2': 'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13382&tid=140678&tz=Pacific/Auckland',
            'unit7-m3': 'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13432&tid=142587&tz=Pacific/Auckland',
            'unit8-m1': 'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13412&tid=140252&tz=Pacific/Auckland',
            'unit8-m2': 'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13411&tid=140370&tz=Pacific/Auckland',
            'unit8-m3': 'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13432&tid=142589&tz=Pacific/Auckland',
            'unit9-m1': 'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13399&tid=140252&tz=Pacific/Auckland',
            'unit9-m2':'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13400&tid=140678&tz=Pacific/Auckland',
            'unit9-m3': 'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13432&tid=142586&tz=Pacific/Auckland',
            'unit10-m1': 'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13414&tid=140147&tz=Pacific/Auckland',
            'unit10-m2': 'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13413&tid=140370&tz=Pacific/Auckland',
            'unit10-m3': 'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13432&tid=142595&tz=Pacific/Auckland',
            'unit11-m1': 'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13401&tid=140252&tz=Pacific/Auckland', 
            'unit11-m2': 'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13402&tid=140678&tz=Pacific/Auckland',
            'unit11-m3': 'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13432&tid=142581&tz=Pacific/Auckland',
            'unit12-m1': 'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13404&tid=140252&tz=Pacific/Auckland',
            'unit12-m2': 'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13403&tid=140678&tz=Pacific/Auckland',
            'unit12-m3': 'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13432&tid=142582&tz=Pacific/Auckland',
            'unit13-m1': 'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13405&tid=140252&tz=Pacific/Auckland',
            'unit13-m2': 'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13406&tid=140678&tz=Pacific/Auckland',
            'unit13-m3': 'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13432&tid=142583&tz=Pacific/Auckland',
            'unit14-m1': 'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13407&tid=140252&tz=Pacific/Auckland',
            'unit14-m2': 'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13408&tid=140678&tz=Pacific/Auckland',
            'unit14-m3': 'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13432&tid=142584&tz=Pacific/Auckland',
            'commonareas-m1': 'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13432&tid=142570&tz=Pacific/Auckland',
            'commonareas-m2': 'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13432&tid=142572&tz=Pacific/Auckland',
            'commonareas-m3': 'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13432&tid=142574&tz=Pacific/Auckland',
            'plantroom-m1':'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13432&tid=142597&tz=Pacific/Auckland',
            'plantroom-m2':'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13432&tid=142599&tz=Pacific/Auckland',
            'plantroom-m3': 'https://www.splashmonitoring.com//getv2data/getcurrentdatapertidstring_v2?did=13432&tid=142601&tz=Pacific/Auckland',
        };

        // Show loading message and progress container
        document.getElementById('loading-message').style.display = 'block';
        document.getElementById('progress-container').style.display = 'block';

        // Initialize progress variables
        const totalRequests = Object.keys(urls).length;
        let completedRequests = 0;

        // Fetch data from all URLs in parallel
        const fetchPromises = Object.keys(urls).map(async (id) => {
            try {
                const data = await fetchData(urls[id]);
                document.getElementById(id).textContent = data;
                completedRequests++;
                updateProgressBar(completedRequests, totalRequests);
            } catch (error) {
                document.getElementById(id).innerHTML = '<span class="error">No current data</span>';
                completedRequests++;
                updateProgressBar(completedRequests, totalRequests);
            }
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
        return Math.abs(data[0]['v']); // Adjust based on your API response structure
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

// Copy table data to clipboard and show "Copied!" message
document.getElementById('copy-button').addEventListener('click', () => {
    const table = document.querySelector('table');
    const range = document.createRange();
    range.selectNode(table);
    window.getSelection().removeAllRanges(); // Clear previous selections
    window.getSelection().addRange(range);

    try {
        document.execCommand('copy');
        document.getElementById('copied-message').style.display = 'block'; // Show "Copied!" message
        setTimeout(() => {
            document.getElementById('copied-message').style.display = 'none'; // Hide "Copied!" message after 2 seconds
        }, 2000);
    } catch (err) {
        console.error('Failed to copy data:', err);
        alert('Failed to copy data to clipboard.');
    }

    window.getSelection().removeAllRanges(); // Clear selection after copying
});
