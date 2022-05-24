var DataSourceA = [
["1","103","1","Basic","1","1","same","y103.1.jpg","c103.1.jpg"],
["1","104","2","Basic","1","1","same","y104.1.jpg","c104.1.jpg"],
["1","106","3","Basic","1","1","same","y106.1.jpg","c106.1.jpg"],
["1","108","4","Conjunction","2","2","different","y108.2.jpg","c108.2.jpg"],
["1","109","5","Alternation","3","3","different","y109.3.jpg","c109.3.jpg"],
["1","111","6","Displacement","4","3","different","y111.4.jpg","c111.4.jpg"],
["1","112","7","SemanticMatch","5","2","SemanticMatch","y112.5.jpg","c112.5.jpg"],
["1","113","8","SemanticMatch","5","1","SemanticMatch","y113.5.jpg","c113.5.jpg"],
["1","117","9","SemanticMatch","5","1","SemanticMatch","y117.5.jpg","c117.5.jpg"],
["1","121","10","Basic","1","1","different","y121.1.jpg","c121.1.jpg"],
["1","122","11","Conjunction","2","2","same","y122.2.jpg","c122.2.jpg"],
["1","124","12","Conjunction","2","2","same","y124.2.jpg","c124.2.jpg"],
["1","125","13","Conjunction","2","2","same","y125.2.jpg","c125.2.jpg"],
["1","128","14","Alternation","3","3","different","y128.3.jpg","c128.3.jpg"],
["1","129","15","Displacement","4","3","different","y129.4.jpg","c129.4.jpg"],
["1","132","16","SemanticMatch","5","2","SemanticMatch","y132.5.jpg","c132.5.jpg"],
["1","137","17","SemanticMatch","5","2","SemanticMatch","y137.5.jpg","c137.5.jpg"],
["1","138","18","SemanticMatch","5","1","SemanticMatch","y138.5.jpg","c138.5.jpg"],
["1","139","19","Basic","1","1","different","y139.1.jpg","c139.1.jpg"],
["1","141","20","Conjunction","2","2","different","y141.2.jpg","c141.2.jpg"],
["1","145","21","Alternation","3","3","same","y145.3.jpg","c145.3.jpg"],
["1","147","22","Alternation","3","3","same","y147.3.jpg","c147.3.jpg"],
["1","150","23","Alternation","3","3","same","y150.3.jpg","c150.3.jpg"],
["1","151","24","Displacement","4","3","different","y151.4.jpg","c151.4.jpg"],
["1","158","25","SemanticMatch","5","1","SemanticMatch","y158.5.jpg","c158.5.jpg"],
["1","159","26","SemanticMatch","5","3","SemanticMatch","y159.5.jpg","c159.5.jpg"],
["1","164","27","SemanticMatch","5","3","SemanticMatch","y164.5.jpg","c164.5.jpg"],
["1","165","28","Basic","1","1","different","y165.1.jpg","c165.1.jpg"],
["1","166","29","Conjunction","2","2","different","y166.2.jpg","c166.2.jpg"],
["1","167","30","Alternation","3","3","different","y167.3.jpg","c167.3.jpg"],
["1","169","31","Displacement","4","3","same","y169.4.jpg","c169.4.jpg"],
["1","170","32","Displacement","4","3","same","y170.4.jpg","c170.4.jpg"],
["1","180","33","Displacement","4","3","same","y180.4.jpg","c180.4.jpg"],
["1","181","34","SemanticMatch","5","3","SemanticMatch","y181.5.jpg","c181.5.jpg"],
["1","189","35","SemanticMatch","5","3","SemanticMatch","y189.5.jpg","c189.5.jpg"],
["1","191","36","SemanticMatch","5","3","SemanticMatch","y191.5.jpg","c191.5.jpg"],
];

var DataSourceB = [
["2","103","1","Conjunction","2","2","different","y103.2.jpg","c103.2.jpg"],
["2","104","2","Alternation","3","3","different","y104.2.jpg","c104.3.jpg"],
["2","106","3","Displacement","4","3","same","y106.4.jpg","c106.4.jpg"],
["2","108","4","Displacement","4","3","same","y108.4.jpg","c108.4.jpg"],
["2","109","5","Displacement","4","3","same","y109.4.jpg","c109.4.jpg"],
["2","111","6","SemanticMatch","5","1","SemanticMatch","y111.5.jpg","c111.5.jpg"],
["2","112","7","SemanticMatch","5","2","SemanticMatch","y112.5.jpg","c112.5.jpg"],
["2","113","8","SemanticMatch","5","1","SemanticMatch","y113.5.jpg","c113.5.jpg"],
["2","117","9","Basic","1","1","different","y117.1.jpg","c117.1.jpg"],
["2","121","10","Conjunction","2","2","different","y121.2.jpg","c121.2.jpg"],
["2","122","11","Alternation","3","3","different","y122.3.jpg","c122.3.jpg"],
["2","124","12","Displacement","4","3","different","y124.4.jpg","c124.4.jpg"],
["2","125","13","SemanticMatch","5","2","SemanticMatch","y125.5.jpg","c125.5.jpg"],
["2","128","14","SemanticMatch","5","2","SemanticMatch","y128.5.jpg","c128.5.jpg"],
["2","129","15","SemanticMatch","5","2","SemanticMatch","y129.5.jpg","c129.5.jpg"],
["2","132","16","Basic","1","1","same","y132.1.jpg","c132.1.jpg"],
["2","137","17","Basic","1","1","same","y137.1.jpg","c137.1.jpg"],
["2","138","18","Basic","1","1","same","y138.1.jpg","c138.1.jpg"],
["2","139","19","Conjunction","2","2","same","y139.2.jpg","c139.2.jpg"],
["2","141","20","Conjunction","2","2","same","y141.2.jpg","c141.2.jpg"],
["2","145","21","Conjunction","2","2","same","y145.2.jpg","c145.2.jpg"],
["2","147","22","Alternation","3","3","different","y147.3.jpg","c147.3.jpg"],
["2","150","23","Displacement","4","3","different","y150.4.jpg","c150.4.jpg"],
["2","151","24","SemanticMatch","5","3","SemanticMatch","y151.5.jpg","c151.5.jpg"],
["2","158","25","SemanticMatch","5","1","SemanticMatch","y158.5.jpg","c158.5.jpg"],
["2","159","26","SemanticMatch","5","3","SemanticMatch","y159.5.jpg","c159.5.jpg"],
["2","164","27","Basic","1","1","different","y164.1.jpg","c164.1.jpg"],
["2","165","28","Conjunction","2","2","different","y165.2.jpg","c165.2.jpg"],
["2","166","29","Alternation","3","3","same","y166.3.jpg","c166.3.jpg"],
["2","167","30","Alternation","3","3","same","y167.3.jpg","c167.3.jpg"],
["2","169","31","Alternation","3","3","same","y169.3.jpg","c169.3.jpg"],
["2","170","32","Displacement","4","3","different","y170.4.jpg","c170.4.jpg"],
["2","180","33","SemanticMatch","5","3","SemanticMatch","y180.5.jpg","c180.5.jpg"],
["2","181","34","SemanticMatch","5","3","SemanticMatch","y181.5.jpg","c181.5.jpg"],
["2","189","35","SemanticMatch","5","3","SemanticMatch","y189.5.jpg","c189.5.jpg"],
["2","191","36","Basic","1","1","different","y191.1.jpg","c191.1.jpg"],
];

var DataSourceC = [
["3","103","1","Alternation","3","3","same","y103.3.jpg","c103.3.jpg"],
["3","104","2","Alternation","3","3","same","y104.3.jpg","c104.3.jpg"],
["3","106","3","Alternation","3","3","same","y106.3.jpg","c106.3.jpg"],
["3","108","4","Displacement","4","3","different","y108.4.jpg","c108.4.jpg"],
["3","109","5","SemanticMatch","5","1","SemanticMatch","y109.5.jpg","c109.5.jpg"],
["3","111","6","SemanticMatch","5","1","SemanticMatch","y111.5.jpg","c111.5.jpg"],
["3","112","7","SemanticMatch","5","2","SemanticMatch","y112.5.jpg","c112.5.jpg"],
["3","113","8","Basic","1","1","different","y113.1.jpg","c113.1.jpg"],
["3","117","9","Conjunction","2","2","different","y117.2.jpg","c117.2.jpg"],
["3","121","10","Alternation","3","3","different","y121.3.jpg","c121.3.jpg"],
["3","122","11","Displacement","4","3","same","y122.4.jpg","c122.4.jpg"],
["3","124","12","Displacement","4","3","same","y124.4.jpg","c124.4.jpg"],
["3","125","13","Displacement","4","3","same","y125.4.jpg","c125.4.jpg"],
["3","128","14","SemanticMatch","5","2","SemanticMatch","y128.5.jpg","c128.5.jpg"],
["3","129","15","SemanticMatch","5","2","SemanticMatch","y129.5.jpg","c129.5.jpg"],
["3","132","16","SemanticMatch","5","2","SemanticMatch","y132.5.jpg","c132.5.jpg"],
["3","137","17","Basic","1","1","different","y137.1.jpg","c137.1.jpg"],
["3","138","18","Conjunction","2","2","different","y138.2.jpg","c138.2.jpg"],
["3","139","19","Alternation","3","3","different","y139.3.jpg","c139.3.jpg"],
["3","141","20","Displacement","4","3","different","y141.4.jpg","c141.4.jpg"],
["3","145","21","SemanticMatch","5","3","SemanticMatch","y145.5.jpg","c145.5.jpg"],
["3","147","22","SemanticMatch","5","3","SemanticMatch","y147.5.jpg","c147.5.jpg"],
["3","150","23","SemanticMatch","5","3","SemanticMatch","y150.5.jpg","c150.5.jpg"],
["3","151","24","Basic","1","1","same","y151.1.jpg","c151.1.jpg"],
["3","158","25","Basic","1","1","same","y158.1.jpg","c158.1.jpg"],
["3","159","26","Basic","1","1","same","y159.1.jpg","c159.1.jpg"],
["3","164","27","Conjunction","2","2","different","y164.2.jpg","c164.2.jpg"],
["3","165","28","Alternation","3","3","different","y165.3.jpg","c165.3.jpg"],
["3","166","29","Displacement","4","3","different","y166.4.jpg","c166.4.jpg"],
["3","167","30","SemanticMatch","5","3","SemanticMatch","y167.5.jpg","c167.5.jpg"],
["3","169","31","SemanticMatch","5","3","SemanticMatch","y169.5.jpg","c169.5.jpg"],
["3","170","32","SemanticMatch","5","3","SemanticMatch","y170.5.jpg","c170.5.jpg"],
["3","180","33","Basic","1","1","different","y180.1.jpg","c180.1.jpg"],
["3","181","34","Conjunction","2","2","same","y181.2.jpg","c181.2.jpg"],
["3","189","35","Conjunction","2","2","same","y189.2.jpg","c189.2.jpg"],
["3","191","36","Conjunction","2","2","same","y191.2.jpg","c191.2.jpg"],
];

var DataSourceD = [
["4","103","1","Displacement","4","3","different","y103.4.jpg","c103.4.jpg"],
["4","104","2","SemanticMatch","5","1","SemanticMatch","y104.4.jpg","c104.4.jpg"],
["4","106","3","SemanticMatch","5","1","SemanticMatch","y106.5.jpg","c106.5.jpg"],
["4","108","4","SemanticMatch","5","1","SemanticMatch","y108.5.jpg","c108.5.jpg"],
["4","109","5","Basic","1","1","different","y109.1.jpg","c109.1.jpg"],
["4","111","6","Conjunction","2","2","same","y111.2.jpg","c111.2.jpg"],
["4","112","7","Conjunction","2","2","same","y112.2.jpg","c112.3.jpg"],
["4","113","8","Conjunction","2","2","same","y113.2.jpg","c113.2.jpg"],
["4","117","9","Alternation","3","3","different","y117.3.jpg","c117.3.jpg"],
["4","121","10","Displacement","4","3","different","y121.4.jpg","c121.4.jpg"],
["4","122","11","SemanticMatch","5","2","SemanticMatch","y122.5.jpg","c122.5.jpg"],
["4","124","12","SemanticMatch","5","2","SemanticMatch","y124.5.jpg","c124.5.jpg"],
["4","125","13","SemanticMatch","5","2","SemanticMatch","y125.5.jpg","c125.5.jpg"],
["4","128","14","Basic","1","1","different","y128.1.jpg","c128.1.jpg"],
["4","129","15","Conjunction","2","2","different","y129.2.jpg","c129.2.jpg"],
["4","132","16","Alternation","3","3","same","y132.3.jpg","c132.3.jpg"],
["4","137","17","Alternation","3","3","same","y137.3.jpg","c137.3.jpg"],
["4","138","18","Alternation","3","3","same","y138.3.jpg","c138.3.jpg"],
["4","139","19","Displacement","4","3","same","y139.4.jpg","c139.4.jpg"],
["4","141","20","Displacement","4","3","same","y141.4.jpg","c141.4.jpg"],
["4","145","21","Displacement","4","3","same","y145.4.jpg","c145.4.jpg"],
["4","147","22","SemanticMatch","5","3","SemanticMatch","y147.5.jpg","c147.5.jpg"],
["4","150","23","SemanticMatch","5","3","SemanticMatch","y150.5.jpg","c150.5.jpg"],
["4","151","24","SemanticMatch","5","3","SemanticMatch","y151.5.jpg","c151.5.jpg"],
["4","158","25","Basic","1","1","different","y158.1.jpg","c158.1.jpg"],
["4","159","26","Conjunction","2","2","different","y159.2.jpg","c159.2.jpg"],
["4","164","27","Alternation","3","3","different","y164.3.jpg","c164.3.jpg"],
["4","165","28","Displacement","4","3","different","y165.4.jpg","c165.4.jpg"],
["4","166","29","SemanticMatch","5","3","SemanticMatch","y166.5.jpg","c166.5.jpg"],
["4","167","30","SemanticMatch","5","3","SemanticMatch","y167.5.jpg","c167.5.jpg"],
["4","169","31","SemanticMatch","5","3","SemanticMatch","y169.5.jpg","c169.5.jpg"],
["4","170","32","Basic","1","1","same","y170.1.jpg","c170.1.jpg"],
["4","180","33","Basic","1","1","same","y180.1.jpg","c180.1.jpg"],
["4","181","34","Basic","1","1","same","y181.1.jpg","c181.1.jpg"],
["4","189","35","Conjunction","2","2","different","y189.2.jpg","c189.2.jpg"],
["4","191","36","Alternation","3","3","different","y191.3.jpg","c191.3.jpg"],
];

var DataSourceE = [
["5","103","1","SemanticMatch","5","1","SemanticMatch","y103.5.jpg","c103.5.jpg"],
["5","104","2","SemanticMatch","5","1","SemanticMatch","y104.5.jpg","c104.5.jpg"],
["5","106","3","SemanticMatch","5","1","SemanticMatch","y106.5.jpg","c106.5.jpg"],
["5","108","4","Basic","1","1","different","y108.1.jpg","c108.1.jpg"],
["5","109","5","Conjunction","2","2","different","y109.2.jpg","c109.2.jpg"],
["5","111","6","Alternation","3","3","same","y111.3.jpg","c111.3.jpg"],
["5","112","7","Alternation","3","3","same","y112.3.jpg","c112.4.jpg"],
["5","113","8","Alternation","3","3","same","y113.3.jpg","c113.3.jpg"],
["5","117","9","Displacement","4","3","different","y117.4.jpg","c117.4.jpg"],
["5","121","10","SemanticMatch","5","2","SemanticMatch","y121.5.jpg","c121.5.jpg"],
["5","122","11","SemanticMatch","5","2","SemanticMatch","y122.5.jpg","c122.5.jpg"],
["5","124","12","SemanticMatch","5","2","SemanticMatch","y124.5.jpg","c124.5.jpg"],
["5","125","13","Basic","1","1","different","y125.1.jpg","c125.1.jpg"],
["5","128","14","Conjunction","2","2","different","y128.2.jpg","c128.2.jpg"],
["5","129","15","Alternation","3","3","different","y129.3.jpg","c129.3.jpg"],
["5","132","16","Displacement","4","3","same","y132.4.jpg","c132.4.jpg"],
["5","137","17","Displacement","4","3","same","y137.4.jpg","c137.4.jpg"],
["5","138","18","Displacement","4","3","same","y138.4.jpg","c138.4.jpg"],
["5","139","19","SemanticMatch","5","3","SemanticMatch","y139.5.jpg","c139.5.jpg"],
["5","141","20","SemanticMatch","5","3","SemanticMatch","y141.5.jpg","c141.5.jpg"],
["5","145","21","SemanticMatch","5","3","SemanticMatch","y145.5.jpg","c145.5.jpg"],
["5","147","22","Basic","1","1","same","y147.1.jpg","c147.1.jpg"],
["5","150","23","Basic","1","1","same","y150.1.jpg","c150.1.jpg"],
["5","151","24","Basic","1","1","same","y151.1.jpg","c151.1.jpg"],
["5","158","25","Conjunction","2","2","different","y158.2.jpg","c158.2.jpg"],
["5","159","26","Alternation","3","3","different","y159.3.jpg","c159.3.jpg"],
["5","164","27","Displacement","4","3","different","y164.4.jpg","c164.4.jpg"],
["5","165","28","SemanticMatch","5","3","SemanticMatch","y165.5.jpg","c165.5.jpg"],
["5","166","29","SemanticMatch","5","3","SemanticMatch","y166.5.jpg","c166.5.jpg"],
["5","167","30","SemanticMatch","5","3","SemanticMatch","y167.5.jpg","c167.5.jpg"],
["5","169","31","Basic","1","1","different","y169.1.jpg","c169.1.jpg"],
["5","170","32","Conjunction","2","2","same","y170.2.jpg","c170.2.jpg"],
["5","180","33","Conjunction","2","2","same","y180.2.jpg","c180.2.jpg"],
["5","181","34","Conjunction","2","2","same","y181.2.jpg","c181.2.jpg"],
["5","189","35","Alternation","3","3","different","y189.3.jpg","c189.3.jpg"],
["5","191","36","Displacement","4","3","different","y191.4.jpg","c191.4.jpg"],
];


var AllDataSources=[DataSourceA,DataSourceB,DataSourceC,DataSourceD,DataSourceE];