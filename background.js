chrome.action.onClicked.addListener((tab) => {
    const apiURL = 'https://awebanalysis.com/en/request-ip-lookup-redirect/';
    chrome.tabs.create({ url: apiURL });
});