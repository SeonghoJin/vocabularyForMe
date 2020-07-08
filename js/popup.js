let activeButton = document.getElementById("activation");

activeButton.onclick = function () {
  chrome.tabs.executeScript({
    file: "highlight.js",
  });
};
