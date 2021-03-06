var DataSourceA = [
["1","103","1","Basic","1","1","103.1.jpg"],
["1","104","2","Basic","1","1","104.1.jpg"],
["1","106","3","Basic","1","1","106.1.jpg"],
["1","108","4","Basic","1","1","108.1.jpg"],
["1","109","5","Basic","1","1","109.1.jpg"],
["1","111","6","Basic","1","1","111.1.jpg"],
["1","112","7","Basic","1","1","112.1.jpg"],
["1","113","8","Basic","1","1","113.1.jpg"],
["1","117","9","Basic","1","1","117.1.jpg"],
["1","121","10","Conjunction","2","2","121.2.jpg"],
["1","122","11","Conjunction","2","2","122.2.jpg"],
["1","124","12","Conjunction","2","2","124.2.jpg"],
["1","125","13","Conjunction","2","2","125.2.jpg"],
["1","128","14","Conjunction","2","2","128.2.jpg"],
["1","129","15","Conjunction","2","2","129.2.jpg"],
["1","132","16","Conjunction","2","2","132.2.jpg"],
["1","137","17","Conjunction","2","2","137.2.jpg"],
["1","138","18","Conjunction","2","2","138.2.jpg"],
["1","139","19","Alternation","3","3","139.3.jpg"],
["1","141","20","Alternation","3","3","141.3.jpg"],
["1","145","21","Alternation","3","3","145.3.jpg"],
["1","147","22","Alternation","3","3","147.3.jpg"],
["1","150","23","Alternation","3","3","150.3.jpg"],
["1","151","24","Alternation","3","3","151.3.jpg"],
["1","158","25","Alternation","3","3","158.3.jpg"],
["1","159","26","Alternation","3","3","159.3.jpg"],
["1","164","27","Alternation","3","3","164.3.jpg"],
["1","165","28","Displacement","4","3","165.4.jpg"],
["1","166","29","Displacement","4","3","166.4.jpg"],
["1","167","30","Displacement","4","3","167.4.jpg"],
["1","169","31","Displacement","4","3","169.4.jpg"],
["1","170","32","Displacement","4","3","170.4.jpg"],
["1","180","33","Displacement","4","3","180.4.jpg"],
["1","181","34","Displacement","4","3","181.4.jpg"],
["1","189","35","Displacement","4","3","189.4.jpg"],
["1","191","36","Displacement","4","3","191.4.jpg"],
];

var DataSourceB = [
["2","103","1","Displacement","4","3","103.4.jpg"],
["2","104","2","Displacement","4","3","104.4.jpg"],
["2","106","3","Displacement","4","3","106.4.jpg"],
["2","108","4","Displacement","4","3","108.4.jpg"],
["2","109","5","Displacement","4","3","109.4.jpg"],
["2","111","6","Displacement","4","3","111.4.jpg"],
["2","112","7","Displacement","4","3","112.4.jpg"],
["2","113","8","Displacement","4","3","113.4.jpg"],
["2","117","9","Displacement","4","3","117.4.jpg"],
["2","121","10","Basic","1","1","121.1.jpg"],
["2","122","11","Basic","1","1","122.1.jpg"],
["2","124","12","Basic","1","1","124.1.jpg"],
["2","125","13","Basic","1","1","125.1.jpg"],
["2","128","14","Basic","1","1","128.1.jpg"],
["2","129","15","Basic","1","1","129.1.jpg"],
["2","132","16","Basic","1","1","132.1.jpg"],
["2","137","17","Basic","1","1","137.1.jpg"],
["2","138","18","Basic","1","1","138.1.jpg"],
["2","139","19","Conjunction","2","2","139.2.jpg"],
["2","141","20","Conjunction","2","2","141.2.jpg"],
["2","145","21","Conjunction","2","2","145.2.jpg"],
["2","147","22","Conjunction","2","2","147.2.jpg"],
["2","150","23","Conjunction","2","2","150.2.jpg"],
["2","151","24","Conjunction","2","2","151.2.jpg"],
["2","158","25","Conjunction","2","2","158.2.jpg"],
["2","159","26","Conjunction","2","2","159.2.jpg"],
["2","164","27","Conjunction","2","2","164.2.jpg"],
["2","165","28","Alternation","3","3","165.3.jpg"],
["2","166","29","Alternation","3","3","166.3.jpg"],
["2","167","30","Alternation","3","3","167.3.jpg"],
["2","169","31","Alternation","3","3","169.3.jpg"],
["2","170","32","Alternation","3","3","170.3.jpg"],
["2","180","33","Alternation","3","3","180.3.jpg"],
["2","181","34","Alternation","3","3","181.3.jpg"],
["2","189","35","Alternation","3","3","189.3.jpg"],
["2","191","36","Alternation","3","3","191.3.jpg"],
];

var DataSourceC = [
["3","103","1","Alternation","3","3","103.3.jpg"],
["3","104","2","Alternation","3","3","104.3.jpg"],
["3","106","3","Alternation","3","3","106.3.jpg"],
["3","108","4","Alternation","3","3","108.3.jpg"],
["3","109","5","Alternation","3","3","109.3.jpg"],
["3","111","6","Alternation","3","3","111.3.jpg"],
["3","112","7","Alternation","3","3","112.3.jpg"],
["3","113","8","Alternation","3","3","113.3.jpg"],
["3","117","9","Alternation","3","3","117.3.jpg"],
["3","121","10","Displacement","4","3","121.4.jpg"],
["3","122","11","Displacement","4","3","122.4.jpg"],
["3","124","12","Displacement","4","3","124.4.jpg"],
["3","125","13","Displacement","4","3","125.4.jpg"],
["3","128","14","Displacement","4","3","128.4.jpg"],
["3","129","15","Displacement","4","3","129.4.jpg"],
["3","132","16","Displacement","4","3","132.4.jpg"],
["3","137","17","Displacement","4","3","137.4.jpg"],
["3","138","18","Displacement","4","3","138.4.jpg"],
["3","139","19","Basic","1","1","139.1.jpg"],
["3","141","20","Basic","1","1","141.1.jpg"],
["3","145","21","Basic","1","1","145.1.jpg"],
["3","147","22","Basic","1","1","147.1.jpg"],
["3","150","23","Basic","1","1","150.1.jpg"],
["3","151","24","Basic","1","1","151.1.jpg"],
["3","158","25","Basic","1","1","158.1.jpg"],
["3","159","26","Basic","1","1","159.1.jpg"],
["3","164","27","Basic","1","1","164.1.jpg"],
["3","165","28","Conjunction","2","2","165.2.jpg"],
["3","166","29","Conjunction","2","2","166.2.jpg"],
["3","167","30","Conjunction","2","2","167.2.jpg"],
["3","169","31","Conjunction","2","2","169.2.jpg"],
["3","170","32","Conjunction","2","2","170.2.jpg"],
["3","180","33","Conjunction","2","2","180.2.jpg"],
["3","181","34","Conjunction","2","2","181.2.jpg"],
["3","189","35","Conjunction","2","2","189.2.jpg"],
["3","191","36","Conjunction","2","2","191.2.jpg"],
];

var DataSourceD = [
["4","103","1","Conjunction","2","2","103.2.jpg"],
["4","104","2","Conjunction","2","2","104.2.jpg"],
["4","106","3","Conjunction","2","2","106.2.jpg"],
["4","108","4","Conjunction","2","2","108.2.jpg"],
["4","109","5","Conjunction","2","2","109.2.jpg"],
["4","111","6","Conjunction","2","2","111.2.jpg"],
["4","112","7","Conjunction","2","2","112.2.jpg"],
["4","113","8","Conjunction","2","2","113.2.jpg"],
["4","117","9","Conjunction","2","2","117.2.jpg"],
["4","121","10","Alternation","3","3","121.3.jpg"],
["4","122","11","Alternation","3","3","122.3.jpg"],
["4","124","12","Alternation","3","3","124.3.jpg"],
["4","125","13","Alternation","3","3","125.3.jpg"],
["4","128","14","Alternation","3","3","128.3.jpg"],
["4","129","15","Alternation","3","3","129.3.jpg"],
["4","132","16","Alternation","3","3","132.3.jpg"],
["4","137","17","Alternation","3","3","137.3.jpg"],
["4","138","18","Alternation","3","3","138.3.jpg"],
["4","139","19","Displacement","4","3","139.4.jpg"],
["4","141","20","Displacement","4","3","141.4.jpg"],
["4","145","21","Displacement","4","3","145.4.jpg"],
["4","147","22","Displacement","4","3","147.4.jpg"],
["4","150","23","Displacement","4","3","150.4.jpg"],
["4","151","24","Displacement","4","3","151.4.jpg"],
["4","158","25","Displacement","4","3","158.4.jpg"],
["4","159","26","Displacement","4","3","159.4.jpg"],
["4","164","27","Displacement","4","3","164.4.jpg"],
["4","165","28","Basic","1","1","165.1.jpg"],
["4","166","29","Basic","1","1","166.1.jpg"],
["4","167","30","Basic","1","1","167.1.jpg"],
["4","169","31","Basic","1","1","169.1.jpg"],
["4","170","32","Basic","1","1","170.1.jpg"],
["4","180","33","Basic","1","1","180.1.jpg"],
["4","181","34","Basic","1","1","181.1.jpg"],
["4","189","35","Basic","1","1","189.1.jpg"],
["4","191","36","Basic","1","1","191.1.jpg"],
];


var AllDataSources=[DataSourceA,DataSourceB,DataSourceC,DataSourceD];
