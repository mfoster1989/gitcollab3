const numbers = [512,
    353,
    396,
    427,
    500,
    397,
    430,
    459,
    293,
    234,
    560,
    235,
    323,
    344,
    315,
    398,
    300,
    533,
    326,
    562,
    376,
    545,
    240,
    369,
    494,
    555,
    306,
    332,
    356,
    489,
    526,
    511,
    543,
    551,
    291,
    270,
    422,
    261,
    248,
    487,
    392,
    308,
    521,
    442,
    336,
    313,
    478,
    295,
    460,
    370,
    474,
    279,
    386,
    482,
    540,
    272,
    385,
    497,
    410,
    423,
    343,
    383,
    288,
    455,
    266,
    446,
    368,
    471,
    307,
    407,
    516,
    488,
    257,
    334,
    464,
    470,
    352,
    467,
    311,
    297,
    321,
    330,
    379,
    357,
    508,
    348,
    468,
    301,
    559,
    304,
    403,
    547,
    250,
    362,
    552,
    431,
    286,
    420,
    309,
    251,
    496,
    377,
    267,
    515,
    439,
    378,
    324,
    381,
    527,
    388,
    401,
    566,
    391,
    495,
    435,
    416,
    504,
    509,
    556,
    283,
    485,
    452,
    237,
    461,
    316,
    513,
    433,
    327,
    546,
    456,
    245,
    409,
    331,
    371,
    558,
    271,
    274,
    406,
    417,
    284,
    322,
    544,
    325,
    361,
    294,
    506,
    365,
    491,
    393,
    282,
    312,
    374,
    412,
    404,
    382,
    419,
    249,
    563,
    475,
    314,
    525,
    450,
    318,
    345,
    541,
    492,
    243,
    501,
    384,
    390,
    445,
    539,
    285,
    537,
    317,
    476,
    290,
    510,
    346,
    258,
    564,
    340,
    333,
    477,
    414,
    399,
    278,
    524,
    437,
    320,
    269,
    287,
    505,
    242,
    372,
    413,
    349,
    424,
    302,
    387,
    296,
    481,
    408,
    259,
    554,
    264,
    465,
    389,
    418,
    463,
    473,
    567,
    292,
    557,
    247,
    436,
    238,
    310,
    523,
    531,
    426,
    432,
    415,
    493,
    484,
    298,
    441,
    358,
    532,
    528,
    280,
    255,
    542,
    498,
    252,
    263,
    405,
    507,
    548,
    534,
    395,
    483,
    519,
    529,
    375,
    499,
    429,
    536,
    503,
    550,
    319,
    281,
    335,
    454,
    244,
    520,
    342,
    347,
    457,
    486,
    428,
    451,
    275,
    305,
    469,
    380,
    239,
    522,
    360,
    256,
    553,
    561,
    518,
    538,
    262,
    246,
    472,
    453,
    448,
    299,
    359,
    276,
    355,
    530,
    425,
    565,
    421,
    367,
    364,
    253,
    329,
    535,
    480,
    328,
    434,
    402,
    400,
    350,
    254,
    394,
    443,
    363,
    354,
    462,
    517,
    351,
    440,
    444,
    341,
    514,
    273,
    479,
    339,
    337,
    373,
    438,
    289,
    241,
    458,
    502,
    303,
    447,
    338,
    466,
    268,
    260,
    549,
    236,
    366,
    277,
    490,
    411,
    265,
    449];

function evenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

evenNumbers(numbers);