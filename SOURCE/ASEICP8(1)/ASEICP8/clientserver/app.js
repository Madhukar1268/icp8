'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [])


    .controller('View1Ctrl', function ($scope, $http) {
        $scope.venueList = new Array();
        $scope.mostRecentReview;
        $scope.getText = function () {
            var srctxt = document.getElementById("srctxt").value;

            var srclng = document.getElementById("srclng").value;
            var tgtlng = document.getElementById("tgtlng").value;

            if (srctxt != "" && srclng != "" && tgtlng != "") {


               var handler = $http.get("https://translate.yandex.net/api/v1.5/tr.json/translate?" +
                "key=trnsl.1.1.20180206T231433Z.3ec06fb4d394d903." +
                "07e9547f7d03a98174830ddd8024a84584e6b1ad&text=" + srctxt +"&" +
                "lang="+srclng+"-"+tgtlng+"&[format=plain]&[options=1]&[callback=set]");


                handler.success(function (data) {
                  console.log(data);
                  alert(data.text);
                    document.getElementById("tgttxt").value = data.text;

                })
                handler.error(function (data) {
                    alert("There was some error processing your request. Please try after some time.");
                });
            }
        }


    });
