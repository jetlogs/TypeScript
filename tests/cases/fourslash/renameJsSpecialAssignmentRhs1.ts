/// <reference path="fourslash.ts"/>
// @allowJs: true
// @Filename: a.js
////const foo = {
////    set: function (x) {
////        this._x = x;
////    },
////    copy: function ([|x|]) {
////        this._x = /**/[|x|].prop;
////    }
////};
goTo.marker();
verify.renameLocations(/*findInStrings*/ false, /*findInComments*/ false);