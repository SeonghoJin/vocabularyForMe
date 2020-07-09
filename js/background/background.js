'use strict';

const db = new worddb();
const connect = new connection();

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
    excute();
  }
});


