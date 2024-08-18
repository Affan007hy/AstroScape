function showContent(contentId) {
    // Hide all content elements
    var contents = document.getElementsByClassName('content');
    for (var i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
    }
    
    // Show the selected content
    var contentToShow = document.getElementById(contentId);
    if (contentToShow) {
      contentToShow.style.display = 'block';
    }
  }
  