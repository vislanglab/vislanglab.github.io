var DataSourceA = [
["1","1","BAG","INHERENT","CONGRUENT","1","1","YOU CAN PUT SOMETHING IN THIS","BAG_A_IN_C.png"],
["1","9","KNIFE","INHERENT","CONGRUENT","1","1","YOU CAN CUT WITH THIS","KNIFE_A_IN_C.png"],
["1","5","CLOCK","INHERENT","INCONGRUENT","1","2","YOU CAN TAN WITH THIS","CLOCK_E_IN_IC.png"],
["1","13","SCARF","INHERENT","INCONGRUENT","1","2","YOU CAN READ THIS","SCARF_E_IN_IC.png"],
["1","2","BED","EMERGENT","CONGRUENT","2","1","YOU CAN SLEEP IN THIS","BED_B_EM_C.png"],
["1","10","LAMP","EMERGENT","CONGRUENT","2","1","YOU CAN ILLUMINATE WITH THIS","LAMP_B_EM_C.png"],
["1","6","EGG","EMERGENT","INCONGRUENT","2","2","YOU CAN DRINK FROM THIS","EGG_F_EM_IC.png"],
["1","14","SOCKS","EMERGENT","INCONGRUENT","2","2","THIS CAN BE BLOWN AWAY","SOCKS_F_EM_IC.png"],
["1","3","BOOK","ADJOINED","CONGRUENT","3","1","YOU CAN READ THIS","BOOK_C_AD_C.png"],
["1","11","LEAF","ADJOINED","CONGRUENT","3","1","THIS CAN BE BLOWN AWAY","LEAF_C_AD_C.png"],
["1","7","GLASS","ADJOINED","INCONGRUENT","3","2","YOU CAN EAT THIS","GLASS_G_AD_IC.png"],
["1","15","SUN","ADJOINED","INCONGRUENT","3","2","YOU CAN READ TIME WITH THIS","SUN_G_AD_IC.png"],
["1","4","CAR","INDEPENDENT","CONGRUENT","4","1","YOU CAN DRIVE THIS","CAR_D_IND_C.png"],
["1","12","ROSE","INDEPENDENT","CONGRUENT","4","1","YOU CAN PICK THIS","ROSE_D_IND_C.png"],
["1","8","KEY","INDEPENDENT","INCONGRUENT","4","2","YOU CAN PUT SOMETHING IN THIS","KEY_H_IND_IC.png"],
["1","16","TREE","INDEPENDENT","INCONGRUENT","4","2","YOU CAN DRIVE THIS","TREE_H_IND_IC.png",]
];

var DataSourceB = [
["2","8","KEY","INHERENT","CONGRUENT","1","1","YOU CAN LOCK WITH THIS","KEY_A_IN_C.png"],
["2","16","TREE","INHERENT","CONGRUENT","1","1","YOU CAN PLANT THIS","TREE_A_IN_C.png"],
["2","4","CAR","INHERENT","INCONGRUENT","1","2","YOU CAN PLANT THIS","CAR_E_IN_IC.png"],
["2","12","ROSE","INHERENT","INCONGRUENT","1","2","YOU CAN SLEEP IN THIS","ROSE_E_IN_IC.png"],
["2","1","BAG","EMERGENT","CONGRUENT","2","1","YOU CAN PUT SOMETHING IN THIS","BAG_B_EM_C.png"],
["2","9","KNIFE","EMERGENT","CONGRUENT","2","1","YOU CAN CUT WITH THIS","KNIFE_B_EM_C.png"],
["2","5","CLOCK","EMERGENT","INCONGRUENT","2","2","YOU CAN TAN WITH THIS","CLOCK_F_EM_IC.png"],
["2","13","SCARF","EMERGENT","INCONGRUENT","2","2","YOU CAN READ THIS","SCARF_F_EM_IC.png"],
["2","2","BED","ADJOINED","CONGRUENT","3","1","YOU CAN SLEEP IN THIS","BED_C_AD_C.png"],
["2","10","LAMP","ADJOINED","CONGRUENT","3","1","YOU CAN ILLUMINATE WITH THIS","LAMP_C_AD_C.png"],
["2","6","EGG","ADJOINED","INCONGRUENT","3","2","YOU CAN DRINK FROM THIS","EGG_G_AD_IC.png"],
["2","14","SOCKS","ADJOINED","INCONGRUENT","3","2","THIS CAN BE BLOWN AWAY","SOCKS_G_AD_IC.png"],
["2","3","BOOK","INDEPENDENT","CONGRUENT","4","1","YOU CAN READ THIS","BOOK_D_IND_C.png"],
["2","11","LEAF","INDEPENDENT","CONGRUENT","4","1","THIS CAN BE BLOWN AWAY","LEAF_D_IND_C.png"],
["2","7","GLASS","INDEPENDENT","INCONGRUENT","4","2","YOU CAN EAT THIS","GLASS_H_IND_IC.png"],
["2","15","SUN","INDEPENDENT","INCONGRUENT","4","2","YOU CAN READ TIME WITH THIS","SUN_H_IND_IC.png",]
];

var DataSourceC = [
["3","7","GLASS","INHERENT","CONGRUENT","1","1","YOU CAN DRINK FROM THIS","GLASS_A_IN_C.png"],
["3","15","SUN","INHERENT","CONGRUENT","1","1","YOU CAN TAN WITH THIS","SUN_A_IN_C.png"],
["3","3","BOOK","INHERENT","INCONGRUENT","1","2","YOU CAN WEAR THIS","BOOK_E_IN_IC.png"],
["3","11","LEAF","INHERENT","INCONGRUENT","1","2","YOU CAN PUT THESE ON","LEAF_E_IN_IC.png"],
["3","8","KEY","EMERGENT","CONGRUENT","2","1","YOU CAN LOCK WITH THIS","KEY_B_EM_C.png"],
["3","16","TREE","EMERGENT","CONGRUENT","2","1","YOU CAN PLANT THIS","TREE_B_EM_C.png"],
["3","4","CAR","EMERGENT","INCONGRUENT","2","2","YOU CAN PLANT THIS","CAR_F_EM_IC.png"],
["3","12","ROSE","EMERGENT","INCONGRUENT","2","2","YOU CAN SLEEP IN THIS","ROSE_F_EM_IC.png"],
["3","1","BAG","ADJOINED","CONGRUENT","3","1","YOU CAN PUT SOMETHING IN THIS","BAG_C_AD_C.png"],
["3","9","KNIFE","ADJOINED","CONGRUENT","3","1","YOU CAN CUT WITH THIS","KNIFE_C_AD_C.png"],
["3","5","CLOCK","ADJOINED","INCONGRUENT","3","2","YOU CAN TAN WITH THIS","CLOCK_G_AD_IC.png"],
["3","13","SCARF","ADJOINED","INCONGRUENT","3","2","YOU CAN READ THIS","SCARF_G_AD_IC.png"],
["3","2","BED","INDEPENDENT","CONGRUENT","4","1","YOU CAN SLEEP IN THIS","BED_D_IND_C.png"],
["3","10","LAMP","INDEPENDENT","CONGRUENT","4","1","YOU CAN ILLUMINATE WITH THIS","LAMP_D_IND_C.png"],
["3","6","EGG","INDEPENDENT","INCONGRUENT","4","2","YOU CAN DRINK FROM THIS","EGG_H_IND_IC.png"],
["3","14","SOCKS","INDEPENDENT","INCONGRUENT","4","2","THIS CAN BE BLOWN AWAY","SOCKS_H_IND_IC.png",]
];

var DataSourceD = [
["4","6","EGG","INHERENT","CONGRUENT","1","1","YOU CAN EAT THIS","EGG_A_IN_C.png"],
["4","14","SOCKS","INHERENT","CONGRUENT","1","1","YOU CAN PUT THESE ON","SOCKS_A_IN_C.png"],
["4","2","BED","INHERENT","INCONGRUENT","1","2","YOU CAN PICK THIS","BED_E_IN_IC.png"],
["4","10","LAMP","INHERENT","INCONGRUENT","1","2","YOU CAN CUT WITH THIS","LAMP_E_IN_IC.png"],
["4","7","GLASS","EMERGENT","CONGRUENT","2","1","YOU CAN DRINK FROM THIS","GLASS_B_EM_C.png"],
["4","15","SUN","EMERGENT","CONGRUENT","2","1","YOU CAN TAN WITH THIS","SUN_B_EM_C.png"],
["4","3","BOOK","EMERGENT","INCONGRUENT","2","2","YOU CAN WEAR THIS","BOOK_F_EM_IC.png"],
["4","11","LEAF","EMERGENT","INCONGRUENT","2","2","YOU CAN PUT THESE ON","LEAF_F_EM_IC.png"],
["4","8","KEY","ADJOINED","CONGRUENT","3","1","YOU CAN LOCK WITH THIS","KEY_C_AD_C.png"],
["4","16","TREE","ADJOINED","CONGRUENT","3","1","YOU CAN PLANT THIS","TREE_C_AD_C.png"],
["4","4","CAR","ADJOINED","INCONGRUENT","3","2","YOU CAN PLANT THIS","CAR_G_AD_IC.png"],
["4","12","ROSE","ADJOINED","INCONGRUENT","3","2","YOU CAN SLEEP IN THIS","ROSE_G_AD_IC.png"],
["4","1","BAG","INDEPENDENT","CONGRUENT","4","1","YOU CAN PUT SOMETHING IN THIS","BAG_D_IND_C.png"],
["4","9","KNIFE","INDEPENDENT","CONGRUENT","4","1","YOU CAN CUT WITH THIS","KNIFE_D_IND_C.png"],
["4","5","CLOCK","INDEPENDENT","INCONGRUENT","4","2","YOU CAN TAN WITH THIS","CLOCK_H_IND_IC.png"],
["4","13","SCARF","INDEPENDENT","INCONGRUENT","4","2","YOU CAN READ THIS","SCARF_H_IND_IC.png",]
];

var DataSourceE = [
["5","5","CLOCK","INHERENT","CONGRUENT","1","1","YOU CAN READ TIME WITH THIS","CLOCK_A_IN_C.png"],
["5","13","SCARF","INHERENT","CONGRUENT","1","1","YOU CAN WEAR THIS","SCAR_A_IN_C.png"],
["5","1","BAG","INHERENT","INCONGRUENT","1","2","YOU CAN LOCK WITH THIS","BAG_E_IN_IC.png"],
["5","9","KNIFE","INHERENT","INCONGRUENT","1","2","YOU CAN ILLUMINATE WITH THIS","KNIFE_E_IN_IC.png"],
["5","6","EGG","EMERGENT","CONGRUENT","2","1","YOU CAN EAT THIS","EGG_B_EM_C.png"],
["5","14","SOCKS","EMERGENT","CONGRUENT","2","1","YOU CAN PUT THESE ON","SOCKS_B_EM_C.png"],
["5","2","BED","EMERGENT","INCONGRUENT","2","2","YOU CAN PICK THIS","BED_F_EM_IC.png"],
["5","10","LAMP","EMERGENT","INCONGRUENT","2","2","YOU CAN CUT WITH THIS","LAMP_F_EM_IC.png"],
["5","7","GLASS","ADJOINED","CONGRUENT","3","1","YOU CAN DRINK FROM THIS","GLASS_C_AD_C.png"],
["5","15","SUN","ADJOINED","CONGRUENT","3","1","YOU CAN TAN WITH THIS","SUN_C_AD_C.png"],
["5","3","BOOK","ADJOINED","INCONGRUENT","3","2","YOU CAN WEAR THIS","BOOK_G_AD_IC.png"],
["5","11","LEAF","ADJOINED","INCONGRUENT","3","2","YOU CAN PUT THESE ON","LEAF_G_AD_IC.png"],
["5","8","KEY","INDEPENDENT","CONGRUENT","4","1","YOU CAN LOCK WITH THIS","KEY_D_IND_C.png"],
["5","16","TREE","INDEPENDENT","CONGRUENT","4","1","YOU CAN PLANT THIS","TREE_D_IND_C.png"],
["5","4","CAR","INDEPENDENT","INCONGRUENT","4","2","YOU CAN PLANT THIS","CAR_H_IND_IC.png"],
["5","12","ROSE","INDEPENDENT","INCONGRUENT","4","2","YOU CAN SLEEP IN THIS","ROSE_H_IND_IC.png",]
];

var DataSourceF = [
["6","4","CAR","INHERENT","CONGRUENT","1","1","YOU CAN DRIVE THIS","CAR_A_IN_C.png"],
["6","12","ROSE","INHERENT","CONGRUENT","1","1","YOU CAN PICK THIS","ROSE_A_IN_C.png"],
["6","8","KEY","INHERENT","INCONGRUENT","1","2","YOU CAN PUT SOMETHING IN THIS","KEY_E_IN_IC.png"],
["6","16","TREE","INHERENT","INCONGRUENT","1","2","YOU CAN DRIVE THIS","TREE_E_IN_IC.png"],
["6","5","CLOCK","EMERGENT","CONGRUENT","2","1","YOU CAN READ TIME WITH THIS","CLOCK_B_EM_C.png"],
["6","13","SCARF","EMERGENT","CONGRUENT","2","1","YOU CAN WEAR THIS","SCARF_B_EM_C.png"],
["6","1","BAG","EMERGENT","INCONGRUENT","2","2","YOU CAN LOCK WITH THIS","BAG_F_EM_IC.png"],
["6","9","KNIFE","EMERGENT","INCONGRUENT","2","2","YOU CAN ILLUMINATE WITH THIS","KNIFE_F_EM_IC.png"],
["6","6","EGG","ADJOINED","CONGRUENT","3","1","YOU CAN EAT THIS","EGG_C_AD_C.png"],
["6","14","SOCKS","ADJOINED","CONGRUENT","3","1","YOU CAN PUT THESE ON","SOCKS_C_AD_C.png"],
["6","2","BED","ADJOINED","INCONGRUENT","3","2","YOU CAN PICK THIS","BED_G_AD_IC.png"],
["6","10","LAMP","ADJOINED","INCONGRUENT","3","2","YOU CAN CUT WITH THIS","LAMP_G_AD_IC.png"],
["6","7","GLASS","INDEPENDENT","CONGRUENT","4","1","YOU CAN DRINK FROM THIS","GLASS_D_IND_C.png"],
["6","15","SUN","INDEPENDENT","CONGRUENT","4","1","YOU CAN TAN WITH THIS","SUN_D_IND_C.png"],
["6","3","BOOK","INDEPENDENT","INCONGRUENT","4","2","YOU CAN WEAR THIS","BOOK_H_IND_IC.png"],
["6","11","LEAF","INDEPENDENT","INCONGRUENT","4","2","YOU CAN PUT THESE ON","LEAF_H_IND_IC.png",]
];

var DataSourceG = [
["7","3","BOOK","INHERENT","CONGRUENT","1","1","YOU CAN READ THIS","BOOK_A_IN_C.png"],
["7","11","LEAF","INHERENT","CONGRUENT","1","1","THIS CAN BE BLOWN AWAY","LEAF_A_IN_C.png"],
["7","7","GLASS","INHERENT","INCONGRUENT","1","2","YOU CAN EAT THIS","GLASS_E_IN_IC.png"],
["7","15","SUN","INHERENT","INCONGRUENT","1","2","YOU CAN READ TIME WITH THIS","SUN_E_IN_IC.png"],
["7","4","CAR","EMERGENT","CONGRUENT","2","1","YOU CAN DRIVE THIS","CAR_B_EM_C.png"],
["7","12","ROSE","EMERGENT","CONGRUENT","2","1","YOU CAN PICK THIS","ROSE_B_EM_C.png"],
["7","8","KEY","EMERGENT","INCONGRUENT","2","2","YOU CAN PUT SOMETHING IN THIS","KEY_F_EM_IC.png"],
["7","16","TREE","EMERGENT","INCONGRUENT","2","2","YOU CAN DRIVE THIS","TREE_F_EM_IC.png"],
["7","5","CLOCK","ADJOINED","CONGRUENT","3","1","YOU CAN READ TIME WITH THIS","CLOCK_C_AD_C.png"],
["7","13","SCARF","ADJOINED","CONGRUENT","3","1","YOU CAN WEAR THIS","SCARF_C_AD_C.png"],
["7","1","BAG","ADJOINED","INCONGRUENT","3","2","YOU CAN LOCK WITH THIS","BAG_G_AD_IC.png"],
["7","9","KNIFE","ADJOINED","INCONGRUENT","3","2","YOU CAN ILLUMINATE WITH THIS","KNIFE_G_AD_IC.png"],
["7","6","EGG","INDEPENDENT","CONGRUENT","4","1","YOU CAN EAT THIS","EGG_D_IND_C.png"],
["7","14","SOCKS","INDEPENDENT","CONGRUENT","4","1","YOU CAN PUT THESE ON","SOCKS_D_IND_C.png"],
["7","2","BED","INDEPENDENT","INCONGRUENT","4","2","YOU CAN PICK THIS","BED_H_IND_IC.png"],
["7","10","LAMP","INDEPENDENT","INCONGRUENT","4","2","YOU CAN CUT WITH THIS","LAMP_H_IND_IC.png",]
];

var DataSourceH = [
["8","2","BED","INHERENT","CONGRUENT","1","1","YOU CAN SLEEP IN THIS","BED_A_IN_C.png"],
["8","10","LAMP","INHERENT","CONGRUENT","1","1","YOU CAN ILLUMINATE WITH THIS","LAMP_A_IN_C.png"],
["8","6","EGG","INHERENT","INCONGRUENT","1","2","YOU CAN DRINK FROM THIS","EGG_E_IN_IC.png"],
["8","14","SOCKS","INHERENT","INCONGRUENT","1","2","THIS CAN BE BLOWN AWAY","SOCKS_E_IN_IC.png"],
["8","3","BOOK","EMERGENT","CONGRUENT","2","1","YOU CAN READ THIS","BOOK_B_EM_C.png"],
["8","11","LEAF","EMERGENT","CONGRUENT","2","1","THIS CAN BE BLOWN AWAY","LEAF_B_EM_C.png"],
["8","7","GLASS","EMERGENT","INCONGRUENT","2","2","YOU CAN EAT THIS","GLASS_F_EM_IC.png"],
["8","15","SUN","EMERGENT","INCONGRUENT","2","2","YOU CAN READ TIME WITH THIS","SUN_F_EM_IC.png"],
["8","4","CAR","ADJOINED","CONGRUENT","3","1","YOU CAN DRIVE THIS","CAR_C_AD_C.png"],
["8","12","ROSE","ADJOINED","CONGRUENT","3","1","YOU CAN PICK THIS","ROSE_C_AD_C.png"],
["8","8","KEY","ADJOINED","INCONGRUENT","3","2","YOU CAN PUT SOMETHING IN THIS","KEY_G_AD_IC.png"],
["8","16","TREE","ADJOINED","INCONGRUENT","3","2","YOU CAN DRIVE THIS","TREE_G_AD_IC.png"],
["8","5","CLOCK","INDEPENDENT","CONGRUENT","4","1","YOU CAN READ TIME WITH THIS","CLOCK_D_IND_C.png"],
["8","13","SCARF","INDEPENDENT","CONGRUENT","4","1","YOU CAN WEAR THIS","SCARF_D_IND_C.png"],
["8","1","BAG","INDEPENDENT","INCONGRUENT","4","2","YOU CAN LOCK WITH THIS","BAG_H_IND_IC.png"],
["8","9","KNIFE","INDEPENDENT","INCONGRUENT","4","2","YOU CAN ILLUMINATE WITH THIS","KNIFE_H_IND_IC.png",]
];


var AllDataSources=[DataSourceA,DataSourceB,DataSourceC,DataSourceD,DataSourceE,DataSourceF,DataSourceG,DataSourceH];
