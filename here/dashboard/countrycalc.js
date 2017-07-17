function countryCalc(c) {
    var currentCode = codes[c];
    var currentCountry = countries[c];
    var testurl = 'https://a.mapillary.com/v3/leaderboard/images?per_page=1000&client_id=UTZhSnNFdGpxSEFFREUwb01GYzlXZzoyZjRiNjZiODRlNTA2ZTU3&usernames=' + users + '&iso_countries=' + currentCode;
    console.log(testurl);
    console.log(currentCountry);
    var imageTotal = 0;
    var userTotal = 0;
    $.ajax({
        dataType: "json",
        url: testurl,
        async: false,
        success: function (stats) {
          userTotal = stats.length;
          for (n = 0; n < stats.length; n++) {
            var imageCount = stats[n]["image_count"];
            imageTotal = imageTotal + imageCount;
            console.log(currentCountry + ' count is ' + imageTotal);
            }
        }
      });
    totals.push(imageTotal);
    usertotals.push(userTotal);
    $('#table').append('<tr id="subtr"><td>' + currentCountry + '</td><td>' + imageTotal + '</td><td>' + userTotal + '</td><td>' + 0 + '</td></tr>');
}
