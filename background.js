chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  // only listen for Youtube video pages. 
  if (!tab.url.includes("https://www.youtube.com/watch")){
    return
  }

  if (tab.active) {
    let title = tab.title
    if (title) {
      chrome.tabs.sendMessage(tab.id, {"title": title}, function(response) {
        console.log(response)
      });
    }
  }
});
