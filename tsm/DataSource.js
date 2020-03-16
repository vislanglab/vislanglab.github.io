  var DataSourceA = [
["1","1","Single","Short","Looking","Calvin looking at plate","2","Calvin and father","1","CH.1985.11.23_1.1.png"],

["1","17","Single","Short","Looking","Calvin looking at nails on table","2","Cavind and mother","5","CH.1985.12.27_1.1.png"],

["1","33","Single","Short","Staring","Calvin and Hobbes staring to the stars","2","Calvin and Hobbes","9","CH.1986.02.05_1.1.png"],

["1","49","Single","Short","Looking","Calvin looking outside from window","1","Calvin","13","CH.1986.05.27_1.1.png"],

["1","65","Single","Short","Waiting","Calvin and Hobbes waiting with a gift","2","Calvin and Hobbes","17","CH.1987.01.26_1.1.png"],

["1","81","Single","Short","Reading","Calvin reading and Hobbes walking away","2","Calvin and Hobbes","21","CH.1990.10.26_1.1.png"],

["1","14","Single","Long","Watching","Calvin watching tv","1","Calvin","4","CH.1985.12.09_1.2.png"],

["1","30","Single","Long","Reading","Calvin and Hobbes reading book behind desk","2","Calvin and Hobbes","8","CH.1986.02.03_1.2.png"],

["1","46","Single","Long","Looking","Calvin playing golf","1","Calvin","12","CH.1986.05.08_1.2.png"],

["1","62","Single","Long","Looking","Calvin looking at Hobbes writing behind desk","2","Calvin and Hobbes","16","CH.1987.01.24_1.2.png"],

["1","78","Single","Long","Resting","Calvin and Hobbes resting against a tree","2","Calvin and Hobbes","20","CH.1988.07.29_1.2.png"],

["1","94","Single","Long","Hiding","Calvin and Hobbes hiding behind bushes","2","Calvin and Hobbes","24","CH.1993.08.14_1.2.png"],

["1","11","Multiple","Short","Looking","Calvin looking from treehouse","2","Calvin and Susie","3","CH.1985.12.06_2.1.png"],

["1","27","Multiple","Short","Looking","Calvin and father at dining table","2","Calvin and father","7","CH.1986.01.22_2.1.png"],

["1","43","Multiple","Long","Reading","Calvin reading a book behind desk","1","Calvin","11","CH.1986.04.25_2.1.png"],

["1","59","Multiple","Short","Walking","Calvin walking in snow","1","Calvin","15","CH.1987.01.10_2.1.png"],

["1","75","Multiple","Short","Falling","Calvin falling","1","Calvin","19","CH.1988.07.12_2.1.png"],

["1","91","Multiple","Short","Looking","Calvin staring up/rain","1","Calvin","23","CH.1992.08.03_2.1.png"],

["1","8","Multiple","Long","Riding","Calvin and Hobbes in a cart","2","Calvin and Hobbes","2","CH.1985.12.03_2.2.png"],

["1","24","Multiple","Long","Thinking","Calvin and Hobbes sitting on a rock","2","Calvin and Hobbes","6","CH.1986.01.03_2.2.png"],

["1","40","Multiple","Long","Walking","Calvin walking away from Moe","2","Calvin and Moe","10","CH.1986.04.23_2.2.png"],

["1","56","Multiple","Long","Hanging in air","Calvin swinging on a swing","1","Calvin","14","CH.1985.12.07_2.2.png"],

["1","72","Multiple","Long","Floating","Calvin floating away with balloon","1","Calvin","18","CH.1988.07.04_2.2.png"],

["1","88","Multiple","Long","Looking","Calvin looking after losing brain","2","Calvin and mother","22","CH.1992.07.13_2.2.png"]
];


  var DataSourceB = [
["2","5","Single","Short","Riding","Calvin and Hobbes in a cart","2","Calvin and Hobbes","2","CH.1985.12.03_1.1.png"],

["2","21","Single","Short","Thinking","Calvin and Hobbes sitting on a rock","2","Calvin and Hobbes","6","CH.1986.01.03_1.1.png"],

["2","37","Single","Short","Walking","Calvin walking away from Moe","2","Calvin and Moe","10","CH.1986.04.23_1.1.png"],

["2","53","Single","Short","Hanging in air","Calvin swinging on a swing","1","Calvin","14","CH.1985.12.07_1.1.png"],

["2","69","Single","Short","Floating","Calvin floating away with balloon","1","Calvin","18","CH.1988.07.04_1.1.png"],

["2","85","Single","Short","Looking","Calvin looking after losing brain","2","Calvin and mother","22","CH.1992.07.13_1.1.png"],

["2","2","Single","Long","Looking","Calvin looking at plate","2","Calvin and father","1","CH.1985.11.23_1.2.png"],

["2","18","Single","Long","Looking","Calvin looking at nails on table","2","Cavind and mother","5","CH.1985.12.27_1.2.png"],

["2","34","Single","Long","Staring","Calvin and Hobbes staring to the stars","2","Calvin and Hobbes","9","CH.1986.02.05_1.2.png"],

["2","50","Single","Long","Looking","Calvin looking outside from window","1","Calvin","13","CH.1986.05.27_1.2.png"],

["2","66","Single","Long","Waiting","Calvin and Hobbes waiting with a gift","2","Calvin and Hobbes","17","CH.1987.01.26_1.2.png"],

["2","82","Single","Long","Reading","Calvin reading and Hobbes walking away","2","Calvin and Hobbes","21","CH.1990.10.26_1.2.png"],

["2","15","Multiple","Short","Watching","Calvin watching tv","1","Calvin","4","CH.1985.12.09_2.1.png"],

["2","31","Multiple","Short","Reading","Calvin and Hobbes reading book behind desk","2","Calvin and Hobbes","8","CH.1986.02.03_2.1.png"],

["2","47","Multiple","Short","Looking","Calvin playing golf","1","Calvin","12","CH.1986.05.08_2.1.png"],

["2","63","Multiple","Short","Looking","Calvin looking at Hobbes writing behind desk","2","Calvin and Hobbes","16","CH.1987.01.24_2.1.png"],

["2","79","Multiple","Short","Resting","Calvin and Hobbes resting against a tree","2","Calvin and Hobbes","20","CH.1988.07.29_2.1.png"],

["2","95","Multiple","Short","Hiding","Calvin and Hobbes hiding behind bushes","2","Calvin and Hobbes","24","CH.1993.08.14_2.1.png"],

["2","12","Multiple","Long","Looking","Calvin looking from treehouse","2","Calvin and Susie","3","CH.1985.12.06_2.2.png"],

["2","28","Multiple","Long","Looking","Calvin and father at dining table","2","Calvin and father","7","CH.1986.01.22_2.2.png"],

["2","44","Multiple","Long","Reading","Calvin reading a book behind desk","1","Calvin","11","CH.1986.04.25_2.2.png"],

["2","60","Multiple","Long","Walking","Calvin walking in snow","1","Calvin","15","CH.1987.01.10_2.2.png"],

["2","76","Multiple","Long","Falling","Calvin falling","1","Calvin","19","CH.1988.07.12_2.2.png"],

["2","92","Multiple","Long","Looking","Calvin staring up/rain","1","Calvin","23","CH.1992.08.03_2.2.png"]
];


  var DataSourceC = [
["3","9","Single","Short","Looking","Calvin looking from treehouse","2","Calvin and Susie","3","CH.1985.12.06_1.1.png"],

["3","25","Single","Short","Looking","Calvin and father at dining table","2","Calvin and father","7","CH.1986.01.22_1.1.png"],

["3","41","Single","Short","Reading","Calvin reading a book behind desk","1","Calvin","11","CH.1986.04.25_1.1.png"],

["3","57","Single","Short","Walking","Calvin walking in snow","1","Calvin","15","CH.1987.01.10_1.1.png"],

["3","73","Single","Short","Falling","Calvin falling","1","Calvin","19","CH.1988.07.12_1.1.png"],

["3","89","Single","Short","Looking","Calvin staring up/rain","1","Calvin","23","CH.1992.08.03_1.1.png"],

["3","6","Single","Long","Riding","Calvin and Hobbes in a cart","2","Calvin and Hobbes","2","CH.1985.12.03_1.2.png"],

["3","22","Single","Long","Thinking","Calvin and Hobbes sitting on a rock","2","Calvin and Hobbes","6","CH.1986.01.03_1.2.png"],

["3","38","Single","Long","Walking","Calvin walking away from Moe","2","Calvin and Moe","10","CH.1986.04.23_1.2.png"],

["3","54","Single","Long","Hanging in air","Calvin swinging on a swing","1","Calvin","14","CH.1985.12.07_1.2.png"],

["3","70","Single","Long","Floating","Calvin floating away with balloon","1","Calvin","18","CH.1988.07.04_1.2.png"],

["3","86","Single","Long","Looking","Calvin looking after losing brain","2","Calvin and mother","22","CH.1992.07.13_1.2.png"],

["3","3","Multiple","Short","Looking","Calvin looking at plate","2","Calvin and father","1","CH.1985.11.23_2.1.png"],

["3","19","Multiple","Short","Looking","Calvin looking at nails on table","2","Cavind and mother","5","CH.1985.12.27_2.1.png"],

["3","35","Multiple","Short","Staring","Calvin and Hobbes staring to the stars","2","Calvin and Hobbes","9","CH.1986.02.05_2.1.png"],

["3","51","Multiple","Short","Looking","Calvin looking outside from window","1","Calvin","13","CH.1986.05.27_2.1.png"],

["3","67","Multiple","Short","Waiting","Calvin and Hobbes waiting with a gift","2","Calvin and Hobbes","17","CH.1987.01.26_2.1.png"],

["3","83","Multiple","Short","Reading","Calvin reading and Hobbes walking away","2","Calvin and Hobbes","21","CH.1990.10.26_2.1.png"],

["3","16","Multiple","Long","Watching","Calvin watching tv","1","Calvin","4","CH.1985.12.09_2.2.png"],

["3","32","Multiple","Long","Reading","Calvin and Hobbes reading book behind desk","2","Calvin and Hobbes","8","CH.1986.02.03_2.2.png"],

["3","48","Multiple","Long","Looking","Calvin playing golf","1","Calvin","12","CH.1986.05.08_2.2.png"],

["3","64","Multiple","Long","Looking","Calvin looking at Hobbes writing behind desk","2","Calvin and Hobbes","16","CH.1987.01.24_2.2.png"],

["3","80","Multiple","Long","Resting","Calvin and Hobbes resting against a tree","2","Calvin and Hobbes","20","CH.1988.07.29_2.2.png"],

["3","96","Multiple","Long","Hiding","Calvin and Hobbes hiding behind bushes","2","Calvin and Hobbes","24","CH.1993.08.14_2.2.png"]
];


  var DataSourceD = [
["4","13","Single","Short","Watching","Calvin watching tv","1","Calvin","4","CH.1985.12.09_1.1.png"],

["4","29","Single","Short","Reading","Calvin and Hobbes reading book behind desk","2","Calvin and Hobbes","8","CH.1986.02.03_1.1.png"],

["4","45","Single","Short","Looking","Calvin playing golf","1","Calvin","12","CH.1986.05.08_1.1.png"],

["4","61","Single","Short","Looking","Calvin looking at Hobbes writing behind desk","2","Calvin and Hobbes","16","CH.1987.01.24_1.1.png"],

["4","77","Single","Short","Resting","Calvin and Hobbes resting against a tree","2","Calvin and Hobbes","20","CH.1988.07.29_1.1.png"],

["4","93","Single","Short","Hiding","Calvin and Hobbes hiding behind bushes","2","Calvin and Hobbes","24","CH.1993.08.14_1.1.png"],

["4","10","Single","Long","Looking","Calvin looking from treehouse","2","Calvin and Susie","3","CH.1985.12.06_1.2.png"],

["4","26","Single","Long","Looking","Calvin and father at dining table","2","Calvin and father","7","CH.1986.01.22_1.2.png"],

["4","42","Single","Long","Reading","Calvin reading a book behind desk","1","Calvin","11","CH.1986.04.25_1.2.png"],

["4","58","Single","Long","Walking","Calvin walking in snow","1","Calvin","15","CH.1987.01.10_1.2.png"],

["4","74","Single","Long","Falling","Calvin falling","1","Calvin","19","CH.1988.07.12_1.2.png"],

["4","90","Single","Long","Looking","Calvin staring up/rain","1","Calvin","23","CH.1992.08.03_1.2.png"],

["4","7","Multiple","Short","Riding","Calvin and Hobbes in a cart","2","Calvin and Hobbes","2","CH.1985.12.03_2.1.png"],

["4","23","Multiple","Short","Thinking","Calvin and Hobbes sitting on a rock","2","Calvin and Hobbes","6","CH.1986.01.03_2.1.png"],

["4","39","Multiple","Short","Walking","Calvin walking away from Moe","2","Calvin and Moe","10","CH.1986.04.23_2.1.png"],

["4","55","Multiple","Short","Hanging in air","Calvin swinging on a swing","1","Calvin","14","CH.1985.12.07_2.1.png"],

["4","71","Multiple","Short","Floating","Calvin floating away with balloon","1","Calvin","18","CH.1988.07.04_2.1.png"],

["4","87","Multiple","Short","Looking","Calvin looking after losing brain","2","Calvin and mother","22","CH.1992.07.13_2.1.png"],

["4","4","Multiple","Long","Looking","Calvin looking at plate","2","Calvin and father","1","CH.1985.11.23_2.2.png"],

["4","20","Multiple","Long","Looking","Calvin looking at nails on table","2","Cavind and mother","5","CH.1985.12.27_2.2.png"],

["4","36","Multiple","Long","Staring","Calvin and Hobbes staring to the stars","2","Calvin and Hobbes","9","CH.1986.02.05_2.2.png"],

["4","52","Multiple","Long","Looking","Calvin looking outside from window","1","Calvin","13","CH.1986.05.27_2.2.png"],

["4","68","Multiple","Long","Waiting","Calvin and Hobbes waiting with a gift","2","Calvin and Hobbes","17","CH.1987.01.26_2.2.png"],

["4","84","Multiple","Long","Reading","Calvin reading and Hobbes walking away","2","Calvin and Hobbes","21","CH.1990.10.26_2.2.png"]
];


var AllDataSources=[DataSourceA,DataSourceB,DataSourceC,DataSourceD];
