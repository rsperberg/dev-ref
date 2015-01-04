//  script to insert id's for each section taken from an Angular guide document
/*  This Source Code Form is subject to the terms of the Mozilla Public
 *  License, v. 2.0. If a copy of the MPL was not distributed with this
 *  file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 *  Owner: rsperberg@gmail.com
 *  @license MPL 2.0
 *  @copyright Roger Sperberg 2014
 */


var fs = require("fs");
// var allTogether = '/Users/sperberx/dev/dev-ref/angularjs/ng-guide-all3.html';
// var combinedFilesPath = '/Users/sperberx/dev/dev-ref/angularjs/';  // desktop version
var combinedFilesPath = '/Users/rsperberg/dev/dev-ref/angularjs/';   // laptop version
var combinedFiles = 'ng-guide-all3';
var combinedFilesMod = 'ng-guide-all3-mod';
var extension = '.html';
var pathAndFile = combinedFilesPath + combinedFiles + extension;   // Users/sperberx/dev/dev-ref/angularjs/ng-guide-all3.html
var pathAndFileMod = combinedFilesPath + combinedFilesMod + extension;

var idNames = {
'Introduction' : 'introduction',
'Conceptual Overview' : 'concepts',
'Data Binding' : 'databinding',
'Controllers' : 'controller',
'Services' : 'services',
'Scopes' : 'scope',
'Dependency Injection' : 'di',
'Templates' : 'templates',
'Expressions' : 'expression',
'Filters' : 'filter',
'Forms' : 'forms',
'Directives' : 'directive',
'Animations' : 'animations',
'Modules' : 'module',
'HTML Compiler' : 'compiler',
'Providers' : 'providers',
'Bootstrap' : 'bootstrap',
'Unit Testing' : 'unit-testing',
'E2E Testing' : 'e2e-testing',
'Using $location' : '$location',
'Working With CSS' : 'css-styling',
'i18n and l10n' : 'i18n',
'Security' : 'security',
'Accessibility' : 'accessibility',
'Internet Explorer Compatibility' : 'ie',
'Running in Production' : 'production',
'Migrating from Previous Versions' : 'migration'
}

//var sectionName = /<div class="document-section"><span class="guide-doc">([A-Za-z128$-]*)</;
//search for:
//<div class="document-section"><span class="guide-doc">idNames[i]<
//
//replace with
//<div id="{idName[i]}" class="document-section"><span class="guide-doc">idNames[i]<

//var searchPrefix = /class="document-section"><span class="guide-doc">/;
// var searchTitle = idNames[i];

var allKeysArray = Object.keys(idNames);
// Object.keys(idNames).forEach(function(key) {
// });
//Object.keys(idNames).forEach(function(key) {
 //   console.log('The key is ' + key + ' and the value is ' + idNames[key]);
 //   console.log(idNames[key]);
 //});

var aFile = fs.readFile(pathAndFile, 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }
    for (var i = allKeysArray.length - 1; i >= 0; i--) {
        thisTitle = allKeysArray[i];
        titleSearch = 'class="document-section"><span class="guide-doc">' + thisTitle;
        idAdd = 'id="' + idNames[thisTitle] + '" ' +titleSearch;
        data = data.replace(titleSearch, idAdd);
    };
    // write the file
fs.writeFile(pathAndFileMod, data, function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
});

 //   console.log(data);
//        var searchPrefix = 'class="document-section"><span class="guide-doc">';
//        var searchTitle = idNames[i];
//        var searchCombo = searchPrefix + searchTitle;
//        var searchRegex = /searchCombo/;
 //       var searchRegex = sectionName;

    // var sectionNameRegex = /<div class="document-section"><span class="guide-doc">([A-Za-z128$-]*)</;
    // var result = sectionNameRegex.exec(data);
    // console.log('match is ', result[0]);
    // console.log('parenthetical match is ', result[1]);
    // console.log('index of located match is ', result.index);
    // console.log('lastIndex of located match is ', result.lastIndex);



});


