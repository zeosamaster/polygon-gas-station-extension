let url = "https://gpoly.blockscan.com/gasapi.ashx?apikey=key&method=gasoracle";

// Fetch gas prices and updates badge
function fetchPrices() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => Number(data.result.ProposeGasPrice).toFixed(0))
    .then((value) => chrome.browserAction.setBadgeText({ text: value }));
}

// Creates alarm that fires every minute
chrome.alarms.create("refresh", { periodInMinutes: 1 });

// Fetches gas prices on alarm trigger
chrome.alarms.onAlarm.addListener(fetchPrices);

// Toggle watcher
let isWatching = true;
function toggleWatcher() {
  if (isWatching) {
    chrome.alarms.onAlarm.removeListener(fetchPrices);
    chrome.browserAction.setBadgeText({ text: "" });
    isWatching = false;
  } else {
    chrome.alarms.onAlarm.addListener(fetchPrices);
    fetchPrices();
    isWatching = true;
  }
}

chrome.contextMenus.create({ onclick: toggleWatcher, title: "Toggle On/Off" });

// Calls on browser launch
fetchPrices();
