// When browser action icon is clicked, open a new tab.
chrome.action.onClicked.addListener(function() {
  var url = "chrome://newtab";
  chrome.tabs.create({ url: url });
});