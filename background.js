// Fetch gas prices and updates badge
function fetchPrices() {
  fetch(
    "http://api.zapper.fi/v1/gas-price?network=polygon&api_key=96e0cc51-a62e-42ca-acee-910ea7d2a241"
  )
    .then((response) => response.json())
    .then((data) => data.fast.toFixed(0))
    .then((value) => chrome.browserAction.setBadgeText({ text: value }));
}

// Creates alarm that fires every minute
chrome.alarms.create("refresh", { periodInMinutes: 1 });

// Fetches gas prices on alarm trigger
chrome.alarms.onAlarm.addListener(fetchPrices);

// Calls on browser launch
fetchPrices();
