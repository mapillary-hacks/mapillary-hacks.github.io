var total_levels = 5;    //0,10,20,...,100, rounding down
var levels = [[],[],[],[],[],[],[],[],[],[],[]];

levels[0]=[8, 9, 11, 16, 19, 22, 23, 25, 28, 32, 33, 35, 38, 39, 37, 43, 51, 50, 52, 53, 54, 59, 67, 68, 70, 72, 81, 80, 89, 96, 114, 132, 134, 137, 152, 153, 46, 156, 159, 163, 172, 175, 176, 178, 179, 191, 192, 194, 193, 196, 197, 198, 211, 212, 213, 215, 214, 216, 222, 223, 224, 229, 231, 232, 233, 238, 241, 242, 243, 245, 246, 248, 249, 250, 251];
levels[1]=[1, 4, 10, 12, 13, 14, 17, 18, 26, 29, 31, 34, 40, 44, 48, 49, 61, 62, 63, 65, 74, 75, 76, 78, 79, 84, 85, 86, 90, 93, 92, 94, 97, 100, 101, 112, 116, 128, 131, 133, 138, 139, 141, 154, 160, 162, 171, 173, 177, 183, 184, 188, 195, 204, 205, 206, 207, 209, 210, 218, 220, 221, 225, 230, 234, 235, 236, 240, 244, 247];
levels[2]=[5, 6, 15, 20, 21, 24, 27, 30, 36, 42, 45, 47, 57, 58, 60, 66, 69, 77, 82, 83, 87, 95, 98, 102, 105, 106, 111, 115, 119, 121, 122, 127, 129, 130, 140, 142, 146, 147, 150, 155, 157, 158, 161, 166, 167, 169, 174, 180, 182, 187, 189, 190, 199, 200, 202, 203, 208, 219, 226, 227, 228, 237];
levels[3]=[2, 3, 7, 41, 55, 56, 64, 71, 73, 91, 99, 107, 108, 109, 110, 113, 117, 118, 120, 123, 135, 136, 148, 149, 151, 170, 185, 186, 201, 239];
levels[4]=[88, 103, 104, 124, 125, 126, 143, 144, 145, 164, 165, 168, 181, 217];

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
