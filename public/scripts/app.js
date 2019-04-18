/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Test / driver code (temporary). Eventually will get this from the server.
$(document).ready(function() {
  $(".new-tweet form input[type='submit']").click(function(event) {
    event.preventDefault();
    const $form = $(this);
    // how do we handle this?
    if ($("form textarea").val().length > 140) {
      return alert("Too many characters: Limit 140");
    } else if (
      $("form textarea").val() === "" ||
      $("form textarea").val() === null
    ) {
      return alert("Empty field");
    } else {
      $.ajax({
        type: "POST",
        url: $(".new-tweet form").attr("action"),
        data: $(".new-tweet form").serialize(),
        success: function(data) {
          loadTweets();
        }
      });
    }
    return false;
  });

  function loadTweets() {
    $.ajax({
      type: "GET",
      url: "/tweets",
      data: "json",
      success: function(data) {
        renderTweets(data);
      }
    });
  }
  loadTweets();

  function renderTweets(tweets) {
    // loops through tweets
    //   calls createTweetElement for each tweet
    //   takes return value and appends it to the tweets container
    for (let tweet of tweets) {
      if (tweet.user) {
        $("#new-tweet-container").prepend(createTweetElement(tweet)); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
      }
    }
  }

  function createTweetElement(tweet) {
    const imgElement = tweet.user.avatars.small;
    const nameElement = tweet.user.name;
    const handleElement = tweet.user.handle;
    const contentElement = tweet.content.text;
    const timeStampElement = tweet.created_at;

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
});
