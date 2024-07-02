var teamInfos = [["SK", 9001, 2020, "#CE2C32"],
                 ["넥센", 10001, 2018, "#721624"],
                 ["LG", 5002, 2024, "#AE263B"],
                 ["kt", 12001, 2024, "#000000"],
                 ["KIA", 2002, 2024, "#D72E34"],
                 ["NC", 11001, 2024, "#284579"],
                 ["삼성", 1001, 2024, "#2A64AD"],
                 ["롯데", 3001, 2024, "#133E7F"],
                 ["두산", 6002, 2024, "#32307E"],
                 ["한화", 7002, 2024, "#DF8530"]];

var gameData = [["3.31", "목", [8, 1, "4", "3", "경기종료", "승 - 구승민", "패 - 서진용", "문학", true, true, true, 8, "20230331LTSK"],
                               [2, 5, "8", "3", "9회초", "타 - 김태진", "투 - 이준영", "광주", false, true, false, 2, "20230331WOHT"],
                               [7, 10, "0", "0", "1회초", "타 - 김지찬", "투 - 스미스", "대전", false, false, false, 7, "20230331SSHH"],
                               [3, 9, "0", "0", "1회초", "타 - 홍창기", "투 - 알칸타라", "잠실", false, false, false, 9, "20230331LGOB"],
                               [6, 4, "5", "10", "경기종료", "패 - 김영규", "승 - 벤자민", "수원", false, false, false, 4, "20230331NCKT"]],

                ["4.1", "금", [6, 4, "1", "5", "경기종료", "패 - 하준영", "승 - 소형준", "수원", false, false, false, 4, "20230401NCKT"]],

                ["4.2", "토", [8, 1, "5", "1", "경기종료", "승 - 나균안", "패 - 맥카티", "문학", false, false, false, 8, "20230402LTSK"],
                              [2, 5, "13", "2", "경기종료", "승 - 요키시", "패 - 이의리", "광주", false, false, false, 2, "20230402WOHT"],
                              [7, 10, "6", "8", "경기종료", "패 - 허윤동", "승 - 이태양", "대전", false, false, false, 10, "20230402SSHH"],
                              [3, 9, "7", "0", "경기종료", "승 - 김윤식", "패 - 최원준", "잠실", false, false, false, 3, "20230402LGOB"],
                              [6, 4, "0", "8", "경기종료", "패 - 송명기", "승 - 슐서", "수원", false, false, false, 4, "20230402NCKT"]],

                ["4.3", "일", [8, 1, "3", "4", "경기종료", "패 - 반즈", "승 - 오원석", "문학", false, false, false, 1, "20230403LTSK"],
                              [2, 5, "8", "11", "경기종료", "패 - 후라도", "승 - 메디나", "광주", false, false, false, 5, "20230403WOHT"],
                              [7, 10, "1", "3", "경기종료", "패 - 원태인", "승 - 페냐", "대전", false, false, false, 10, "20230403SSHH"],
                              [3, 9, "1", "3", "경기종료", "패 - 플럿코", "승 - 김명신", "잠실", false, false, false, 9, "20230403LGOB"],
                              [6, 4, "2", "11", "경기종료", "패 - 신민혁", "승 - 고영표", "수원", false, false, false, 4, "20230403NCKT"]],

                ["4.4", "월", [9, 8, "9", "2", "경기종료", "승 - 최승용", "패 - 박세웅", "사직", false, false, false, "20230404OBLT"],
                              [2, 7, "11", "3", "경기종료", "승 - 최원태", "패 - 백정현", "대구", false, false, false, "20230404WOSS"],
                              [10, 5, "7", "6", "경기종료", "승 - 장민재", "패 - 양현종", "광주", false, false, false, "20230404HHHT"],
                              [3, 1, "2", "7", "경기종료", "패 - 이민호", "승 - 문승원", "문학", false, false, false, "20230404LGSK"],
                              [4, 6, "5", "4", "경기종료", "승 - 배제성", "패 - 정구범", "창원", false, false, false, "20230404KTNC"]],

                ["4.5", "화", [9, 8, "3", "4", "경기종료", "패 - 알칸타라", "승 - 한현희", "사직", false, false, false, "20230404OBLT"],
                              [2, 7, "7", "12", "경기종료", "패 - 장재영", "승 - 김대우", "대구", false, false, false, "20230404WOSS"],
                              [10, 5, "3", "4", "경기종료", "패 - 한승혁", "승 - 윤영철", "광주", false, false, false, "20230404HHHT"],
                              [3, 1, "5", "4", "경기종료", "승 - 김윤식", "패 - 서진용", "문학", false, false, false, "20230404LGSK"],
                              [4, 6, "1", "3", "경기종료", "패 - 벤자민", "승 - 임정호", "창원", false, false, false, "20230404KTNC"]],

                ["4.6", "수", [9, 8, "2", "7", "경기종료", "패 - 곽빈", "승 - 스트레일리", "사직", false, false, false, "20230406OBLT"],
                              [2, 7, "2", "6", "경기종료", "패 - 안우진", "승 - 수아레즈", "대구", false, false, false, "20230406WOSS"],
                              [10, 5, "1", "5", "경기종료", "패 - 남지민", "승 - 앤더슨", "광주", false, false, false, "20230406HHHT"],
                              [3, 1, "6", "2", "경기종료", "승 - 켈리", "패 - 김광현", "문학", false, false, false, "20230406LGSK"],
                              [4, 6, "7", "1", "경기종료", "승 - 박영현", "패 - 구창모", "창원", false, false, false, "20230406KTNC"]],

                ["4.8", "금", [1, 8, "11", "5", "경기종료", "승 - 오원석", "패 - 나균안", "사직", false, false, false, "20230408SKLT"],
                              [10, 2, "7", "6", "경기종료", "승 - 장시환", "패 - 이승호", "목동", false, false, false, "20230408HHWO"],
                              [9, 6, "10", "9", "경기종료", "승 - 박정수", "패 - 임정호", "창원", false, false, false, "20230408OBNC"],
                              [5, 4, "4", "8", "경기종료", "패 - 이의리", "승 - 배제성", "수원", false, false, false, "20230408HTKT"],
                              [7, 3, "7", "3", "경기종료", "승 - 뷰캐넌", "패 - 플럿코", "잠실", false, false, false, "20230408SSLG"]],

                ["4.9", "토", [1, 8, "2", "3", "경기종료", "패 - 고효준", "승 - 김진욱", "사직", false, false, false, "20230409SKLT"],
                              [10, 2, "9", "3", "경기종료", "승 - 페냐", "패 - 후라도", "목동", false, false, false, "20230409HHWO"],
                              [9, 6, "0", "9", "경기종료", "패 - 김동주", "승 - 송명기", "창원", false, false, false, "20230409OBNC"],
                              [5, 4, "4", "6", "경기종료", "패 - 양현종", "승 - 슐서", "수원", false, false, false, "20230409HTKT"],
                              [7, 3, "4", "7", "경기종료", "패 - 이승현", "승 - 김윤식", "잠실", false, false, false, "20230409SSLG"]],

                ["4.10", "일", [1, 8, "1", "0", "경기종료", "승 - 문승원", "패 - 박세웅", "사직", false, false, false, "20230410SKLT"],
                               [10, 2, "3", "2", "경기종료", "승 - 장민재", "패 - 최원태", "목동", false, false, false, "20230410HHWO"],
                               [9, 6, "10", "4", "경기종료", "승 - 최승용", "패 - 정구범", "창원", false, false, false,"20230410OBNC"],
                               [5, 4, "2", "3", "경기종료", "패 - 곽도규", "승 - 박영현", "수원", false, false, false, "20230410HTKT"],
                               [7, 3, "5", "2", "경기종료", "승 - 김대우", "패 - 임찬규", "잠실", false, false, false, "20230410SSLG"]],

                ["4.11", "월", [1, 8, "6", "2", "경기종료", "승 - 신헌민", "패 - 한현희", "사직", false, false, false, "20230411SKLT"],
                               [5, 6, "6", "7", "경기종료", "패 - 정해영", "승 - 하준영", "창원", false, false, false, "20230411HTNC"],
                               [7, 4, "16", "11", "경기종료", "승 - 우규민", "패 - 고영표", "수원", false, false, false, "20230411SSKT"],
                               [10, 2, "3", "0", "경기종료", "승 - 한승혁", "패 - 장재영", "목동", false, false, false, "20230411HHWO"]],

                ["4.12", "화", [5, 6, "9", "2", "경기종료", "승 - 앤더슨", "패 - 구창모", "창원", false, false, false, "20230412HTNC"],
                               [7, 4, "5", "3", "경기종료", "승 - 이승현", "패 - 박영현", "수원", false, false, false, "20230412SSKT"],
                               [10, 2, "7", "2", "경기종료", "승 - 한승주", "패 - 안우진", "목동", false, false, false, "20230412HHWO"],
                               [1, 9, "6", "0", "경기종료", "승 - 최민준", "패 - 알칸타라", "잠실", false, false, false, "20230412SKOB"],
                               [3, 8, "2", "0", "경기종료", "승 - 이정용", "패 - 스트레일리", "사직", false, false, false, "20230412LGLT"]],

                ["4.13", "수", [7, 4, "12", "2", "경기종료", "승 - 뷰캐넌", "패 - 배제성", "수원", false, false, false, "20230413SSKT"],
                               [5, 6, "4", "1", "경기종료", "승 - 이의리", "패 - 신민혁", "창원", false, false, false, "20230413HTNC"],
                               [1, 9, "0", "4", "경기종료", "패 - 오원석", "승 - 김명신", "잠실", false, false, false, "20230413SKOB"],
                               [3, 8, "2", "0", "경기종료", "승 - 함덕주", "패 - 나균안", "사직", false, false, false, "20230413LGLT"]],

                ["4.14", "목", [7, 4, "7", "2", "경기종료", "승 - 원태인", "패 - 슐서", "수원", false, false, false, "20230414SSKT"],
                               [2, 9, "3", "0", "경기종료", "승 - 후라도", "패 - 최원준", "잠실", false, false, false, "20230414WOOB"],
                               [6, 8, "8", "9", "경기종료", "패 - 하준영", "승 - 신정락", "사직", false, false, false, "20230414NCLT"]],

                ["4.15", "금", [4, 10, "7", "6", "경기종료", "승 - 박선우", "패 - 페냐", "대전", false, false, false, "20230415KTHH"],
                               [3, 5, "9", "6", "경기종료", "승 - 김윤식", "패 - 양현종", "광주", false, false, false, "20230415LGHT"],
                               [2, 9, "12", "2", "경기종료", "승 - 최원태", "패 - 김동주", "잠실", false, false, false, "20230415WOOB"],
                               [7, 1, "11", "0", "경기종료", "승 - 우규민", "패 - 박종훈", "문학", false, false, false, "20230415SSSK"],
                               [6, 8, "5", "4", "경기종료", "승 - 하준영", "패 - 구승민", "사직", false, false, false, "20230415NCLT"]],

                ["4.16", "토", [4, 10, "6", "7", "경기종료", "패 - 고영표", "승 - 장민재", "대전", false, false, false, "20230416KTHH"],
                               [3, 5, "2", "5", "경기종료", "패 - 임찬규", "승 - 윤영철", "광주", false, false, false, "20230416LGHT"],
                               [2, 9, "2", "7", "경기종료", "패 - 문성현", "승 - 김명신", "잠실", false, false, false, "20230416WOOB"],
                               [7, 1, "6", "2", "경기종료", "승 - 백정현", "패 - 문승원", "문학", false, false, false, "20230416SSSK"],
                               [6, 8, "0", "2", "경기종료", "패 - 페디", "승 - 한현희", "사직", false, false, false, "20230416NCLT"]],

                ["4.17", "일", [4, 10, "1", "4", "경기종료", "패 - 벤자민", "승 - 한승혁", "대전", false, false, false, "20230417KTHH"],
                               [3, 5, "24", "6", "경기종료", "승 - 박명근", "패 - 메디나", "광주", false, false, false, "20230417LGHT"],
                               [2, 9, "7", "4", "경기종료", "승 - 안우진", "패 - 알칸타라", "잠실", false, false, false, "20230417WOOB"],
                               [7, 1, "0", "7", "경기종료", "패 - 수아레즈", "승 - 노경은", "문학", false, false, false, "20230417SSSK"],
                               [6, 8, "8", "7", "경기종료", "승 - 하준영", "패 - 김상수", "사직", false, false, false, "20230417NCLT"]],

                ["4.18", "월", [3, 5, "4", "6", "경기종료", "패 - 켈리", "승 - 앤더슨", "광주", false, false, false, "20230418LGHT"],
                               [9, 1, "6", "8", "경기종료", "패 - 김명신", "승 - 신헌민", "문학", false, false, false, "20230418OBSK"],
                               [2, 10, "2", "6", "경기종료", "패 - 요키시", "승 - 한승주", "대전", false, false, false, "20230418WOHH"]],

                ["4.19", "화", [7, 5, "9", "8", "경기종료", "승 - 이승현", "패 - 정해영", "광주", false, false, false, "20230419SSHT"],
                               [9, 1, "4", "7", "경기종료", "패 - 최원준", "승 - 오원석", "문학", false, false, false, "20230419OBSK"],
                               [4, 6, "6", "5", "경기종료", "승 - 주권", "패 - 류진욱", "창원", false, false, false, "20230419KTNC"],
                               [3, 8, "7", "16", "경기종료", "패 - 플럿코", "승 - 김진욱", "사직", false, false, false, "20230419LGLT"],
                               [2, 10, "4", "1", "경기종료", "승 - 후라도", "패 - 이태양", "대전", false, false, false, "20230419WOHH"]],

                ["4.20", "수", [7, 5, "2", "7", "경기종료", "패 - 양창섭", "승 - 메디나", "광주", false, false, false, "20230420SSHT"],
                               [9, 1, "1", "0", "경기종료", "승 - 김동주", "패 - 최민준", "문학", false, false, false, "20230420OBSK"],
                               [4, 6, "6", "3", "경기종료", "승 - 벤자민", "패 - 정구범", "창원", false, false, false, "20230420KTNC"],
                               [3, 8, "9", "11", "경기종료", "패 - 최동환", "승 - 윤명준", "사직", false, false, false, "20230420LGLT"],
                               [2, 10, "0", "8", "경기종료", "패 - 하영민", "승 - 남지민", "대전", false, false, false, "20230420WOHH"]],

                ["4.21", "목", [7, 5, "6", "1", "경기종료", "승 - 원태인", "패 - 윤영철", "광주", false, false, false, "20230421SSHT"],
                               [9, 1, "13", "3", "경기종료", "승 - 알칸타라", "패 - 박종훈", "문학", false, false, false, "20230421OBSK"],
                               [4, 6, "8", "9", "경기종료", "패 - 배제성", "승 - 페디", "창원", false, false, false, "20230421KTNC"],
                               [3, 8, "9", "8", "경기종료", "승 - 임찬규", "패 - 박세웅", "사직", false, false, false, "20230421LGLT"]],

                ["4.22", "금", [1, 4, "3", "2", "경기종료", "승 - 김광현", "패 - 슐서", "수원", false, false, false, "20230422SKKT"],
                               [5, 2, "6", "7", "경기종료", "패 - 장현식", "승 - 양현", "목동", false, false, false, "20230422HTWO"],
                               [9, 3, "5", "4", "경기종료", "승 - 곽빈", "패 - 박명근", "잠실", false, false, false, "20230422OBLG"],
                               [10, 7, "1", "7", "경기종료", "패 - 김민우", "승 - 백정현", "대전", false, false, false, "20230422HHSS"],
                               [8, 6, "3", "2", "경기종료", "승 - 한현희", "패 - 송명기", "창원", false, false, false, "20230422LTNC"]],

                ["4.23", "토", [1, 4, "4", "5", "경기종료", "패 - 신헌민", "승 - 김재윤", "수원", false, false, false, "20230423SKKT"],
                               [5, 2, "8", "0", "경기종료", "승 - 앤더슨", "패 - 안우진", "목동", false, false, false, "20230423HTWO"],
                               [9, 3, "5", "7", "경기종료", "패 - 김명신", "승 - 김진성", "잠실", false, false, false, "20230423OBLG"],
                               [10, 7, "3", "6", "경기종료", "패 - 페냐", "승 - 수아레즈", "대구", false, false, false, "20230423HHSS"],
                               [8, 6, "0", "5", "경기종료", "패 - 스트레일리", "승 - 구창모", "창원", false, false, false, "20230423LTNC"]],

                ["4.24", "일", [1, 4, "24", "12", "경기종료", "승 - 오원석", "패 - 엄상백", "수원", false, false, false, "20230424SKKT"],
                               [5, 2, "1", "5", "경기종료", "패 - 이의리", "승 - 요키시", "목동", false, false, false, "20230424HTWO"],
                               [9, 3, "6", "3", "경기종료", "승 - 최원준", "패 - 플럿코", "잠실", false, false, false, "20230424OBLG"],
                               [10, 7, "1", "3", "경기종료", "패 - 이태양", "승 - 오승환", "대구", false, false, false, "20230424HHSS"],
                               [8, 6, "4", "0", "경기종료", "승 - 김진욱", "패 - 신민혁", "창원", false, false, false, "20230424LTNC"]],

                ["4.25", "월", [5, 7, "14", "19", "경기종료", "패 - 이준영", "승 - 김대우", "대구", false, false, false, "20230425HTSS"]],

                ["4.26", "화", [10, 4, "5", "4", "경기종료", "승 - 한승주", "패 - 박영현", "수원", false, false, false, "20230426HHKT"],
                               [5, 7, "8", "5", "경기종료", "승 - 윤영철", "패 - 원태인", "대구", false, false, false, "20230426HTSS"],
                               [9, 8, "7", "5", "경기종료", "승 - 이병헌", "패 - 최준용", "사직", false, false, false, "20230426OBLT"],
                               [6, 3, "6", "4", "경기종료", "승 - 김영규", "패 - 고우석", "잠실", false, false, false, "20230426NCLG"],
                               [2, 1, "1", "6", "경기종료", "패 - 후라도", "승 - 고효준", "문학", false, false, false, "20230426WOSK"]],

                ["4.27", "수", [10, 4, "4", "2", "경기종료", "승 - 장민재", "패 - 조현우", "수원", false, false, false, "20230427HHKT"],
                               [5, 7, "6", "9", "경기종료", "패 - 양현종", "승 - 백정현", "대구", false, false, false, "20230427HTSS"],
                               [9, 8, "7", "2", "경기종료", "승 - 알칸타라", "패 - 박세웅", "사직", false, false, false, "20230427OBLT"],
                               [6, 3, "3", "6", "경기종료", "패 - 페디", "승 - 임찬규", "잠실", false, false, false, "20230427NCLG"],
                               [2, 1, "2", "7", "경기종료", "패 - 최원태", "승 - 신헌민", "문학", false, false, false, "20230427WOSK"]],

                ["4.28", "목", [10, 4, "6", "7", "경기종료", "패 - 김민우", "승 - 슐서", "수원", false, false, false, "20230428HHKT"],
                               [5, 7, "0", "7", "경기종료", "패 - 앤더슨", "승 - 수아레즈", "대구", false, false, false, "20230428HTSS"],
                               [9, 8, "5", "6", "경기종료", "패 - 정철원", "승 - 신정락", "사직", false, false, false, "20230428OBLT"],
                               [6, 3, "4", "5", "경기종료", "패 - 송명기", "승 - 박명근", "잠실", false, false, false, "20230428NCLG"],
                               [2, 1, "8", "1", "경기종료", "승 - 정찬헌", "패 - 맥카티", "문학", false, false, false, "20230428WOSK"]],

                ["4.29", "금", [5, 10, "3", "4", "경기종료", "패 - 이준영", "승 - 이태양", "대전", false, false, false, "20230429HTHH"],
                               [3, 2, "9", "5", "경기종료", "승 - 켈리", "패 - 하영민", "목동", false, false, false, "20230429LGWO"],
                               [4, 8, "12", "6", "경기종료", "승 - 고영표", "패 - 반즈", "사직", false, false, false, "20230429KTLT"],
                               [7, 9, "6", "3", "경기종료", "승 - 뷰캐넌", "패 - 최승용", "대구", false, false, false, "20230429SSOB"],
                               [1, 6, "3", "1", "경기종료", "승 - 오원석", "패 - 류진욱", "창원", false, false, false, "20230429SKNC"]],

                ["4.30", "토", [5, 10, "6", "7", "경기종료", "패 - 임기영", "승 - 강재민", "대전", false, false, false, "20230430HTHH"],
                               [3, 2, "4", "14", "경기종료", "패 - 김윤식", "승 - 하영민", "목동", false, false, false, "20230430LGWO"],
                               [4, 8, "14", "3", "경기종료", "승 - 엄상백", "박세웅", "사직", false, false, false, "20230430KTLT"],
                               [7, 9, "1", "3", "경기종료", "패 - 백정현", "승 - 최원준", "잠실", false, false, false, "20230430SSOB"],
                               [1, 6, "3", "2", "경기종료", "승 - 박종훈", "패 - 정구범", "창원", false, false, false, "20230430SKNC"]],

                ["5.1", "일", [5, 10, "15", "16", "경기종료", "패 - 정해영", "승 - 김서현", "대전", false, false, false, "20230501HTHH"],
                              [3, 2, "7", "2", "경기종료", "승 - 플럿코", "패 - 요키시", "목동", false, false, false, "20230501LGWO"],
                              [4, 8, "9", "8", "경기종료", "승 - 김민수", "패 - 구승민", "사직", false, false, false, "20230501KTLT"],
                              [7, 9, "6", "1", "경기종료", "승 - 원태인", "패 - 곽빈", "잠실", false, false, false, "20230501SSOB"],
                              [1, 6, "2", "9", "경기종료", "패 - 문승원", "승 - 페디", "창원", false, false, false, "20230501SKNC"]]];
