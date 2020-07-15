const db = new worddb();
const connect = new connection();


connect.addListener(chrome.tabs.onUpdated, function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
    excute();
  }
})


