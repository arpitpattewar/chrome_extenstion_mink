function showButton(video_id) {
  let $title_elem = $('h1.title.ytd-video-primary-info-renderer');
  // console.log($title_elem);
  let button_html = "<a class='nammi-btn' target='_blank' href='https://mink.ilostin.com/welcome.html?youtube_id="+video_id+"'>WatchOnMink</a>";
  // let button_html = "<a class='nammi-btn' target='_blank' href='https://www.google.com/'>Nammi</a>";
  let $button = $(button_html).appendTo($title_elem).on("click mouseover", function(e) {
    let video_id = getYoutubeVideoID();
    e.target.href = "https://mink.ilostin.com/welcome.html?youtube_id="+video_id+"";
  });
}

(function() {
  console.log("On YT Video");
  let video_id = getYoutubeVideoID();
  if ( video_id ) {
    console.log(video_id);
    setTimeout(function() {
      showButton(video_id);
    }, 250);
  }
})();
