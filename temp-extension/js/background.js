// create a popup menu
// object to store contextMenus we'll create
const contextMenus = {};

contextMenus.createBodyHack = 
    chrome.contextMenus.create(         // add eventListener to context menu to handle clicks
      {"title": "Generate BodyHack"},   // object parameter: pass properties to add to right-click menu
       function(){
        if (chrome.runtime.lastError){
            console.error(chrome.runtime.lastError.message);
        }
    })

chrome.contextMenus.onClicked.addListener(contextMenuHandler);

function contextMenuHandler(info, tab){ // executes a contextMenu 
    if (info.menuItemId === contextMenus.createBodyHack){
        chrome.tabs.executeScript({
          file: 'js/main.js'
        });
    }
}


// myURLs contains the websites where you want your content script to run (runs automatically?)
const myURLs = ['www.facebook.com', 'www.reddit.com', 'www.youtube.com','www.instagram.com', 'twitter.com', 'www.pinterest.com', 'www.amazon.com', 'www.hulu.com', 'www.netflix.com'];

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status == 'complete' && myURLs.some(url => tab.url.includes(url))) {
        chrome.tabs.executeScript(tabId,{file:'js/main.js'},()=>{
            chrome.tabs.executeScript(tabId,{file:'js/main.js'});
        });
        /*chrome.pageAction.getPopup(tabId, function(){ console.log("Getting Popup")}).then(console.log("Got Popup"));*/
    }
});