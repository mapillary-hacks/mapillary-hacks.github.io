var currentSlideCount = 0;

function loadSlides () {
  var updatedSlideCount = document.getElementById("slideCount").value;
  var changeValue = 0;
  if (updatedSlideCount > 0) {
    changeValue = updatedSlideCount - currentSlideCount;
    console.log(changeValue);
  }
  if (changeValue > 0) {
    for (i = 0; i < changeValue; i++) {
      var x = (currentSlideCount++)+1;
      $("#slideGallery").append("<div class='square' style='color:#5D6671;background-color:white' id='slide" + (x) + "'><b>Slide " + (x) + "</b><br><form>Image Key:<br><textarea name='content' id='key" + x + "' class='smallTextArea' width=100% height=25 style='color:#5D6671;background-color:#D7DADD''></textarea><br>Slide Title:<br><textarea name='content' id='title" + x + "' class='smallTextArea' width=100% height=25  style='color:#5D6671;background-color:#D7DADD''></textarea><br>Content:<br><textarea name='content' id='content" + x + "' class='contentTextArea' width=100% height=200  style='color:#5D6671;background-color:#D7DADD''></textarea></form></div>")
    };
  } else if (changeValue < 0) {
    for ( i = 0; i < changeValue * -1; i++) {
      var z = (currentSlideCount - i);
      console.log("deleting slide" + z);
      document.getElementById("slide"+z).remove();
    }
  }
  currentSlideCount = updatedSlideCount;
}

function loadOutput() {
  $("#outputForm").empty();
  var images = [];
  var titles = [];
  var content = [];
  var project_title = "'" + document.getElementById("bigtitle").value + "'";
  var project_subtitle = "'" + document.getElementById("subtitle").value + "'";
  for (i=1; i <= currentSlideCount; i++) {
    images.push("'" + document.getElementById("key"+i).value + "'");
    titles.push("'" + document.getElementById("title"+i).value + "'");
    content.push("'" + document.getElementById("content"+i).value + "'");
  };
  $("#outputForm").append("var project_title = " + project_title + ";\n");
  $("#outputForm").append("var project_subtitle = " + project_subtitle + ";\n");
  $("#outputForm").append("var images = [" + images + "];\n");
  $("#outputForm").append("var titles = [" + titles + "];\n");
  $("#outputForm").append("var content = [" + content + "];\n");
};

function saveTextAsFile() {
    var textToWrite = document.getElementById('outputForm').value;
    var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
    var fileNameToSaveAs = document.getElementById("bigtitle").value.replace(/ /g,"_") + ".js";

    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";

    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    downloadLink.click();
};
