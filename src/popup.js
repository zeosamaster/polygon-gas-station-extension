let url = "https://gpoly.blockscan.com/gasapi.ashx?apikey=key&method=gasoracle";

function getPrices() {
  // Force refreshes gas prices and displays details
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      chrome.browserAction.setBadgeText({
        text: Number(data.result.ProposeGasPrice).toFixed(0),
      });
      setValue("standard", data.result.SafeGasPrice);
      setValue("fast", data.result.ProposeGasPrice);
      setValue("instant", data.result.FastGasPrice);
    });
}

function setValue(id, value) {
  document.getElementById(id).textContent = Number(value).toFixed(0);
}

setInterval(getPrices, 500);
