const dadoss = document.querySelector("#formP")
const list = document.querySelector("#tw")

dadoss.addEventListener('submit', function (e) {
    e.preventDefault();
    const userNameInput = dadoss.elements.username.value;
    const userTweetInput = dadoss.elements.tweet.value;
    userNameInput.value = "";
    userTweetInput.value = "";



    const newTweet = document.createElement("li");
    const bTag = document.createElement("b");

    bTag.append(userNameInput);
    newTweet.append(bTag);
    newTweet.append(`-${userTweetInput}`)
    console.log(newTweet)
    list.append(newTweet);

    form.reset();
})







