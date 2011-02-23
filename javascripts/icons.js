/*
 * Link panel of SVG Icons
 * =======================
 *
 * Exports only a populate function which is called with the
 * id of the div to be made into the link panel, and the icon
 * sets to be used in the link panel.
 *
 * An icon set is an array of javascript objects like this:
 *
 *  {"name" : "github",   "path" : github,   "link" : "http://github.com/kanej"}
 *
 * */
var kanej = {};
kanej.icons = function() {

  function createIcon(paper, x, y, icon_path, link_address) {
    var icon_colour = "#000";
    var circle_colour = "#FFF";
    var circle_higlight_colour = "#9BD2A5";

    var circle = paper.circle(x, y, 47)
      .attr("fill", circle_colour)
      .attr("stroke-width", "0px")
      .attr("stroke", "#000");

    circle.node.onmouseover = function() {
      circle.attr("fill", circle_higlight_colour);
    };

    circle.node.onmouseout = function() {
      circle.attr("fill", circle_colour);
    }

    circle.node.onclick = function() {
      window.location = link_address;
    };

    var icon = paper.path(icon_path)
      .attr({fill: icon_colour, stroke: "none"})
      .scale(2.5,2.5)
      .translate(x - 16, y - 15);

    icon.node.onmouseover = function() {
      circle.attr("fill", circle_higlight_colour);
    };

    icon.node.onmouseout = function() {
      circle.attr("fill", circle_colour);
    }

    icon.node.onclick = function() {
      window.location = link_address;
    };

  }

  function populate(link_panel_id, icon_sets) {
    var icon_width = 100;
    var intericon_space = 20;
    var link_panel_width = (icon_sets.length * icon_width) + ((icon_sets.length - 1) * intericon_space);

    var paper = Raphael(link_panel_id, link_panel_width, 100);

    var i = 0;
    for (i = 0; i < icon_sets.length; i++) {
      var icon_set = icon_sets[i];
      var starting_x = ((i + 1) * 120) - 70;
      createIcon(paper, starting_x, 50, icon_set.path, icon_set.link);
    }
  }

  return {
    "populate": populate
  }
}();
