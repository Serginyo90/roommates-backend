import { MigrationInterface, QueryRunner } from 'typeorm';
import { Country } from '../src/countries/country.entity';

export class InsertCountries1577273895634 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.manager.insert(Country, [
      { id: 1, name: 'Afghanistan', iso3: 'AFG', iso2: 'AF', phoneCode: '+93', capital: 'Kabul', currency: 'AFN' },
      { id: 2, name: 'Aland Islands', iso3: 'ALA', iso2: 'AX', phoneCode: '+35818', capital: 'Mariehamn', currency: 'EUR' },
      { id: 3, name: 'Albania', iso3: 'ALB', iso2: 'AL', phoneCode: '+355', capital: 'Tirana', currency: 'ALL' },
      { id: 4, name: 'Algeria', iso3: 'DZA', iso2: 'DZ', phoneCode: '+213', capital: 'Algiers', currency: 'DZD' },
      { id: 5, name: 'American Samoa', iso3: 'ASM', iso2: 'AS', phoneCode: '+1684', capital: 'Pago Pago', currency: 'USD' },
      { id: 6, name: 'Andorra', iso3: 'AND', iso2: 'AD', phoneCode: '+376', capital: 'Andorra la Vella', currency: 'EUR' },
      { id: 7, name: 'Angola', iso3: 'AGO', iso2: 'AO', phoneCode: '+244', capital: 'Luanda', currency: 'AOA' },
      { id: 8, name: 'Anguilla', iso3: 'AIA', iso2: 'AI', phoneCode: '+1264', capital: 'The Valley', currency: 'XCD' },
      { id: 10, name: 'Antigua And Barbuda', iso3: 'ATG', iso2: 'AG', phoneCode: '+1268', capital: 'St. John\'s', currency: 'XCD' },
      { id: 11, name: 'Argentina', iso3: 'ARG', iso2: 'AR', phoneCode: '+54', capital: 'Buenos Aires', currency: 'ARS' },
      { id: 12, name: 'Armenia', iso3: 'ARM', iso2: 'AM', phoneCode: '+374', capital: 'Yerevan', currency: 'AMD' },
      { id: 13, name: 'Aruba', iso3: 'ABW', iso2: 'AW', phoneCode: '+297', capital: 'Oranjestad', currency: 'AWG' },
      { id: 14, name: 'Australia', iso3: 'AUS', iso2: 'AU', phoneCode: '+61', capital: 'Canberra', currency: 'AUD' },
      { id: 15, name: 'Austria', iso3: 'AUT', iso2: 'AT', phoneCode: '+43', capital: 'Vienna', currency: 'EUR' },
      { id: 16, name: 'Azerbaijan', iso3: 'AZE', iso2: 'AZ', phoneCode: '+994', capital: 'Baku', currency: 'AZN' },
      { id: 17, name: 'Bahamas The', iso3: 'BHS', iso2: 'BS', phoneCode: '+1242', capital: 'Nassau', currency: 'BSD' },
      { id: 18, name: 'Bahrain', iso3: 'BHR', iso2: 'BH', phoneCode: '+973', capital: 'Manama', currency: 'BHD' },
      { id: 19, name: 'Bangladesh', iso3: 'BGD', iso2: 'BD', phoneCode: '+880', capital: 'Dhaka', currency: 'BDT' },
      { id: 20, name: 'Barbados', iso3: 'BRB', iso2: 'BB', phoneCode: '+1246', capital: 'Bridgetown', currency: 'BBD' },
      { id: 21, name: 'Belarus', iso3: 'BLR', iso2: 'BY', phoneCode: '+375', capital: 'Minsk', currency: 'BYR' },
      { id: 22, name: 'Belgium', iso3: 'BEL', iso2: 'BE', phoneCode: '+32', capital: 'Brussels', currency: 'EUR' },
      { id: 23, name: 'Belize', iso3: 'BLZ', iso2: 'BZ', phoneCode: '+501', capital: 'Belmopan', currency: 'BZD' },
      { id: 24, name: 'Benin', iso3: 'BEN', iso2: 'BJ', phoneCode: '+229', capital: 'Porto-Novo', currency: 'XOF' },
      { id: 25, name: 'Bermuda', iso3: 'BMU', iso2: 'BM', phoneCode: '+1441', capital: 'Hamilton', currency: 'BMD' },
      { id: 26, name: 'Bhutan', iso3: 'BTN', iso2: 'BT', phoneCode: '+975', capital: 'Thimphu', currency: 'BTN' },
      { id: 27, name: 'Bolivia', iso3: 'BOL', iso2: 'BO', phoneCode: '+591', capital: 'Sucre', currency: 'BOB' },
      { id: 28, name: 'Bosnia and Herzegovina', iso3: 'BIH', iso2: 'BA', phoneCode: '+387', capital: 'Sarajevo', currency: 'BAM' },
      { id: 29, name: 'Botswana', iso3: 'BWA', iso2: 'BW', phoneCode: '+267', capital: 'Gaborone', currency: 'BWP' },
      { id: 31, name: 'Brazil', iso3: 'BRA', iso2: 'BR', phoneCode: '+55', capital: 'Brasilia', currency: 'BRL' },
      { id: 32, name: 'British Indian Ocean Territory', iso3: 'IOT', iso2: 'IO', phoneCode: '+246', capital: 'Diego Garcia', currency: 'USD' },
      { id: 33, name: 'Brunei', iso3: 'BRN', iso2: 'BN', phoneCode: '+673', capital: 'Bandar Seri Begawan', currency: 'BND' },
      { id: 34, name: 'Bulgaria', iso3: 'BGR', iso2: 'BG', phoneCode: '+359', capital: 'Sofia', currency: 'BGN' },
      { id: 35, name: 'Burkina Faso', iso3: 'BFA', iso2: 'BF', phoneCode: '+226', capital: 'Ouagadougou', currency: 'XOF' },
      { id: 36, name: 'Burundi', iso3: 'BDI', iso2: 'BI', phoneCode: '+257', capital: 'Bujumbura', currency: 'BIF' },
      { id: 37, name: 'Cambodia', iso3: 'KHM', iso2: 'KH', phoneCode: '+855', capital: 'Phnom Penh', currency: 'KHR' },
      { id: 38, name: 'Cameroon', iso3: 'CMR', iso2: 'CM', phoneCode: '+237', capital: 'Yaounde', currency: 'XAF' },
      { id: 39, name: 'Canada', iso3: 'CAN', iso2: 'CA', phoneCode: '+1', capital: 'Ottawa', currency: 'CAD' },
      { id: 40, name: 'Cape Verde', iso3: 'CPV', iso2: 'CV', phoneCode: '+238', capital: 'Praia', currency: 'CVE' },
      { id: 41, name: 'Cayman Islands', iso3: 'CYM', iso2: 'KY', phoneCode: '+1345', capital: 'George Town', currency: 'KYD' },
      { id: 42, name: 'Central African Republic', iso3: 'CAF', iso2: 'CF', phoneCode: '+236', capital: 'Bangui', currency: 'XAF' },
      { id: 43, name: 'Chad', iso3: 'TCD', iso2: 'TD', phoneCode: '+235', capital: 'N\'Djamena', currency: 'XAF' },
      { id: 44, name: 'Chile', iso3: 'CHL', iso2: 'CL', phoneCode: '+56', capital: 'Santiago', currency: 'CLP' },
      { id: 45, name: 'China', iso3: 'CHN', iso2: 'CN', phoneCode: '+86', capital: 'Beijing', currency: 'CNY' },
      { id: 46, name: 'Christmas Island', iso3: 'CXR', iso2: 'CX', phoneCode: '+61', capital: 'Flying Fish Cove', currency: 'AUD' },
      { id: 47, name: 'Cocos (Keeling) Islands', iso3: 'CCK', iso2: 'CC', phoneCode: '+61', capital: 'West Island', currency: 'AUD' },
      { id: 48, name: 'Colombia', iso3: 'COL', iso2: 'CO', phoneCode: '+57', capital: 'Bogota', currency: 'COP' },
      { id: 49, name: 'Comoros', iso3: 'COM', iso2: 'KM', phoneCode: '+269', capital: 'Moroni', currency: 'KMF' },
      { id: 50, name: 'Congo', iso3: 'COG', iso2: 'CG', phoneCode: '+242', capital: 'Brazzaville', currency: 'XAF' },
      { id: 51, name: 'Congo The Democratic Republic Of The', iso3: 'COD', iso2: 'CD', phoneCode: '+243', capital: 'Kinshasa', currency: 'CDF' },
      { id: 52, name: 'Cook Islands', iso3: 'COK', iso2: 'CK', phoneCode: '+682', capital: 'Avarua', currency: 'NZD' },
      { id: 53, name: 'Costa Rica', iso3: 'CRI', iso2: 'CR', phoneCode: '+506', capital: 'San Jose', currency: 'CRC' },
      { id: 54, name: 'Cote D\'Ivoire (Ivory Coast)', iso3: 'CIV', iso2: 'CI', phoneCode: '+225', capital: 'Yamoussoukro', currency: 'XOF' },
      { id: 55, name: 'Croatia (Hrvatska)', iso3: 'HRV', iso2: 'HR', phoneCode: '+385', capital: 'Zagreb', currency: 'HRK' },
      { id: 56, name: 'Cuba', iso3: 'CUB', iso2: 'CU', phoneCode: '+53', capital: 'Havana', currency: 'CUP' },
      { id: 57, name: 'Cyprus', iso3: 'CYP', iso2: 'CY', phoneCode: '+357', capital: 'Nicosia', currency: 'EUR' },
      { id: 58, name: 'Czech Republic', iso3: 'CZE', iso2: 'CZ', phoneCode: '+420', capital: 'Prague', currency: 'CZK' },
      { id: 59, name: 'Denmark', iso3: 'DNK', iso2: 'DK', phoneCode: '+45', capital: 'Copenhagen', currency: 'DKK' },
      { id: 60, name: 'Djibouti', iso3: 'DJI', iso2: 'DJ', phoneCode: '+253', capital: 'Djibouti', currency: 'DJF' },
      { id: 61, name: 'Dominica', iso3: 'DMA', iso2: 'DM', phoneCode: '+1767', capital: 'Roseau', currency: 'XCD' },
      { id: 62, name: 'Dominican Republic', iso3: 'DOM', iso2: 'DO', phoneCode: '+1809', capital: 'Santo Domingo', currency: 'DOP' },
      { id: 63, name: 'East Timor', iso3: 'TLS', iso2: 'TL', phoneCode: '+670', capital: 'Dili', currency: 'USD' },
      { id: 64, name: 'Ecuador', iso3: 'ECU', iso2: 'EC', phoneCode: '+593', capital: 'Quito', currency: 'USD' },
      { id: 65, name: 'Egypt', iso3: 'EGY', iso2: 'EG', phoneCode: '+20', capital: 'Cairo', currency: 'EGP' },
      { id: 66, name: 'El Salvador', iso3: 'SLV', iso2: 'SV', phoneCode: '+503', capital: 'San Salvador', currency: 'USD' },
      { id: 67, name: 'Equatorial Guinea', iso3: 'GNQ', iso2: 'GQ', phoneCode: '+240', capital: 'Malabo', currency: 'XAF' },
      { id: 68, name: 'Eritrea', iso3: 'ERI', iso2: 'ER', phoneCode: '+291', capital: 'Asmara', currency: 'ERN' },
      { id: 69, name: 'Estonia', iso3: 'EST', iso2: 'EE', phoneCode: '+372', capital: 'Tallinn', currency: 'EUR' },
      { id: 70, name: 'Ethiopia', iso3: 'ETH', iso2: 'ET', phoneCode: '+251', capital: 'Addis Ababa', currency: 'ETB' },
      { id: 71, name: 'Falkland Islands', iso3: 'FLK', iso2: 'FK', phoneCode: '+500', capital: 'Stanley', currency: 'FKP' },
      { id: 72, name: 'Faroe Islands', iso3: 'FRO', iso2: 'FO', phoneCode: '+298', capital: 'Torshavn', currency: 'DKK' },
      { id: 73, name: 'Fiji Islands', iso3: 'FJI', iso2: 'FJ', phoneCode: '+679', capital: 'Suva', currency: 'FJD' },
      { id: 74, name: 'Finland', iso3: 'FIN', iso2: 'FI', phoneCode: '+358', capital: 'Helsinki', currency: 'EUR' },
      { id: 75, name: 'France', iso3: 'FRA', iso2: 'FR', phoneCode: '+33', capital: 'Paris', currency: 'EUR' },
      { id: 76, name: 'French Guiana', iso3: 'GUF', iso2: 'GF', phoneCode: '+594', capital: 'Cayenne', currency: 'EUR' },
      { id: 77, name: 'French Polynesia', iso3: 'PYF', iso2: 'PF', phoneCode: '+689', capital: 'Papeete', currency: 'XPF' },
      { id: 79, name: 'Gabon', iso3: 'GAB', iso2: 'GA', phoneCode: '+241', capital: 'Libreville', currency: 'XAF' },
      { id: 80, name: 'Gambia The', iso3: 'GMB', iso2: 'GM', phoneCode: '+220', capital: 'Banjul', currency: 'GMD' },
      { id: 81, name: 'Georgia', iso3: 'GEO', iso2: 'GE', phoneCode: '+995', capital: 'Tbilisi', currency: 'GEL' },
      { id: 82, name: 'Germany', iso3: 'DEU', iso2: 'DE', phoneCode: '+49', capital: 'Berlin', currency: 'EUR' },
      { id: 83, name: 'Ghana', iso3: 'GHA', iso2: 'GH', phoneCode: '+233', capital: 'Accra', currency: 'GHS' },
      { id: 84, name: 'Gibraltar', iso3: 'GIB', iso2: 'GI', phoneCode: '+350', capital: 'Gibraltar', currency: 'GIP' },
      { id: 85, name: 'Greece', iso3: 'GRC', iso2: 'GR', phoneCode: '+30', capital: 'Athens', currency: 'EUR' },
      { id: 86, name: 'Greenland', iso3: 'GRL', iso2: 'GL', phoneCode: '+299', capital: 'Nuuk', currency: 'DKK' },
      { id: 87, name: 'Grenada', iso3: 'GRD', iso2: 'GD', phoneCode: '+1473', capital: 'St. George\'s', currency: 'XCD' },
      { id: 88, name: 'Guadeloupe', iso3: 'GLP', iso2: 'GP', phoneCode: '+590', capital: 'Basse-Terre', currency: 'EUR' },
      { id: 89, name: 'Guam', iso3: 'GUM', iso2: 'GU', phoneCode: '+1671', capital: 'Hagatna', currency: 'USD' },
      { id: 90, name: 'Guatemala', iso3: 'GTM', iso2: 'GT', phoneCode: '+502', capital: 'Guatemala City', currency: 'GTQ' },
      { id: 91, name: 'Guernsey and Alderney', iso3: 'GGY', iso2: 'GG', phoneCode: '+441481', capital: 'St Peter Port', currency: 'GBP' },
      { id: 92, name: 'Guinea', iso3: 'GIN', iso2: 'GN', phoneCode: '+224', capital: 'Conakry', currency: 'GNF' },
      { id: 93, name: 'Guinea-Bissau', iso3: 'GNB', iso2: 'GW', phoneCode: '+245', capital: 'Bissau', currency: 'XOF' },
      { id: 94, name: 'Guyana', iso3: 'GUY', iso2: 'GY', phoneCode: '+592', capital: 'Georgetown', currency: 'GYD' },
      { id: 95, name: 'Haiti', iso3: 'HTI', iso2: 'HT', phoneCode: '+509', capital: 'Port-au-Prince', currency: 'HTG' },
      { id: 97, name: 'Honduras', iso3: 'HND', iso2: 'HN', phoneCode: '+504', capital: 'Tegucigalpa', currency: 'HNL' },
      { id: 98, name: 'Hong Kong S.A.R.', iso3: 'HKG', iso2: 'HK', phoneCode: '+852', capital: 'Hong Kong', currency: 'HKD' },
      { id: 99, name: 'Hungary', iso3: 'HUN', iso2: 'HU', phoneCode: '+36', capital: 'Budapest', currency: 'HUF' },
      { id: 100, name: 'Iceland', iso3: 'ISL', iso2: 'IS', phoneCode: '+354', capital: 'Reykjavik', currency: 'ISK' },
      { id: 101, name: 'India', iso3: 'IND', iso2: 'IN', phoneCode: '+91', capital: 'New Delhi', currency: 'INR' },
      { id: 102, name: 'Indonesia', iso3: 'IDN', iso2: 'ID', phoneCode: '+62', capital: 'Jakarta', currency: 'IDR' },
      { id: 103, name: 'Iran', iso3: 'IRN', iso2: 'IR', phoneCode: '+98', capital: 'Tehran', currency: 'IRR' },
      { id: 104, name: 'Iraq', iso3: 'IRQ', iso2: 'IQ', phoneCode: '+964', capital: 'Baghdad', currency: 'IQD' },
      { id: 105, name: 'Ireland', iso3: 'IRL', iso2: 'IE', phoneCode: '+353', capital: 'Dublin', currency: 'EUR' },
      { id: 106, name: 'Israel', iso3: 'ISR', iso2: 'IL', phoneCode: '+972', capital: 'Jerusalem', currency: 'ILS' },
      { id: 107, name: 'Italy', iso3: 'ITA', iso2: 'IT', phoneCode: '+39', capital: 'Rome', currency: 'EUR' },
      { id: 108, name: 'Jamaica', iso3: 'JAM', iso2: 'JM', phoneCode: '+1876', capital: 'Kingston', currency: 'JMD' },
      { id: 109, name: 'Japan', iso3: 'JPN', iso2: 'JP', phoneCode: '+81', capital: 'Tokyo', currency: 'JPY' },
      { id: 110, name: 'Jersey', iso3: 'JEY', iso2: 'JE', phoneCode: '+441534', capital: 'Saint Helier', currency: 'GBP' },
      { id: 111, name: 'Jordan', iso3: 'JOR', iso2: 'JO', phoneCode: '+962', capital: 'Amman', currency: 'JOD' },
      { id: 112, name: 'Kazakhstan', iso3: 'KAZ', iso2: 'KZ', phoneCode: '+7', capital: 'Astana', currency: 'KZT' },
      { id: 113, name: 'Kenya', iso3: 'KEN', iso2: 'KE', phoneCode: '+254', capital: 'Nairobi', currency: 'KES' },
      { id: 114, name: 'Kiribati', iso3: 'KIR', iso2: 'KI', phoneCode: '+686', capital: 'Tarawa', currency: 'AUD' },
      { id: 115, name: 'Korea North\n', iso3: 'PRK', iso2: 'KP', phoneCode: '+850', capital: 'Pyongyang', currency: 'KPW' },
      { id: 116, name: 'Korea South', iso3: 'KOR', iso2: 'KR', phoneCode: '+82', capital: 'Seoul', currency: 'KRW' },
      { id: 117, name: 'Kuwait', iso3: 'KWT', iso2: 'KW', phoneCode: '+965', capital: 'Kuwait City', currency: 'KWD' },
      { id: 118, name: 'Kyrgyzstan', iso3: 'KGZ', iso2: 'KG', phoneCode: '+996', capital: 'Bishkek', currency: 'KGS' },
      { id: 119, name: 'Laos', iso3: 'LAO', iso2: 'LA', phoneCode: '+856', capital: 'Vientiane', currency: 'LAK' },
      { id: 120, name: 'Latvia', iso3: 'LVA', iso2: 'LV', phoneCode: '+371', capital: 'Riga', currency: 'EUR' },
      { id: 121, name: 'Lebanon', iso3: 'LBN', iso2: 'LB', phoneCode: '+961', capital: 'Beirut', currency: 'LBP' },
      { id: 122, name: 'Lesotho', iso3: 'LSO', iso2: 'LS', phoneCode: '+266', capital: 'Maseru', currency: 'LSL' },
      { id: 123, name: 'Liberia', iso3: 'LBR', iso2: 'LR', phoneCode: '+231', capital: 'Monrovia', currency: 'LRD' },
      { id: 124, name: 'Libya', iso3: 'LBY', iso2: 'LY', phoneCode: '+218', capital: 'Tripolis', currency: 'LYD' },
      { id: 125, name: 'Liechtenstein', iso3: 'LIE', iso2: 'LI', phoneCode: '+423', capital: 'Vaduz', currency: 'CHF' },
      { id: 126, name: 'Lithuania', iso3: 'LTU', iso2: 'LT', phoneCode: '+370', capital: 'Vilnius', currency: 'LTL' },
      { id: 127, name: 'Luxembourg', iso3: 'LUX', iso2: 'LU', phoneCode: '+352', capital: 'Luxembourg', currency: 'EUR' },
      { id: 128, name: 'Macau S.A.R.', iso3: 'MAC', iso2: 'MO', phoneCode: '+853', capital: 'Macao', currency: 'MOP' },
      { id: 129, name: 'Macedonia', iso3: 'MKD', iso2: 'MK', phoneCode: '+389', capital: 'Skopje', currency: 'MKD' },
      { id: 130, name: 'Madagascar', iso3: 'MDG', iso2: 'MG', phoneCode: '+261', capital: 'Antananarivo', currency: 'MGA' },
      { id: 131, name: 'Malawi', iso3: 'MWI', iso2: 'MW', phoneCode: '+265', capital: 'Lilongwe', currency: 'MWK' },
      { id: 132, name: 'Malaysia', iso3: 'MYS', iso2: 'MY', phoneCode: '+60', capital: 'Kuala Lumpur', currency: 'MYR' },
      { id: 133, name: 'Maldives', iso3: 'MDV', iso2: 'MV', phoneCode: '+960', capital: 'Male', currency: 'MVR' },
      { id: 134, name: 'Mali', iso3: 'MLI', iso2: 'ML', phoneCode: '+223', capital: 'Bamako', currency: 'XOF' },
      { id: 135, name: 'Malta', iso3: 'MLT', iso2: 'MT', phoneCode: '+356', capital: 'Valletta', currency: 'EUR' },
      { id: 136, name: 'Man (Isle of)', iso3: 'IMN', iso2: 'IM', phoneCode: '+441624', capital: 'Douglas, Isle of Man', currency: 'GBP' },
      { id: 137, name: 'Marshall Islands', iso3: 'MHL', iso2: 'MH', phoneCode: '+692', capital: 'Majuro', currency: 'USD' },
      { id: 138, name: 'Martinique', iso3: 'MTQ', iso2: 'MQ', phoneCode: '+596', capital: 'Fort-de-France', currency: 'EUR' },
      { id: 139, name: 'Mauritania', iso3: 'MRT', iso2: 'MR', phoneCode: '+222', capital: 'Nouakchott', currency: 'MRO' },
      { id: 140, name: 'Mauritius', iso3: 'MUS', iso2: 'MU', phoneCode: '+230', capital: 'Port Louis', currency: 'MUR' },
      { id: 141, name: 'Mayotte', iso3: 'MYT', iso2: 'YT', phoneCode: '+262', capital: 'Mamoudzou', currency: 'EUR' },
      { id: 142, name: 'Mexico', iso3: 'MEX', iso2: 'MX', phoneCode: '+52', capital: 'Mexico City', currency: 'MXN' },
      { id: 143, name: 'Micronesia', iso3: 'FSM', iso2: 'FM', phoneCode: '+691', capital: 'Palikir', currency: 'USD' },
      { id: 144, name: 'Moldova', iso3: 'MDA', iso2: 'MD', phoneCode: '+373', capital: 'Chisinau', currency: 'MDL' },
      { id: 145, name: 'Monaco', iso3: 'MCO', iso2: 'MC', phoneCode: '+377', capital: 'Monaco', currency: 'EUR' },
      { id: 146, name: 'Mongolia', iso3: 'MNG', iso2: 'MN', phoneCode: '+976', capital: 'Ulan Bator', currency: 'MNT' },
      { id: 147, name: 'Montenegro', iso3: 'MNE', iso2: 'ME', phoneCode: '+382', capital: 'Podgorica', currency: 'EUR' },
      { id: 148, name: 'Montserrat', iso3: 'MSR', iso2: 'MS', phoneCode: '+1664', capital: 'Plymouth', currency: 'XCD' },
      { id: 149, name: 'Morocco', iso3: 'MAR', iso2: 'MA', phoneCode: '+212', capital: 'Rabat', currency: 'MAD' },
      { id: 150, name: 'Mozambique', iso3: 'MOZ', iso2: 'MZ', phoneCode: '+258', capital: 'Maputo', currency: 'MZN' },
      { id: 151, name: 'Myanmar', iso3: 'MMR', iso2: 'MM', phoneCode: '+95', capital: 'Nay Pyi Taw', currency: 'MMK' },
      { id: 152, name: 'Namibia', iso3: 'NAM', iso2: 'NA', phoneCode: '+264', capital: 'Windhoek', currency: 'NAD' },
      { id: 153, name: 'Nauru', iso3: 'NRU', iso2: 'NR', phoneCode: '+674', capital: 'Yaren', currency: 'AUD' },
      { id: 154, name: 'Nepal', iso3: 'NPL', iso2: 'NP', phoneCode: '+977', capital: 'Kathmandu', currency: 'NPR' },
      { id: 156, name: 'Netherlands The', iso3: 'NLD', iso2: 'NL', phoneCode: '+31', capital: 'Amsterdam', currency: 'EUR' },
      { id: 157, name: 'New Caledonia', iso3: 'NCL', iso2: 'NC', phoneCode: '+687', capital: 'Noumea', currency: 'XPF' },
      { id: 158, name: 'New Zealand', iso3: 'NZL', iso2: 'NZ', phoneCode: '+64', capital: 'Wellington', currency: 'NZD' },
      { id: 159, name: 'Nicaragua', iso3: 'NIC', iso2: 'NI', phoneCode: '+505', capital: 'Managua', currency: 'NIO' },
      { id: 160, name: 'Niger', iso3: 'NER', iso2: 'NE', phoneCode: '+227', capital: 'Niamey', currency: 'XOF' },
      { id: 161, name: 'Nigeria', iso3: 'NGA', iso2: 'NG', phoneCode: '+234', capital: 'Abuja', currency: 'NGN' },
      { id: 162, name: 'Niue', iso3: 'NIU', iso2: 'NU', phoneCode: '+683', capital: 'Alofi', currency: 'NZD' },
      { id: 163, name: 'Norfolk Island', iso3: 'NFK', iso2: 'NF', phoneCode: '+672', capital: 'Kingston', currency: 'AUD' },
      { id: 164, name: 'Northern Mariana Islands', iso3: 'MNP', iso2: 'MP', phoneCode: '+1670', capital: 'Saipan', currency: 'USD' },
      { id: 165, name: 'Norway', iso3: 'NOR', iso2: 'NO', phoneCode: '+47', capital: 'Oslo', currency: 'NOK' },
      { id: 166, name: 'Oman', iso3: 'OMN', iso2: 'OM', phoneCode: '+968', capital: 'Muscat', currency: 'OMR' },
      { id: 167, name: 'Pakistan', iso3: 'PAK', iso2: 'PK', phoneCode: '+92', capital: 'Islamabad', currency: 'PKR' },
      { id: 168, name: 'Palau', iso3: 'PLW', iso2: 'PW', phoneCode: '+680', capital: 'Melekeok', currency: 'USD' },
      { id: 169, name: 'Palestinian Territory Occupied', iso3: 'PSE', iso2: 'PS', phoneCode: '+970', capital: 'East Jerusalem', currency: 'ILS' },
      { id: 170, name: 'Panama', iso3: 'PAN', iso2: 'PA', phoneCode: '+507', capital: 'Panama City', currency: 'PAB' },
      { id: 171, name: 'Papua new Guinea', iso3: 'PNG', iso2: 'PG', phoneCode: '+675', capital: 'Port Moresby', currency: 'PGK' },
      { id: 172, name: 'Paraguay', iso3: 'PRY', iso2: 'PY', phoneCode: '+595', capital: 'Asuncion', currency: 'PYG' },
      { id: 173, name: 'Peru', iso3: 'PER', iso2: 'PE', phoneCode: '+51', capital: 'Lima', currency: 'PEN' },
      { id: 174, name: 'Philippines', iso3: 'PHL', iso2: 'PH', phoneCode: '+63', capital: 'Manila', currency: 'PHP' },
      { id: 175, name: 'Pitcairn Island', iso3: 'PCN', iso2: 'PN', phoneCode: '+870', capital: 'Adamstown', currency: 'NZD' },
      { id: 176, name: 'Poland', iso3: 'POL', iso2: 'PL', phoneCode: '+48', capital: 'Warsaw', currency: 'PLN' },
      { id: 177, name: 'Portugal', iso3: 'PRT', iso2: 'PT', phoneCode: '+351', capital: 'Lisbon', currency: 'EUR' },
      { id: 178, name: 'Puerto Rico', iso3: 'PRI', iso2: 'PR', phoneCode: '+1787', capital: 'San Juan', currency: 'USD' },
      { id: 179, name: 'Qatar', iso3: 'QAT', iso2: 'QA', phoneCode: '+974', capital: 'Doha', currency: 'QAR' },
      { id: 180, name: 'Reunion', iso3: 'REU', iso2: 'RE', phoneCode: '+262', capital: 'Saint-Denis', currency: 'EUR' },
      { id: 181, name: 'Romania', iso3: 'ROU', iso2: 'RO', phoneCode: '+40', capital: 'Bucharest', currency: 'RON' },
      { id: 182, name: 'Russia', iso3: 'RUS', iso2: 'RU', phoneCode: '+7', capital: 'Moscow', currency: 'RUB' },
      { id: 183, name: 'Rwanda', iso3: 'RWA', iso2: 'RW', phoneCode: '+250', capital: 'Kigali', currency: 'RWF' },
      { id: 184, name: 'Saint Helena', iso3: 'SHN', iso2: 'SH', phoneCode: '+290', capital: 'Jamestown', currency: 'SHP' },
      { id: 185, name: 'Saint Kitts And Nevis', iso3: 'KNA', iso2: 'KN', phoneCode: '+1869', capital: 'Basseterre', currency: 'XCD' },
      { id: 186, name: 'Saint Lucia', iso3: 'LCA', iso2: 'LC', phoneCode: '+1758', capital: 'Castries', currency: 'XCD' },
      { id: 187, name: 'Saint Pierre and Miquelon', iso3: 'SPM', iso2: 'PM', phoneCode: '+508', capital: 'Saint-Pierre', currency: 'EUR' },
      { id: 188, name: 'Saint Vincent And The Grenadines', iso3: 'VCT', iso2: 'VC', phoneCode: '+1784', capital: 'Kingstown', currency: 'XCD' },
      { id: 189, name: 'Saint-Barthelemy', iso3: 'BLM', iso2: 'BL', phoneCode: '+590', capital: 'Gustavia', currency: 'EUR' },
      { id: 190, name: 'Saint-Martin (French part)', iso3: 'MAF', iso2: 'MF', phoneCode: '+590', capital: 'Marigot', currency: 'EUR' },
      { id: 191, name: 'Samoa', iso3: 'WSM', iso2: 'WS', phoneCode: '+685', capital: 'Apia', currency: 'WST' },
      { id: 192, name: 'San Marino', iso3: 'SMR', iso2: 'SM', phoneCode: '+378', capital: 'San Marino', currency: 'EUR' },
      { id: 193, name: 'Sao Tome and Principe', iso3: 'STP', iso2: 'ST', phoneCode: '+239', capital: 'Sao Tome', currency: 'STD' },
      { id: 194, name: 'Saudi Arabia', iso3: 'SAU', iso2: 'SA', phoneCode: '+966', capital: 'Riyadh', currency: 'SAR' },
      { id: 195, name: 'Senegal', iso3: 'SEN', iso2: 'SN', phoneCode: '+221', capital: 'Dakar', currency: 'XOF' },
      { id: 196, name: 'Serbia', iso3: 'SRB', iso2: 'RS', phoneCode: '+381', capital: 'Belgrade', currency: 'RSD' },
      { id: 197, name: 'Seychelles', iso3: 'SYC', iso2: 'SC', phoneCode: '+248', capital: 'Victoria', currency: 'SCR' },
      { id: 198, name: 'Sierra Leone', iso3: 'SLE', iso2: 'SL', phoneCode: '+232', capital: 'Freetown', currency: 'SLL' },
      { id: 199, name: 'Singapore', iso3: 'SGP', iso2: 'SG', phoneCode: '+65', capital: 'Singapur', currency: 'SGD' },
      { id: 200, name: 'Slovakia', iso3: 'SVK', iso2: 'SK', phoneCode: '+421', capital: 'Bratislava', currency: 'EUR' },
      { id: 201, name: 'Slovenia', iso3: 'SVN', iso2: 'SI', phoneCode: '+386', capital: 'Ljubljana', currency: 'EUR' },
      { id: 202, name: 'Solomon Islands', iso3: 'SLB', iso2: 'SB', phoneCode: '+677', capital: 'Honiara', currency: 'SBD' },
      { id: 203, name: 'Somalia', iso3: 'SOM', iso2: 'SO', phoneCode: '+252', capital: 'Mogadishu', currency: 'SOS' },
      { id: 204, name: 'South Africa', iso3: 'ZAF', iso2: 'ZA', phoneCode: '+27', capital: 'Pretoria', currency: 'ZAR' },
      { id: 206, name: 'South Sudan', iso3: 'SSD', iso2: 'SS', phoneCode: '+211', capital: 'Juba', currency: 'SSP' },
      { id: 207, name: 'Spain', iso3: 'ESP', iso2: 'ES', phoneCode: '+34', capital: 'Madrid', currency: 'EUR' },
      { id: 208, name: 'Sri Lanka', iso3: 'LKA', iso2: 'LK', phoneCode: '+94', capital: 'Colombo', currency: 'LKR' },
      { id: 209, name: 'Sudan', iso3: 'SDN', iso2: 'SD', phoneCode: '+249', capital: 'Khartoum', currency: 'SDG' },
      { id: 210, name: 'Suriname', iso3: 'SUR', iso2: 'SR', phoneCode: '+597', capital: 'Paramaribo', currency: 'SRD' },
      { id: 211, name: 'Svalbard And Jan Mayen Islands', iso3: 'SJM', iso2: 'SJ', phoneCode: '+47', capital: 'Longyearbyen', currency: 'NOK' },
      { id: 212, name: 'Swaziland', iso3: 'SWZ', iso2: 'SZ', phoneCode: '+268', capital: 'Mbabane', currency: 'SZL' },
      { id: 213, name: 'Sweden', iso3: 'SWE', iso2: 'SE', phoneCode: '+46', capital: 'Stockholm', currency: 'SEK' },
      { id: 214, name: 'Switzerland', iso3: 'CHE', iso2: 'CH', phoneCode: '+41', capital: 'Berne', currency: 'CHF' },
      { id: 215, name: 'Syria', iso3: 'SYR', iso2: 'SY', phoneCode: '+963', capital: 'Damascus', currency: 'SYP' },
      { id: 216, name: 'Taiwan', iso3: 'TWN', iso2: 'TW', phoneCode: '+886', capital: 'Taipei', currency: 'TWD' },
      { id: 217, name: 'Tajikistan', iso3: 'TJK', iso2: 'TJ', phoneCode: '+992', capital: 'Dushanbe', currency: 'TJS' },
      { id: 218, name: 'Tanzania', iso3: 'TZA', iso2: 'TZ', phoneCode: '+255', capital: 'Dodoma', currency: 'TZS' },
      { id: 219, name: 'Thailand', iso3: 'THA', iso2: 'TH', phoneCode: '+66', capital: 'Bangkok', currency: 'THB' },
      { id: 220, name: 'Togo', iso3: 'TGO', iso2: 'TG', phoneCode: '+228', capital: 'Lome', currency: 'XOF' },
      { id: 221, name: 'Tokelau', iso3: 'TKL', iso2: 'TK', phoneCode: '+690', capital: null, currency: 'NZD' },
      { id: 222, name: 'Tonga', iso3: 'TON', iso2: 'TO', phoneCode: '+676', capital: 'Nuku\'alofa', currency: 'TOP' },
      { id: 223, name: 'Trinidad And Tobago', iso3: 'TTO', iso2: 'TT', phoneCode: '+1868', capital: 'Port of Spain', currency: 'TTD' },
      { id: 224, name: 'Tunisia', iso3: 'TUN', iso2: 'TN', phoneCode: '+216', capital: 'Tunis', currency: 'TND' },
      { id: 225, name: 'Turkey', iso3: 'TUR', iso2: 'TR', phoneCode: '+90', capital: 'Ankara', currency: 'TRY' },
      { id: 226, name: 'Turkmenistan', iso3: 'TKM', iso2: 'TM', phoneCode: '+993', capital: 'Ashgabat', currency: 'TMT' },
      { id: 227, name: 'Turks And Caicos Islands', iso3: 'TCA', iso2: 'TC', phoneCode: '+1649', capital: 'Cockburn Town', currency: 'USD' },
      { id: 228, name: 'Tuvalu', iso3: 'TUV', iso2: 'TV', phoneCode: '+688', capital: 'Funafuti', currency: 'AUD' },
      { id: 229, name: 'Uganda', iso3: 'UGA', iso2: 'UG', phoneCode: '+256', capital: 'Kampala', currency: 'UGX' },
      { id: 230, name: 'Ukraine', iso3: 'UKR', iso2: 'UA', phoneCode: '+380', capital: 'Kiev', currency: 'UAH' },
      { id: 231, name: 'United Arab Emirates', iso3: 'ARE', iso2: 'AE', phoneCode: '+971', capital: 'Abu Dhabi', currency: 'AED' },
      { id: 232, name: 'United Kingdom', iso3: 'GBR', iso2: 'GB', phoneCode: '+44', capital: 'London', currency: 'GBP' },
      { id: 233, name: 'United States', iso3: 'USA', iso2: 'US', phoneCode: '+1', capital: 'Washington', currency: 'USD' },
      { id: 234, name: 'United States Minor Outlying Islands', iso3: 'UMI', iso2: 'UM', phoneCode: '+1', capital: null, currency: 'USD' },
      { id: 235, name: 'Uruguay', iso3: 'URY', iso2: 'UY', phoneCode: '+598', capital: 'Montevideo', currency: 'UYU' },
      { id: 236, name: 'Uzbekistan', iso3: 'UZB', iso2: 'UZ', phoneCode: '+998', capital: 'Tashkent', currency: 'UZS' },
      { id: 237, name: 'Vanuatu', iso3: 'VUT', iso2: 'VU', phoneCode: '+678', capital: 'Port Vila', currency: 'VUV' },
      { id: 238, name: 'Vatican City State (Holy See)', iso3: 'VAT', iso2: 'VA', phoneCode: '+379', capital: 'Vatican City', currency: 'EUR' },
      { id: 239, name: 'Venezuela', iso3: 'VEN', iso2: 'VE', phoneCode: '+58', capital: 'Caracas', currency: 'VEF' },
      { id: 240, name: 'Vietnam', iso3: 'VNM', iso2: 'VN', phoneCode: '+84', capital: 'Hanoi', currency: 'VND' },
      { id: 241, name: 'Virgin Islands (British)', iso3: 'VGB', iso2: 'VG', phoneCode: '+1284', capital: 'Road Town', currency: 'USD' },
      { id: 242, name: 'Virgin Islands (US)', iso3: 'VIR', iso2: 'VI', phoneCode: '+1340', capital: 'Charlotte Amalie', currency: 'USD' },
      { id: 243, name: 'Wallis And Futuna Islands', iso3: 'WLF', iso2: 'WF', phoneCode: '+681', capital: 'Mata Utu', currency: 'XPF' },
      { id: 244, name: 'Western Sahara', iso3: 'ESH', iso2: 'EH', phoneCode: '+212', capital: 'El-Aaiun', currency: 'MAD' },
      { id: 245, name: 'Yemen', iso3: 'YEM', iso2: 'YE', phoneCode: '+967', capital: 'Sanaa', currency: 'YER' },
      { id: 246, name: 'Zambia', iso3: 'ZMB', iso2: 'ZM', phoneCode: '+260', capital: 'Lusaka', currency: 'ZMK' },
      { id: 247, name: 'Zimbabwe', iso3: 'ZWE', iso2: 'ZW', phoneCode: '+263', capital: 'Harare', currency: 'ZWL' },
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    const data = await queryRunner.manager.find(Country);
    if (data.length) {
      await queryRunner.manager.delete(Country, data);
    }
  }

}