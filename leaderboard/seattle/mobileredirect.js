var isMobile = function() {
   //console.log("Navigator: " + navigator.userAgent);
   return /(iphone|ipod|ipad|android|blackberry|windows ce|palm|symbian)/i.test(navigator.userAgent);
 };
 if(isMobile()) {
        window.location.href = 'leaderboard/' + cityname + '/m/test.html';
 }
