chrome.action.onClicked.addListener((tab) => {
    fetch('https://api64.ipify.org?format=json')
        .then((response) => response.json())
        .then((data) => {
            if (data.ip) {
                const apiURL = `https://awebanalysis.com/en/ip-lookup/${encodeURIComponent(data.ip)}/`;
                chrome.tabs.create({ url: apiURL });
            } else {
                alert('Failed to get IP address');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});
