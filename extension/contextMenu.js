  
const contextMenuId = "minkMenu";

function openLink(info,tab) {
  if (info.menuItemId !== contextMenuId) {
    return;
  }
  let url = info.linkUrl;
  if(!url){
    url = info.pageUrl;

  }

   chrome.tabs.create({  
     url: "https://mink.ilostin.com/welcome.html?youtube_id="+url.replace("https://www.youtube.com/watch?v=","")
   });
}
chrome.contextMenus.create({
  title: "open with player", 
  contexts:["link","page"],
  documentUrlPatterns: ["https://www.youtube.com/*"],
  id: contextMenuId
});
chrome.contextMenus.onClicked.addListener(openLink)
