var total_levels = 5;    //0,10,20,...,100, rounding down
var levels = [[],[],[],[],[],[],[],[],[],[],[]];

levels[0] = [8,9,11,16,19,22,23,25,28,32,37,38,39,43,51,59,80,81,50,96,114,132,153,152,156,163,172,191,192,193,194,211,212,213,214,223,224,229,232,241,242,243,245,246,248,249,250,251,252];
levels[1] = [1,4,10,12,13,14,17,18,26,29,31,35,40,44,46,49,65,67,68,72,74,75,79,89,90,94,97,112,128,131,133,137,162,171,173,176,178,183,184,188,196,195,204,206,209,210,216,218,220,222,225,231,233,235,236,238,240,244];
levels[2] = [5,6,15,20,21,27,30,33,42,36,48,53,58,52,61,62,63,64,66,69,76,78,84,92,93,95,98,105,106,111,121,127,129,115,130,139,142,146,150,161,167,169,175,179,182,189,190,197,198,202,203,205,207,208,219,221,227,226,228,230,234,237,247];
levels[3] = [2,3,7,24,34,45,54,57,60,82,83,91,99,108,109,110,113,117,122,135,136,138,141,147,148,149,151,155,157,158,160,159,166,170,174,180,185,186,187,199,200,201,215];
levels[4] = [41,47,55,56,70,71,73,77,85,86,87,88,100,101,102,103,104,107,116,118,119,120,123,124,125,126,134,140,143,144,145,154,164,165,168,177,181,217,239,253,254];

var maxdate = Date.now(); //don't change this
var mindate = (1503633600000); //(1502769600000); //set to show epoch milliseconds of the start date
var mindateISO = new Date(mindate).toISOString();

var partnerLogo = 'https://mapillarydiscourse.s3-eu-west-1.amazonaws.com/optimized/1X/b88062c9c9aa64867b2287b3f6ed48d44415b697_1_690x393.png';
var partnerLink = 'www.bikeottawa.ca'

var challengeTitle = 'Ottawa Challenge'; //text in the slider
var challengeDate = 'August 25 - September 30th, 2017'
var docTitle = 'Complete the Map: Ottawa - Mapillary'; //text next to favicon on browser window

var challengeLng = -75.6972; //center of the map
var challengeLat = 45.4215; //center of the map
var challengeZoom = 9; //zoom for desktop browser
var mobileZoom = 8; //should be challengeZoom minus 2 usually

var facebookShare = 'http://www.facebook.com/sharer.php?u=https%3A%2F%2Fmapillary-hacks.github.io%2Fleaderboard%2Fottawa%2F&p[title]=Complete%20the%20Map%20Ottawa%20challenge%3A%20'; //link for facebook sharing
var twitterShare = 'https://twitter.com/intent/tweet?text=Complete%20the%20Map%20Ottawa%20challenge%3A%20&url=https%3A%2F%2Fmapillary-hacks.github.io%2Fleaderboard%2Fottawa%2F'; //link for twitter sharing
var emailShare = 'mailto:someone@example.com?Subject=Complete%20the%20Map%20Ottawa%20challenge%3A%20&body=https%3A%2F%2Fmapillary-hacks.github.io%2Fleaderboard%2Fottawa%2F'; //link for email sharing
