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

  const data = [
    {
      user: {
        name: "Newton",
        avatars: {
          small:
            "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          regular:
            "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          large:
            "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        handle: "@SirIsaac"
      },
      content: {
        text:
          "If I have seen further it is by standing on the shoulders of giants"
      },
      created_at: 1461116232227
    },
    {
      user: {
        name: "Descartes",
        avatars: {
          small:
            "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          regular:
            "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          large:
            "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        handle: "@rd"
      },
      content: {
        text: "Je pense , donc je suis"
      },
      created_at: 1461113959088
    },
    {
      user: {
        name: "Johann von Goethe",
        avatars: {
          small:
            "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          regular:
            "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          large:
            "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        handle: "@johann49"
      },
      content: {
        text: "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      created_at: 1461113796368
    }
  ];

  function renderTweets(tweets) {
    // loops through tweets
    //   calls createTweetElement for each tweet
    //   takes return value and appends it to the tweets container
    for (let tweet of tweets) {
      if (tweet.user) {
        $("#new-tweet-container").append(createTweetElement(tweet)); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
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
  renderTweets(data);
});

// {/* <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script> */}

//   $(function() {
//     var $button = $("#load-more-posts");
//     $button.on("click", function() {
//       console.log("Button clicked, performing ajax call...");
//       $.ajax("more-posts.html", { method: "GET" }).then(function(
//         morePostsHtml
//       ) {
//         console.log("Success: ", morePostsHtml);
//         $button.replaceWith(morePostsHtml);
//       });
//     });
//   });
