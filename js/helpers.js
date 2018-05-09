iconMap = {
  // Group 2xx: Thunderstorm
  "200": '<i class="wi wi-thunderstorm"></i>', // "thunderstorm with light rain"
  "201": '<i class="wi wi-thunderstorm"></i>', // "thunderstorm with rain"
  "202": '<i class="wi wi-thunderstorm"></i>', // "thunderstorm with heavy rain"
  "210": '<i class="wi wi-thunderstorm"></i>', // "light thunderstorm"
  "211": '<i class="wi wi-thunderstorm"></i>', // "thunderstorm"
  "212": '<i class="wi wi-thunderstorm"></i>', // "heavy thunderstorm"
  "221": '<i class="wi wi-thunderstorm"></i>', // "ragged thunderstorm"
  "230": '<i class="wi wi-thunderstorm"></i>', // "thunderstorm with light drizzle"
  "231": '<i class="wi wi-thunderstorm"></i>', // "thunderstorm with drizzle"
  "232": '<i class="wi wi-thunderstorm"></i>', // "thunderstorm with heavy drizzle"
  // Group 3xx: Drizzle
  "300": '<i class="wi wi-sprinkle"></i>', // "light intensity drizzle",
  "301": '<i class="wi wi-sprinkle"></i>', // "drizzle"
  "302": '<i class="wi wi-sprinkle"></i>', // "heavy intensity drizzle"
  "310": '<i class="wi wi-sprinkle"></i>', // "light intensity drizzle rain"
  "311": '<i class="wi wi-sprinkle"></i>', // "drizzle rain"
  "312": '<i class="wi wi-sprinkle"></i>', // "heavy intensity drizzle rain"
  "313": '<i class="wi wi-sprinkle"></i>', // "shower rain and drizzle"
  "314": '<i class="wi wi-sprinkle"></i>', // "heavy shower rain and drizzle"
  "321": '<i class="wi wi-sprinkle"></i>', // "shower drizzle"
  // Group 5xx: Rain
  "500": '<i class="wi wi-rain"></i>', // "light rain"
  "501": '<i class="wi wi-rain"></i>', // "moderate rain"
  "502": '<i class="wi wi-rain"></i>', // "heavy intensity rain"
  "503": '<i class="wi wi-rain"></i>', // "very heavy rain"
  "504": '<i class="wi wi-rain"></i>', // "extreme rain"
  "511": '<i class="wi wi-rain"></i>', // "freezing rain"
  "520": '<i class="wi wi-showers"></i>', // "light intensity shower rain"
  "521": '<i class="wi wi-showers"></i>', // "shower rain"
  "522": '<i class="wi wi-showers"></i>', // "heavy intensity shower rain"
  "531": '<i class="wi wi-showers"></i>', // "ragged shower rain"
  // Group 6xx: Snow
  "600": '<i class="wi wi-snow"></i>', // "light snow"
  "601": '<i class="wi wi-snow"></i>', // "snow"
  "602": '<i class="wi wi-snow"></i>', // "heavy snow"
  "611": '<i class="wi wi-sleet"></i>', // "sleet"
  "612": '<i class="wi wi-sleet"></i>', // "shower sleet"
  "615": '<i class="wi wi-rain-mix"></i>', // "light rain and snow"
  "616": '<i class="wi wi-rain-mix"></i>', // "rain and snow"
  "620": '<i class="wi wi-snow"></i>', // "light shower snow"
  "621": '<i class="wi wi-snow"></i>', // "shower snow"
  "622": '<i class="wi wi-snow"></i>', // "heavy shower snow"
  // Group 7xx: Atmosphere
  "701": '<i class="wi wi-snow"></i>', // "mist"
  "711": '<i class="wi wi-smoke"></i>', // "smoke"
  "721": '<i class="wi wi-snow"></i>', // "haze"
  "731": '<i class="wi wi-tornado"></i>', // "sand, dust whirls"
  "741": '<i class="wi wi-fog"></i>', // "fog"
  "751": '<i class="wi wi-sandstorm"></i>', // "sand"
  "761": '<i class="wi wi-dust"></i>', // "dust"
  "762": '<i class="wi wi-volcano"></i>', // "volcanic ash"
  "771": '<i class="wi wi-windy"></i>', // "squalls"
  "781": '<i class="wi wi-tornado"></i>', // "tornado"
  // Group 800: Clear
  "800": '<i class="wi wi-day-sunny"></i>', // "clear sky"
  // Group 80x: Clouds
  "801": '<i class="wi wi-cloud"></i>', // "few clouds",
  "802": '<i class="wi wi-cloud"></i>', // "scattered clouds",
  "803": '<i class="wi wi-cloudy"></i>', // "broken clouds",
  "804": '<i class="wi wi-cloudy"></i>', // "overcast clouds"
};

function degreesToCardinal(degrees) {
  if (degrees > 11.25 && degrees < 33.75) {
    return "NNE";
  } else if (degrees > 33.75 && degrees < 56.25) {
    return "ENE";
  } else if (degrees > 56.25 && degrees < 78.75) {
    return "E";
  } else if (degrees > 78.75 && degrees < 101.25) {
    return "ESE";
  } else if (degrees > 101.25 && degrees < 123.75) {
    return "ESE";
  } else if (degrees > 123.75 && degrees < 146.25) {
    return "SE";
  } else if (degrees > 146.25 && degrees < 168.75) {
    return "SSE";
  } else if (degrees > 168.75 && degrees < 191.25) {
    return "S";
  } else if (degrees > 191.25 && degrees < 213.75) {
    return "SSW";
  } else if (degrees > 213.75 && degrees < 236.25) {
    return "SW";
  } else if (degrees > 236.25 && degrees < 258.75) {
    return "WSW";
  } else if (degrees > 258.75 && degrees < 281.25) {
    return "W";
  } else if (degrees > 281.25 && degrees < 303.75) {
    return "WNW";
  } else if (degrees > 303.75 && degrees < 326.25) {
    return "NW";
  } else if (degrees > 326.25 && degrees < 348.75) {
    return "NNW";
  } else {
    return "N";
  }
}

let countryCodeToName = {
  'AF': 'Afghanistan',
  'AX': 'Aland Islands',
  'AL': 'Albania',
  'DZ': 'Algeria',
  'AS': 'American Samoa',
  'AD': 'Andorra',
  'AO': 'Angola',
  'AI': 'Anguilla',
  'AQ': 'Antarctica',
  'AG': 'Antigua And Barbuda',
  'AR': 'Argentina',
  'AM': 'Armenia',
  'AW': 'Aruba',
  'AU': 'Australia',
  'AT': 'Austria',
  'AZ': 'Azerbaijan',
  'BS': 'Bahamas',
  'BH': 'Bahrain',
  'BD': 'Bangladesh',
  'BB': 'Barbados',
  'BY': 'Belarus',
  'BE': 'Belgium',
  'BZ': 'Belize',
  'BJ': 'Benin',
  'BM': 'Bermuda',
  'BT': 'Bhutan',
  'BO': 'Bolivia',
  'BA': 'Bosnia And Herzegovina',
  'BW': 'Botswana',
  'BV': 'Bouvet Island',
  'BR': 'Brazil',
  'IO': 'British Indian Ocean Territory',
  'BN': 'Brunei Darussalam',
  'BG': 'Bulgaria',
  'BF': 'Burkina Faso',
  'BI': 'Burundi',
  'KH': 'Cambodia',
  'CM': 'Cameroon',
  'CA': 'Canada',
  'CV': 'Cape Verde',
  'KY': 'Cayman Islands',
  'CF': 'Central African Republic',
  'TD': 'Chad',
  'CL': 'Chile',
  'CN': 'China',
  'CX': 'Christmas Island',
  'CC': 'Cocos (Keeling) Islands',
  'CO': 'Colombia',
  'KM': 'Comoros',
  'CG': 'Congo',
  'CD': 'Congo, Democratic Republic',
  'CK': 'Cook Islands',
  'CR': 'Costa Rica',
  'CI': 'Cote D\'Ivoire',
  'HR': 'Croatia',
  'CU': 'Cuba',
  'CY': 'Cyprus',
  'CZ': 'Czech Republic',
  'DK': 'Denmark',
  'DJ': 'Djibouti',
  'DM': 'Dominica',
  'DO': 'Dominican Republic',
  'EC': 'Ecuador',
  'EG': 'Egypt',
  'SV': 'El Salvador',
  'GQ': 'Equatorial Guinea',
  'ER': 'Eritrea',
  'EE': 'Estonia',
  'ET': 'Ethiopia',
  'FK': 'Falkland Islands (Malvinas)',
  'FO': 'Faroe Islands',
  'FJ': 'Fiji',
  'FI': 'Finland',
  'FR': 'France',
  'GF': 'French Guiana',
  'PF': 'French Polynesia',
  'TF': 'French Southern Territories',
  'GA': 'Gabon',
  'GM': 'Gambia',
  'GE': 'Georgia',
  'DE': 'Germany',
  'GH': 'Ghana',
  'GI': 'Gibraltar',
  'GR': 'Greece',
  'GL': 'Greenland',
  'GD': 'Grenada',
  'GP': 'Guadeloupe',
  'GU': 'Guam',
  'GT': 'Guatemala',
  'GG': 'Guernsey',
  'GN': 'Guinea',
  'GW': 'Guinea-Bissau',
  'GY': 'Guyana',
  'HT': 'Haiti',
  'HM': 'Heard Island & Mcdonald Islands',
  'VA': 'Holy See (Vatican City State)',
  'HN': 'Honduras',
  'HK': 'Hong Kong',
  'HU': 'Hungary',
  'IS': 'Iceland',
  'IN': 'India',
  'ID': 'Indonesia',
  'IR': 'Iran, Islamic Republic Of',
  'IQ': 'Iraq',
  'IE': 'Ireland',
  'IM': 'Isle Of Man',
  'IL': 'Israel',
  'IT': 'Italy',
  'JM': 'Jamaica',
  'JP': 'Japan',
  'JE': 'Jersey',
  'JO': 'Jordan',
  'KZ': 'Kazakhstan',
  'KE': 'Kenya',
  'KI': 'Kiribati',
  'KR': 'Korea',
  'KW': 'Kuwait',
  'KG': 'Kyrgyzstan',
  'LA': 'Lao People\'s Democratic Republic',
  'LV': 'Latvia',
  'LB': 'Lebanon',
  'LS': 'Lesotho',
  'LR': 'Liberia',
  'LY': 'Libyan Arab Jamahiriya',
  'LI': 'Liechtenstein',
  'LT': 'Lithuania',
  'LU': 'Luxembourg',
  'MO': 'Macao',
  'MK': 'Macedonia',
  'MG': 'Madagascar',
  'MW': 'Malawi',
  'MY': 'Malaysia',
  'MV': 'Maldives',
  'ML': 'Mali',
  'MT': 'Malta',
  'MH': 'Marshall Islands',
  'MQ': 'Martinique',
  'MR': 'Mauritania',
  'MU': 'Mauritius',
  'YT': 'Mayotte',
  'MX': 'Mexico',
  'FM': 'Micronesia, Federated States Of',
  'MD': 'Moldova',
  'MC': 'Monaco',
  'MN': 'Mongolia',
  'ME': 'Montenegro',
  'MS': 'Montserrat',
  'MA': 'Morocco',
  'MZ': 'Mozambique',
  'MM': 'Myanmar',
  'NA': 'Namibia',
  'NR': 'Nauru',
  'NP': 'Nepal',
  'NL': 'Netherlands',
  'AN': 'Netherlands Antilles',
  'NC': 'New Caledonia',
  'NZ': 'New Zealand',
  'NI': 'Nicaragua',
  'NE': 'Niger',
  'NG': 'Nigeria',
  'NU': 'Niue',
  'NF': 'Norfolk Island',
  'MP': 'Northern Mariana Islands',
  'NO': 'Norway',
  'OM': 'Oman',
  'PK': 'Pakistan',
  'PW': 'Palau',
  'PS': 'Palestinian Territory, Occupied',
  'PA': 'Panama',
  'PG': 'Papua New Guinea',
  'PY': 'Paraguay',
  'PE': 'Peru',
  'PH': 'Philippines',
  'PN': 'Pitcairn',
  'PL': 'Poland',
  'PT': 'Portugal',
  'PR': 'Puerto Rico',
  'QA': 'Qatar',
  'RE': 'Reunion',
  'RO': 'Romania',
  'RU': 'Russian Federation',
  'RW': 'Rwanda',
  'BL': 'Saint Barthelemy',
  'SH': 'Saint Helena',
  'KN': 'Saint Kitts And Nevis',
  'LC': 'Saint Lucia',
  'MF': 'Saint Martin',
  'PM': 'Saint Pierre And Miquelon',
  'VC': 'Saint Vincent And Grenadines',
  'WS': 'Samoa',
  'SM': 'San Marino',
  'ST': 'Sao Tome And Principe',
  'SA': 'Saudi Arabia',
  'SN': 'Senegal',
  'RS': 'Serbia',
  'SC': 'Seychelles',
  'SL': 'Sierra Leone',
  'SG': 'Singapore',
  'SK': 'Slovakia',
  'SI': 'Slovenia',
  'SB': 'Solomon Islands',
  'SO': 'Somalia',
  'ZA': 'South Africa',
  'GS': 'South Georgia And Sandwich Isl.',
  'ES': 'Spain',
  'LK': 'Sri Lanka',
  'SD': 'Sudan',
  'SR': 'Suriname',
  'SJ': 'Svalbard And Jan Mayen',
  'SZ': 'Swaziland',
  'SE': 'Sweden',
  'CH': 'Switzerland',
  'SY': 'Syrian Arab Republic',
  'TW': 'Taiwan',
  'TJ': 'Tajikistan',
  'TZ': 'Tanzania',
  'TH': 'Thailand',
  'TL': 'Timor-Leste',
  'TG': 'Togo',
  'TK': 'Tokelau',
  'TO': 'Tonga',
  'TT': 'Trinidad And Tobago',
  'TN': 'Tunisia',
  'TR': 'Turkey',
  'TM': 'Turkmenistan',
  'TC': 'Turks And Caicos Islands',
  'TV': 'Tuvalu',
  'UG': 'Uganda',
  'UA': 'Ukraine',
  'AE': 'United Arab Emirates',
  'GB': 'United Kingdom',
  'US': 'United States',
  'UM': 'United States Outlying Islands',
  'UY': 'Uruguay',
  'UZ': 'Uzbekistan',
  'VU': 'Vanuatu',
  'VE': 'Venezuela',
  'VN': 'Viet Nam',
  'VG': 'Virgin Islands, British',
  'VI': 'Virgin Islands, U.S.',
  'WF': 'Wallis And Futuna',
  'EH': 'Western Sahara',
  'YE': 'Yemen',
  'ZM': 'Zambia',
  'ZW': 'Zimbabwe'
};

function getCountryName(countryCode) {
  if (countryCodeToName.hasOwnProperty(countryCode)) {
    return countryCodeToName[countryCode];
  } else {
    return countryCode;
  }
}