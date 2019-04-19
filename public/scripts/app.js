/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Test / driver code (temporary). Eventually will get this from the server.
//Calculate the time difference

//Stack overflow function for time count:
function timeDiff(time1, time2) {
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  let diff = time1 - time2;

  if (diff < msPerMinute) {
    return Math.round(diff / 1000) + " seconds ago";
  } else if (diff < msPerHour) {
    return Math.round(diff / msPerMinute) + " minutes ago";
  } else if (diff < msPerDay) {
    return Math.round(diff / msPerHour) + " hours ago";
  } else if (diff < msPerMonth) {
    return Math.round(diff / msPerDay) + " days ago";
  } else if (diff < msPerYear) {
    return Math.round(diff / msPerMonth) + " months ago";
  } else {
    return Math.round(diff / msPerYear) + " years ago";
  }
}

$(document).ready(function() {
  $(".new-tweet form input[type='submit']").click(function(event) {
    event.preventDefault();
    const $form = $(this);
    // how do we handle this?
    if ($("form textarea").val().length > 140) {
      $(".error1").css("visibility", "visible");
      $(".error2").css("visibility", "hidden");
    } else if (
      $("form textarea").val() === "" ||
      $("form textarea").val() === null
    ) {
      $(".error2").css("visibility", "visible");
      $(".error1").css("visibility", "hidden");
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
    const timeStampElement = timeDiff(Date.now(), tweet.created_at);

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
