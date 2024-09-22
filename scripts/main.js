var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Mozilla_Firefox_0.8_logo.svg/1920px-Mozilla_Firefox_0.8_logo.svg.png");
  } else {
    myImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/1/16/Firefox_logo%2C_2017.png");
  }
};
