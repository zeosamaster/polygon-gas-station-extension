# polygon-gas-station-extension

An extension that keeps track of the current Polygon gas prices.

## Features

- Extension banner
  - Displays the current fast gas price
  - Off by default
  - Updated every minute
- Extension popup
  - Displays the current standard / fast / instant gas prices
  - Updated every 500ms
- Browser context menu (right click anywhere)
  - "Toggle On/Off" menu item
  - Off
    - Stops polling prices for badge
    - Removes badge
    - Avoids unnecessary requests when unused
  - On
    - Resumes polling
    - Adds badge

## Install

- Clone repo
- Open Chrome
- Navigate to chrome://extensions/
- Enable developer mode on the top right corner
- Load unpacked
- Select the repo folder
