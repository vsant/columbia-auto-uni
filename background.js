chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  if (request.method == "getUniPw")
    sendResponse({uni: localStorage["uni"], pw: localStorage["pw"]});
  else
    sendResponse({});
});

var firstRun = (localStorage['firstRun'] == 'true');
if (!firstRun) {
  localStorage['firstRun'] = 'true';
  chrome.tabs.create({url: "options.html"});
}
