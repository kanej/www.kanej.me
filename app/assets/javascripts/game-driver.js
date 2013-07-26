console.log("Game driver is loading...");

var displayIcons = [
  {elementId: "github-icon", path: icons.paths["github"], link: "http://github.com/kanej"},
  {elementId: "twitter-icon", path: icons.paths["twitter"], link: "http://twitter.com/john_kane"},
  {elementId: "linkedin-icon", path: icons.paths["linkedin"], link: "http://uk.linkedin.com/in/johnkane84"},
];

var populateIcons = function() {
  for(var i in displayIcons) {
    var icon = displayIcons[i];
    icons.create(icon.elementId, icon.path, icon.link);
  }
}

populateIcons();
