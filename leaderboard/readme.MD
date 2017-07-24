# Mapillary Leaderboard
## Open Source Tools for Creating Your Own Challenge

In order to create your own #CompleteTheMap challenge, follow these instructions!

What you'll need:

1. A clone of the entire `template` folder in this repo
2. A place to host your challenge page, such as on Github Pages
3. A tool such as ArcMap, ArcGIS Pro, or QGIS to create a grid for your challenge (square.geojson)
4. An idea of dates and location for the challenge
5. Time to monitor the challenge and update the square colors as you go

If you have these ready, let's get started below.

**Step 1: Creating your `square.geojson` file**



**Step 2: Configuring `settings.js`**

The following variable items in `settings.js` can be modified to fit your challenge:

1. `high`, `med`, and `low` are arrays which contain the ID numbers of grid squares that have high, medium, or low coverage (green, yellow, or red). You should manually inspect the squares for what you believe the coverage level is based on the contest contributions, and add the ID numbers to each array as appropriate.
2. `mindate` can be adjusted to show the start date of the competition. It must be be in Epoch Milliseconds since the start of Unix time, which you calculate with [tools such as this one](http://www.ruddwire.com/handy-code/date-to-millisecond-calculators/#.WXZxXITyuXI). Do not edit `maxdate` or `mindate2`.
3. You can indicate any partner logos, or logos of your city or organization as needed, by linking to an image file in `partnerLogo` and putting a URL to direct to when clicked in `partnerLink`. You can leave these blank (but don't delete them) such as `var partnerLink;` if you don't want them to appear.
4.You can edit the details of your challenge with `challengeTitle` which fill in the text adjacent to the time slider, with `challengeDate` which appears also next to the slider and should be a date range in any format, and `docTitle` which is what the browser tab will display.
5. The location and view of the map can be adjusted with `challengeLng` and `challengeLat` indicating the map center, `challengeZoom` indicating how zoomed in the map should be (a value of 1 would show the whole world, a value of 20 would get to city block level), and `mobileZoom` should be `challengeZoom` minus 2, but can be adjusted as needed, to fit a mobile screen.
6. You can add in any share links for Facebook, Twitter, or an email with `facebookShare`, `twitterShare`, or `emailShare`. 

**Step 3: Configuring the challenge description in `readme.md`**

In the `readme.md` file, you can being editing and you'll notice some suggested variables marked with brackets, such as `<city>` where you should insert your city name. These are invisible usually in the rendered readme, but only visible in the editing mode. Scan this file to ensure you fill in the correct dates and locations, or create your own totally unique `readme.md` as you see fit. This is a great place to share information about the time, place, conditions, and other details of your challenge and send it out for participants to read.

**Step 4: Adjusting the scores in `settings.js`**

It is suggested that you check the map once a day to see if the coverage in each grid has moved from `low` to `medium` or `high`. Usually we suggest anything under 1/2 coverage is `low`, and anything above 1/2 is `medium`, and anything that's nearly complete is `high`. Marking this manually gives you full control, but also requires attention. There is currently not an automated way to calculate this, but if you decide to build such a function, don't hesitate to brag about!

