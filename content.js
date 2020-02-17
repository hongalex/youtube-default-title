let docTitle = document.title
let untranslatedTitle = docTitle.split(" - YouTube")[0]

let header = document.getElementsByClassName("title")[0]
let titleElement = header.getElementsByClassName("ytd-video-primary-info-renderer")[0]
titleElement.innerHTML = untranslatedTitle

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  sendResponse(document.title);
});