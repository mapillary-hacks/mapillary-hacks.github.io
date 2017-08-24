var high = [];
var med = [];
var low = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

var maxdate = Date.now(); //don't change this
var mindate = (1503608400000); //set to show epoch milliseconds of the start date
var mindate2 = new Date(mindate).toISOString();

var partnerLogo = 'https://d3rqg5ndc8pbid.cloudfront.net/original/1X/695bb1b126407a23bf745acfa61fcb3b9682debd.png';
var partnerLink = 'https://www.meetup.com/MaptimeSEA/'

var challengeTitle = 'Helsinki Challenge'; //text in the slider
var challengeDate = 'August 15 - September 15, 2017'
var docTitle = 'Complete the Map: Helsinki - Mapillary'; //text next to favicon on browser window

var challengeLng = 24.9384; //center of the map
var challengeLat = 60.1699; //center of the map
var challengeZoom = 14; //zoom for desktop browser
var mobileZoom = 12; //should be challengeZoom minus 2 usually

var facebookShare = 'url.com'; //link for facebook sharing
var twitterShare = 'url.com'; //link for twitter sharing
var emailShare = 'mail.com'; //link for email sharing
