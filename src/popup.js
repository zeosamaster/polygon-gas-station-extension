// Force refreshes gas prices and displays details
fetch(
  "http://api.zapper.fi/v1/gas-price?network=polygon&api_key=96e0cc51-a62e-42ca-acee-910ea7d2a241"
)
  .then((response) => response.json())
  .then((data) => {
    chrome.browserAction.setBadgeText({ text: data.standard.toFixed(0) });
    setValue("standard", data.standard);
    setValue("fast", data.fast);
    setValue("instant", data.instant);
  });

function setValue(id, value) {
  document.getElementById(id).textContent = value.toFixed(0);
}
