function getYoutubeVideoID(){
  const START_PART='https://www.youtube.com/watch?v=';
  let video_id = null;
  let video_url = document.querySelector("link[rel='canonical']").getAttribute("href");
  if ( video_url.startsWith(START_PART) ){
    video_id = video_url.slice(START_PART.length);
  }
  return video_id;
}