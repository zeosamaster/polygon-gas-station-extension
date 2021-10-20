let url = "https://gpoly.blockscan.com/gasapi.ashx?apikey=key&method=gasoracle";

function getPrices() {
  // Force refreshes gas prices and displays details
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setValue("standard", data.result.SafeGasPrice);
      setValue("fast", data.result.ProposeGasPrice);
      setValue("instant", data.result.FastGasPrice);
      if (chrome && chrome.browserAction) {
        chrome.browserAction.getBadgeText({}, (value) => {
          if (value !== "") {
            chrome.browserAction.setBadgeText({
              text: Number(data.result.ProposeGasPrice).toFixed(0),
            });
          }
        });
      }
    });
}

function setValue(id, value) {
  document.getElementById(id).innerHTML = Number(value).toFixed(0);
}

setInterval(getPrices, 500);
