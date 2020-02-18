chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  let untranslatedTitle = request.title.split(" - YouTube")[0];
  let header = document.getElementsByClassName("title")[0];
  if (header) {
    let titleElement = header.getElementsByClassName(
      "ytd-video-primary-info-renderer"
    )[0];
    let translatedTitle = titleElement.textContent;
    titleElement.innerHTML = untranslatedTitle;
    console.log("Original", untranslatedTitle);
    console.log("Translated: ", translatedTitle);
  }
  sendResponse("Received message");
});
