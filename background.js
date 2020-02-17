chrome.webNavigation.onCompleted.addListener(function(data) {
  if(data)
    chrome.tabs.sendMessage(data.tabId, {}, function(response) {
      console.log(response)
    });
});
