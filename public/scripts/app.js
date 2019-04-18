/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Test / driver code (temporary). Eventually will get this from the server.
$(document).ready(function() {
  const tweetData = {
    user: {
      name: "Newton",
      avatars: {
        small: "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        regular: "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        large: "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      handle: "@SirIsaac"
    },
    content: {
      text:
        "If I have seen further it is by standing on the shoulders of giants"
    },
    created_at: 1461116232227
  };

  // function renderTweets(tweets) {
  //   // loops through tweets
  //   // calls createTweetElement for each tweet
  //   // takes return value and appends it to the tweets container
  // }

  function createTweetElement(tweet) {
    const imgElement = tweetData.user.avatars.small;
    const nameElement = tweetData.user.name;
    const handleElement = tweetData.user.handle;
    const contentElement = tweetData.content.text;
    const timeStampElement = tweetData.created_at;

    let $img = $("<img>")
      .addClass("avatar")
      .attr("src", imgElement);
    let $name = $("<h3>")
      .addClass("avatar-name")
      .text(nameElement);
    let $handle = $("<h4>")
      .addClass("handle")
      .text(handleElement);
    let $content = $("<p>").text(contentElement);
    let $footer = $("<footer>")
      .addClass("tweet-footer")
      .text(timeStampElement);
    const $tweet = $("<article>")
      .addClass("tweet-container")
      .append($img, $name, $handle, $content, $footer);
    return $tweet;
  }
  const $tweet = createTweetElement(tweetData);
  console.log($tweet);
  $("#new-tweet-container").append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
}); // renderTweets(data);
