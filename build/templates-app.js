angular.module('templates-app', ['collections/index.tpl.html']);

angular.module("collections/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("collections/index.tpl.html",
    "<table cellpadding=\"0\" cellspacing=\"0\">\n" +
    "    <td id=\"collection-list\">\n" +
    "        <h1 class=\"ms-font-xxl\">Home</h1>\n" +
    "        <p class=\"ms-font-m\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias nihil quaerat mollitia, libero quos dolorem ex et quisquam tenetur iste eum cupiditate, dolores dolor molestias maiores quae culpa, non?</p>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <div class=\"ms-CommandBar\" style=\"min-width: 500px\">\n" +
    "            <div class=\"ms-CommandBar-sideCommands\" style=\"float: left;text-align: left;\">\n" +
    "                <div class=\"ms-CommandBarItem\">\n" +
    "                    <div class=\"ms-CommandBarItem-linkWrapper\" >\n" +
    "                        <div class=\"ms-CommandBarItem-link\">\n" +
    "                            <span class=\"ms-CommandBarItem-icon ms-Icon ms-Icon--upload\"></span>\n" +
    "                            <span class=\"ms-CommandBarItem-commandText ms-font-m ms-font-weight-regular\">Import</span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"ms-CommandBarItem\">\n" +
    "                    <div class=\"ms-CommandBarItem-linkWrapper\">\n" +
    "                        <div class=\"ms-CommandBarItem-link\">\n" +
    "                            <span class=\"ms-CommandBarItem-icon ms-Icon ms-Icon--download\"></span>\n" +
    "                            <span class=\"ms-CommandBarItem-commandText ms-font-m ms-font-weight-regular\">Export</span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"ms-CommandBarItem\">\n" +
    "                    <div class=\"ms-CommandBarItem-linkWrapper\">\n" +
    "                        <div class=\"ms-CommandBarItem-link\" >\n" +
    "                            <span class=\"ms-CommandBarItem-icon ms-Icon ms-Icon--reload\"></span>\n" +
    "                            <span class=\"ms-CommandBarItem-commandText ms-font-m ms-font-weight-regular\">Reset</span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"ms-CommandBarItem\">\n" +
    "                    <div class=\"ms-CommandBarItem-linkWrapper\">\n" +
    "                        <div class=\"ms-CommandBarItem-link\">\n" +
    "                            <span class=\"ms-CommandBarItem-icon ms-Icon ms-Icon--mail\"></span>\n" +
    "                            <span class=\"ms-CommandBarItem-commandText ms-font-m ms-font-weight-regular\">Email</span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"ms-CommandBarItem\">\n" +
    "                    <div class=\"ms-CommandBarItem-linkWrapper\">\n" +
    "                        <div class=\"ms-CommandBarItem-link\">\n" +
    "                            <span class=\"ms-CommandBarItem-icon ms-Icon ms-Icon--chat\"></span>\n" +
    "                            <span class=\"ms-CommandBarItem-commandText ms-font-m ms-font-weight-regular\">Comment</span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        \n" +
    "    </td>\n" +
    "</table>");
}]);
