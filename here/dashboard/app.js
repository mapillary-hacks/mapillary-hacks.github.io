var users = [];
var userkeys = [];
var keysUTM = [];
var keysNonUTM = [];
var usersNonUTM = [];
var usersUTM = [];
var countries = ["Albania","Armenia","Azerbaijan","Belarus","Bosnia and Herzegovina","Bulgaria","Croatia","Cyprus","Czech Republic","Estonia","F. Yugoslav Repub. of Macedonia","Georgia","Greece","Hungary","Israel","Kazakhstan","Kosovo","Kyrgyzstan","Latvia","Lithuania","Moldova","Montenegro","Poland","Romania","Russia","Serbia","Slovakia","Slovenia","Tajikistan","Turkmenistan","Ukraine","Uzbekistan","Afghanistan","Algeria","Angola","Bahrain","Benin","Botswana","Burkina Faso","Burundi","Cameroon","Cape Verde","Central African Republic","Chad","Comoros","Congo - Democratic Republic","Congo - Republic of the","Cote D'Ivoire (Ivory Coast)","Djibouti","Egypt","Equatorial Guinea","Eritrea","Ethiopia","French Southern Territories","French-Reunion","Gabon","Gambia","Ghana","Guinea","Guinea-Bissau","Heard Island and McDonald Islands","Iran","Iraq","Jordan","Kenya","Kuwait","Lebanon","Lesotho","Liberia","Libya","Madagascar","Malawi","Mali","Mauritania","Mauritius","Mayotte","Morocco","Mozambique","Namibia","Niger","Nigeria","Oman","Pakistan","Palestine","Qatar","Rwanda","Saint Helena","Sao Tome and Principe","Saudi Arabia","Senegal","Seychelles","Sierra Leone","Somalia","South Africa","South Sudan","Sudan","Swaziland","Syria","Tanzania","Togo","Tunisia","Turkey","Uganda","United Arab Emirates","Western Sahara","Yemen","Zambia","Zimbabwe","Andorra","Austria","Belgium","Denmark","Great Britain","Faroe Islands","Finland","France","Germany","Gibraltar","Greenland","Guernsey","Iceland","Ireland","Isle of Man","Italy","Jersey","Liechtenstein","Luxembourg","Malta","Monaco","Netherlands","Norway","Portugal","San Marino","Spain","Svalbard","Sweden","Switzerland","Vatican City"];
var codes = ["AL","AM","AZ","BY","BA","BG","HR","CY","CZ","EE","MK","GE","GR","HU","IL","KZ","XK","KG","LV","LT","MD","ME","PL","RO","RU","RS","SK","SI","TJ","TM","UA","UZ","AF","DZ","AO","BH","BJ","BW","BF","BI","CM","CV","CF","TD","KM","CD","CG","CI","DJ","EG","GQ","ER","ET","TF","RE","GA","GM","GH","GN","GW","HM","IR","IQ","JO","KE","KW","LB","LS","LR","LY","MG","MW","ML","MR","MU","YT","MA","MZ","NA","NE","NG","OM","PK","PS","QA","RW","SH","ST","SA","SN","SC","SL","SO","ZA","SS","SD","SZ","SY","TZ","TG","TN","TR","UG","AE","EH","YE","ZM","ZW","AD","AT","BE","DK","GB","FO","FI","FR","DE","GI","GL","GG","IS","IE","IM","IT","JE","LI","LU","MT","MC","NL","NO","PT","SM","ES","SJ","SE","CH","VA"];
var countries2 = ['Afghanistan','Åland Islands','Albania','Algeria','American Samoa','Andorra','Angola','Anguilla','Antarctica','Antigua and Barbuda','Argentina','Armenia','Aruba','Australia','Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bermuda','Bhutan','Bolivia (Plurinational State of)','Bonaire','Sint Eustatius and Saba','Bosnia and Herzegovina','Botswana','Bouvet Island','Brazil','British Indian Ocean Territory','Brunei Darussalam','Bulgaria','Burkina Faso','Burundi','Cambodia','Cameroon','Canada','Cabo Verde','Cayman Islands','Central African Republic','Chad','Chile','China','Christmas Island','Cocos (Keeling) Islands','Colombia','Comoros','Congo','Congo (Democratic Republic of the)','Cook Islands','Costa Rica','Côte d Ivoire','Croatia','Cuba','Curaçao','Cyprus','Czech Republic','Denmark','Djibouti','Dominica','Dominican Republic','Ecuador','Egypt','El Salvador','Equatorial Guinea','Eritrea','Estonia','Ethiopia','Falkland Islands (Malvinas)','Faroe Islands','Fiji','Finland','France','French Guiana','French Polynesia','French Southern Territories','Gabon','Gambia','Georgia','Germany','Ghana','Gibraltar','Greece','Greenland','Grenada','Guadeloupe','Guam','Guatemala','Guernsey','Guinea','Guinea-Bissau','Guyana','Haiti','Heard Island and McDonald Islands','Holy See','Honduras','Hong Kong','Hungary','Iceland','India','Indonesia','Iran (Islamic Republic of)','Iraq','Ireland','Isle of Man','Israel','Italy','Jamaica','Japan','Jersey','Jordan','Kazakhstan','Kenya','Kiribati','Korea (Democratic Peoples Republic of)','Korea (Republic of)','Kuwait','Kyrgyzstan','Lao Peoples Democratic Republic','Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Macao','Macedonia (the former Yugoslav Republic of)','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Martinique','Mauritania','Mauritius','Mayotte','Mexico','Micronesia (Federated States of)','Moldova (Republic of)','Monaco','Mongolia','Montenegro','Montserrat','Morocco','Mozambique','Myanmar','Namibia','Nauru','Nepal','Netherlands','New Caledonia','New Zealand','Nicaragua','Niger','Nigeria','Niue','Norfolk Island','Northern Mariana Islands','Norway','Oman','Pakistan','Palau','"Palestine',' State of"','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Pitcairn','Poland','Portugal','Puerto Rico','Qatar','Réunion','Romania','Russian Federation','Rwanda','Saint Barthélemy','"Saint Helena',' Ascension and Tristan da Cunha','Saint Kitts and Nevis','Saint Lucia','Saint Martin (French part)','Saint Pierre and Miquelon','Saint Vincent and the Grenadines','Samoa','San Marino','Sao Tome and Principe','Saudi Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Sint Maarten (Dutch part)','Slovakia','Slovenia','Solomon Islands','Somalia','South Africa','South Georgia and the South Sandwich Islands','South Sudan','Spain','Sri Lanka','Sudan','Suriname','Svalbard and Jan Mayen','Swaziland','Sweden','Switzerland','Syrian Arab Republic','"Taiwan',' Province of China"','Tajikistan','"Tanzania',' United Republic of"','Thailand','Timor-Leste','Togo','Tokelau','Tonga','Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Turks and Caicos Islands','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom of Great Britain and Northern Ireland','United States of America','United States Minor Outlying Islands','Uruguay','Uzbekistan','Vanuatu','Venezuela (Bolivarian Republic of)','Viet Nam','Virgin Islands (British)','Virgin Islands (U.S.)','Wallis and Futuna','Western Sahara','Yemen','Zambia','Zimbabwe'];
var codes2 = ['AF','AX','AL','DZ','AS','AD','AO','AI','AQ','AG','AR','AM','AW','AU','AT','AZ','BS','BH','BD','BB','BY','BE','BZ','BJ','BM','BT','BO','BQ','BA','BW','BV','BR','IO','BN','BG','BF','BI','KH','CM','CA','CV','KY','CF','TD','CL','CN','CX','CC','CO','KM','CG','CD','CK','CR','CI','HR','CU','CW','CY','CZ','DK','DJ','DM','DO','EC','EG','SV','GQ','ER','EE','ET','FK','FO','FJ','FI','FR','GF','PF','TF','GA','GM','GE','DE','GH','GI','GR','GL','GD','GP','GU','GT','GG','GN','GW','GY','HT','HM','VA','HN','HK','HU','IS','IN','ID','IR','IQ','IE','IM','IL','IT','JM','JP','JE','JO','KZ','KE','KI','KP','KR','KW','KG','LA','LV','LB','LS','LR','LY','LI','LT','LU','MO','MK','MG','MW','MY','MV','ML','MT','MH','MQ','MR','MU','YT','MX','FM','MD','MC','MN','ME','MS','MA','MZ','MM','NA','NR','NP','NL','NC','NZ','NI','NE','NG','NU','NF','MP','NO','OM','PK','PW','PS','PA','PG','PY','PE','PH','PN','PL','PT','PR','QA','RE','RO','RU','RW','BL','SH','KN','LC','MF','PM','VC','WS','SM','ST','SA','SN','RS','SC','SL','SG','SX','SK','SI','SB','SO','ZA','GS','SS','ES','LK','SD','SR','SJ','SZ','SE','CH','SY','TW','TJ','TZ','TH','TL','TG','TK','TO','TT','TN','TR','TM','TC','TV','UG','UA','AE','GB','US','UM','UY','UZ','VU','VE','VN','VG','VI','WF','EH','YE','ZM','ZW'];
var km = ['10.50128911','33.2602101','0','246.1788947','10.56422244','565.8862','269.9205814','1117.249922','0','4872.622043','0','3343.463277','388.8322779','0','110.2607614','108.89995082492716','2144.234672','4325.241742','1487.624244','70.75769612','1007.638484','1092.635224','6275.680516','0','63.98321491','0.014771715','0','2337.074909','2503.268022','194.8668796','543.4887828','7.00027229803','0','0','4719.551226','0','10925.00511','6999.997941','10778.1305','0.007364365','2.446986762','2046.171134','721.7964462','114.2071926','282.7197227','1316.05147','1143.677286','50.50097868','9760.792068','0.141609796','51.61711537','180.3746208'];
var totals = [];
var usertotals = [];
var imagesGrandTotal = 0;
var kmGrandTotal = 0;
var starttime = '';
var endtime = '';

function getUsers() {
  $.ajax({
      dataType: "json",
      url: 'https://s3-eu-west-1.amazonaws.com/static.mapillary.com/dump_here_utm.json',
      async: false,
      success: function (dump) {
        userTotal = dump.users.length;
        console.log("There are a total of " + userTotal + " users.");
        for (i = 0; i < userTotal; i++) {
          var currentUser = dump.users[i];
          userkeys.push(currentUser.userkey);
          if (currentUser.source == 'cta') {
            keysUTM.push(currentUser.userkey);
            usersUTM.push(currentUser.username);
          } else {
            keysNonUTM.push(currentUser.userkey);
            usersNonUTM.push(currentUser.username);
          }
        }
      }
    });
}

function loadTable() {
  var today = new Date();
  $('#updatedDate').append('<center><h5>Last updated on ' + today + '</h5></center>');
  runAjax(starttime, endtime);
}

function sortTable(col) {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("table");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("TR");
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[col];
      y = rows[i + 1].getElementsByTagName("TD")[col];
      //check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch= true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

function sortTable2(col) {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("table");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("TR");
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[col];
      y = rows[i + 1].getElementsByTagName("TD")[col];
      //check if the two rows should switch place:
      if (parseInt(x.innerHTML) < parseInt(y.innerHTML)) {
        //if so, mark as a switch and break the loop:
        shouldSwitch= true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

function formatThousands(n, dp){
  var s = ''+(Math.floor(n)), d = n % 1, i = s.length, r = '';
  while ( (i -= 3) > 0 ) { r = ',' + s.substr(i, 3) + r; }
  return s.substr(0, i + 3) + r +
    (d ? '.' + Math.round(d * Math.pow(10, dp || 2)) : '');
};

function calculateTotals() {
  $('#totalTable').empty();
  $('#totalTable').append('<tr id="subtr"><th><h5><b>Total Countries: ' + countries.length + '</h5></th><th><h5><b>Total Images: ' + formatThousands(imagesGrandTotal) + '</h5></th><th><h5><b>Total Kilometers: ' + formatThousands(kmGrandTotal) + '</h5></th><th><h5><b>Total UTM Users: ' + keysUTM.length + '</h5></th><th><h5><b>Total non-UTM Users: ' + keysNonUTM.length + '</h5></th></tr>');
}

function applyDates() {
  if ($('#start_date').val()) {
    var starttime = '&start_time=' + $('#start_date').val();
  } else {
    var starttime = '';
  }
  if ($('#end_date').val()) {
    var endtime = '&end_time=' + $('#end_date').val();
  } else {
    var endtime = '';
  }
  console.log(starttime);
  runAjax(starttime, endtime);
}
