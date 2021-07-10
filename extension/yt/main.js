function showButton(video_id) {
  if ( document.getElementById("nammi_btn") ) {
    document.getElementById("nammi_btn").remove();
  }
  let $title_elem = $('h1.title.ytd-video-primary-info-renderer');
  let button_html = "<a id='nammi_btn' class='nammi-btn' target='_blank' href='https://mink.ilostin.com/welcome.html?youtube_id="+video_id+"'>WatchOnMink</a>";
  let $button = $(button_html).appendTo($title_elem);
}

let videoLoadCheckerHandlerId = null;

let historyChageHander = () => {
  if ( videoLoadCheckerHandlerId ) {
    clearInterval(videoLoadCheckerHandlerId);
    videoLoadCheckerHandlerId = null;
  }

  if ( window.location.href.startsWith("https://www.youtube.com/watch?v=") ) {
    let video_id = getYoutubeVideoID();
    videoLoadCheckerHandlerId = setInterval(() => {
      if (document.querySelector('h1.title.ytd-video-primary-info-renderer') ) {
        clearInterval(videoLoadCheckerHandlerId);
        videoLoadCheckerHandlerId = null;

        showButton(video_id);
      }
    }, 50);
  }
};

let lastUrl = window.location.href;

let urlChangeCheckerIntervalId = setInterval(() => {
  if ( lastUrl !== window.location.href ) {
    lastUrl = window.location.href;
    historyChageHander();
  }
}, 100);

(function() {
  console.log("On YT Video");
  historyChageHander();
})();