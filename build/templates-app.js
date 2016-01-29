angular.module('templates-app', ['home/index.tpl.html']);

angular.module("home/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/index.tpl.html",
    "<h1 class=\"ms-font-su\">Home</h1>\n" +
    "<p class=\"ms-font-m\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias nihil quaerat mollitia, libero quos dolorem ex et quisquam tenetur iste eum cupiditate, dolores dolor molestias maiores quae culpa, non?</p>");
}]);
