1. 카테고리 테이블 생성

```mysql
CREATE TABLE Categories (
category_number INT PRIMARY KEY, -- 기본 키, 카테고리의 고유 번호
category_name VARCHAR(100) NOT NULL -- 카테고리의 이름 );
```

2. 제품 테이블 생성

```mysql
CREATE TABLE Products (, , , , ,
    product_number INT PRIMARY KEY,             -- 기본 키, 제품의 고유 번호
    category_number INT NOT NULL,           -- 외래키, 제품이 속한 카테고리 번호
    product_name VARCHAR(100) NOT NULL,        -- 제품의 이름
    product_price INT NOT NULL,               -- 제품의 가격
    product_starrating FLOAT,                      -- 별점 정보
    product_image VARCHAR(255),             -- 제품 이미지 URL 또는 경로
    FOREIGN KEY (category_number) REFERENCES Categories(category_number) -- 외래키 제약 조건
);
```

3. 카테고리 테이블 데이터 삽입

```mysql
INSERT INTO Categories (category_number, category_name) VALUES
(1, '과일'),
(2, '채소');
```

4. 제품 테이블 데이터 삽입

```mysql
INSERT INTO products (product_number, category_number, product_name, product_price, product_starrating, product_image) VALUES
(1, 1, "배", 3800, 4, "과일/배.jpg"),
(2, 1, "천도복숭아", 5500, 5, "과일/천도복숭아.jpg"),
(3, 1, "샤르도네", 4500, 3, "과일/샤르도네.jpg"),
(4, 1, "망고", 5000, 5, "과일/망고.jpg"),
(5, 1, "앰브로시아사과", 4500, 4, "과일/앰브로시아사과.jpg"),
(6, 1, "만다린", 4000, 5, "과일/만다린.jpg"),
(7, 1, "아사이베리", 6000, 4, "과일/아사이베리.jpg"),
(8, 1, "귤", 3000, 5, "과일/귤.jpg"),
(9, 1, "스위티", 4500, 4, "과일/스위티.jpg"),
(10, 1, "크랜베리", 6000, 4, "과일/크랜베리.jpg"),
(11, 1, "핑거라임", 5500, 4, "과일/핑거라임.jpg"),
(12, 1, "타마릴로", 6000, 4, "과일/타마릴로.jpg"),
(13, 1, "플럼코트", 5500, 4, "과일/플럼코트.jpg"),
(14, 1, "거봉", 6500, 5, "과일/거봉.jpg"),
(15, 1, "마르멜로", 4500, 3, "과일/마르멜로.jpg"),
(16, 1, "유자", 3500, 4, "과일/유자.jpg"),
(17, 1, "용과", 9000, 4, "과일/용과.jpg"),
(18, 1, "그린망고", 5000, 4, "과일/그린망고.jpg"),
(19, 1, "레몬", 2500, 4, "과일/레몬.jpg"),
(20, 1, "감귤", 3000, 5, "과일/감귤.jpg"),
(21, 1, "캔털루프", 200000, 5, "과일/캔털루프.jpg"),
(22, 1, "천혜향", 30420, 5, "과일/천혜향.jpg"),
(23, 1, "석류", 7560, 4, "과일/석류.jpg"),
(24, 1, "체리", 17990, 4, "과일/체리.jpg"),
(25, 1, "자몽", 12980, 4, "과일/자몽.jpg"),
(26, 1, "키위", 6990, 5, "과일/키위.jpg"),
(27, 1, "판타오", 5000, 4, "과일/판타오.jpg"),
(28, 1, "모과", 8910, 4, "과일/모과.jpg"),
(29, 1, "아로니아", 35100, 4.5, "과일/아로니아.jpg"),
(30, 1, "바나나", 4150, 4.5, "과일/바나나.jpg"),
(31, 1, "금감", 3500, 4, "과일/금감.jpg"),
(32, 1, "다래", 42000, 4.5, "과일/다래.jpg"),
(33, 1, "청견", 5000, 4, "과일/청견.jpg"),
(34, 1, "한라봉", 21420, 4.5, "과일/한라봉.jpg"),
(35, 1, "스타프루트", 5500, 5, "과일/스타프루트.jpg"),
(36, 1, "구즈베리", 5000, 4, "과일/구즈베리.jpg"),
(37, 1, "살구", 9910, 4.5, "과일/살구.jpg"),
(38, 1, "감", 5030, 4.5, "과일/감.jpg"),
(39, 1, "복숭아", 22300, 5, "과일/복숭아.jpg"),
(40, 1, "머스크멜론", 13900, 4, "과일/머스크멜론.jpg"),
(41, 1, "패션후르츠", 5500, 4, "과일/패션후르츠.jpg"),
(42, 1, "영귤", 3000, 4, "과일/영귤.jpg"),
(43, 1, "복분자", 19900, 5, "과일/복분자.jpg"),
(44, 1, "오렌지", 8970, 4.5, "과일/오렌지.jpg"),
(45, 1, "코코넛", 14000, 5, "과일/코코넛.jpg"),
(46, 1, "블루베리", 17150, 4.5, "과일/블루베리.jpg"),
(47, 1, "설향", 25800, 4, "과일/설향.jpg"),
(48, 1, "멜론", 12190, 4, "과일/멜론.jpg"),
(49, 1, "양광사과", 57900, 4, "과일/양광사과.jpg"),
(50, 1, "구기자", 8460, 4.5, "과일/구기자.jpg"),
(51, 1, "홍옥", 30000, 2, "과일/홍옥.jpg"),
(52, 1, "라임", 3490, 4.5, "과일/라임.jpg"),
(53, 1, "매실", 3500, 4, "과일/매실.jpg"),
(54, 1, "파인애플", 4490, 4.5, "과일/파인애플.jpg"),
(55, 1, "가보스", 4000, 3, "과일/가보스.jpg"),
(56, 1, "신고배", 9600, 4.5, "과일/신고배.jpg"),
(57, 1, "자바애플", 5000, 4, "과일/자바애플.jpg"),
(58, 1, "참외", 20000, 4, "과일/참외.jpg"),
(59, 1, "방울토마토", 6490, 4.5, "과일/방울토마토.jpg"),
(60, 1, "토마토", 9460, 4.5, "과일/토마토.jpg"),
(61, 1, "암바렐라", 4000, 5, "과일/암바렐라.jpg"),
(62, 1, "골드키위", 9980, 5, "과일/골드키위.jpg"),
(63, 1, "아보카도", 11900, 4.5, "과일/아보카도.jpg"),
(64, 1, "키위티바나나", 3990, 4.5, "과일/키위티 바나나.jpg"),
(65, 1, "사과", 5990, 4.5, "과일/사과.jpg"),
(66, 1, "으름", 19900, 4.5, "과일/으름.jpg"),
(67, 1, "샤인머스켓", 4600, 4.5, "과일/샤인머스켓.jpg"),
(68, 1, "구아바", 4500, 4, "과일/구아바.jpg"),
(69, 1, "두리안", 15990, 4.5, "과일/두리안.jpg"),
(70, 1, "쿠푸아", 5500, 4, "과일/쿠푸아.jpg"),
(71, 1, "자두", 4000, 4, "과일/자두.jpg"),
(72, 1, "슬링", 5000, 4, "과일/슬링.jpg"),
(73, 1, "페피노", 4500, 4, "과일/페피노.jpg"),
(74, 1, "메르", 3500, 3, "과일/메르.jpg"),
(75, 1, "람부탄", 4500, 4.5, "과일/람부탄.jpg"),
(76, 1, "포도", 7590, 4.5, "과일/포도.jpg"),
(77, 1, "포멜로", 18800, 5, "과일/포멜로.jpg"),
(78, 1, "산딸기", 11900, 4.5, "과일/산딸기.jpg"),
(79, 1, "수박", 16500, 4, "과일/수박.jpg"),
(80, 1, "파파야", 9980, 4.5, "과일/파파야.jpg")
(81, 2, "가시상추", 3500, 4, "채소/가시상추.jpg"),
(82, 2, "가지", 1980, 4.5, "채소/가지.jpg"),
(83, 2, "감자", 1590, 4.5, "채소/감자.jpg"),
(84, 2, "갓", 6980, 4.5, "채소/갓.jpg"),
(85, 2, "고구마", 7930, 4.5, "채소/고구마.jpg"),
(86, 2, "고들빼기", 26820, 4.5, "채소/고들빼기.jpg"),
(87, 2, "고사리", 5590, 4.5, "채소/고사리.jpg"),
(88, 2, "곰보배추", 16860, 4.5, "채소/곰보배추.jpg"),
(89, 2, "곰취", 12100, 3, "채소/곰취.jpg"),
(90, 2, "공심채", 6480, 4.5, "채소/공심채.jpg"),
(91, 2, "케일", 13900, 4.5, "채소/케일.jpg"),
(92, 2, "근대", 2400, 4.5, "채소/근대.jpg"),
(93, 2, "냉이", 5810, 4, "채소/냉이.jpg"),
(94, 2, "당귀", 5980, 4.5, "채소/당귀.jpg"),
(95, 2, "당근", 4990, 4.5, "채소/당근.jpg"),
(96, 2, "더덕", 11980, 4.5, "채소/더덕.jpg"),
(97, 2, "도라지", 5900, 4.5, "채소/도라지.jpg"),
(98, 2, "돌나물", 2500, 4.5, "채소/돌나물.jpg"),
(99, 2, "황기", 14530, 4.5, "채소/황기.jpg"),
(100, 2, "돼지감자", 7700, 4.5, "채소/돼지감자.jpg"),
(101, 2, "두릅", 8500, 3.5, "채소/두릅.jpg"),
(102, 2, "딸기", 49910, 4.5, "채소/딸기.jpg"),
(103, 2, "락교", 3580, 4.5, "채소/락교.jpg"),
(104, 2, "로메인상추", 2980, 4.5, "채소/로메인상추.jpg"),
(105, 2, "청상추", 1280, 4.5, "채소/청상추.jpg"),
(106, 2, "루바브", 3500, 4, "채소/루바브.jpg"),
(107, 2, "루타바가", 3600, 4, "채소/루타바가.jpg"),
(108, 2, "리크", 9800, 4, "채소/리크.jpg"),
(109, 2, "마", 6990, 4.5, "채소/마.jpg"),
(110, 2, "마카", 3400, 4, "채소/마카.jpg"),
(111, 2, "머위", 15000, 5, "채소/머위.jpg"),
(112, 2, "멜론", 12190, 4, "채소/멜론.jpg"),
(113, 2, "명아주", 3300, 4, "채소/명아주.jpg"),
(114, 2, "무", 2280, 4.5, "채소/무.jpg"),
(115, 2, "무릇", 3200, 4, "채소/무릇.jpg"),
(116, 2, "무청", 18000, 4, "채소/무청.jpg"),
(117, 2, "물냉이", 13600, 3.5, "채소/물냉이.jpg"),
(118, 2, "샐러리", 5580, 4.5, "채소/샐러리.jpg"),
(119, 2, "박", 32900, 3.5, "채소/박.jpg"),
(120, 2, "알밤", 10420, 4.5, "채소/알밤.jpg"),
(121, 2, "방울토마토", 6490, 4.5, "채소/방울토마토.jpg"),
(122, 2, "배추", 2450, 4.5, "채소/배추.jpg"),
(123, 2, "브로콜리", 3980, 5, "채소/브로콜리.jpg"),
(124, 2, "비트", 3310, 5, "채소/비트.jpg"),
(125, 2, "사탕무", 4000, 4, "채소/사탕무.jpg"),
(126, 2, "사탕수수", 12900, 4.5, "채소/사탕수수.jpg"),
(127, 2, "산마늘", 3400, 4, "채소/산마늘.jpg"),
(128, 2, "적상추", 3090, 4.5, "채소/적상추.jpg"),
(129, 2, "햇밤", 19710, 4, "채소/햇밤.jpg"),
(130, 2, "쇠비름", 9400, 4.5, "채소/쇠비름.jpg"),
(131, 2, "수박", 16500, 4, "채소/수박.jpg"),
(132, 2, "그린빈", 6050, 5, "채소/그린빈.jpg"),
(133, 2, "수세미", 15900, 4.5, "채소/수세미.jpg"),
(134, 2, "숙주나물", 1100, 5, "채소/숙주나물.jpg"),
(135, 2, "순무", 28000, 4.5, "채소/순무.jpg"),
(136, 2, "시금치", 2490, 4.5, "채소/시금치.jpg"),
(137, 2, "시래기", 2990, 4.5, "채소/시래기.jpg"),
(138, 2, "시호", 18900, 5, "채소/시호.jpg"),
(139, 2, "쌈추", 2590, 4.5, "채소/쌈추.jpg"),
(140, 2, "쑥", 7490, 4.5, "채소/쑥.jpg"),
(141, 2, "쑥갓", 1480, 4.5, "채소/쑥갓.jpg"),
(142, 2, "아스파라거스", 5840, 5, "채소/아스파라거스.jpg"),
(143, 2, "아욱", 4380, 4.5, "채소/아욱.jpg"),
(144, 2, "아티초크", 9050, 4.5, "채소/아티초크.jpg"),
(145, 2, "아피오스", 11000, 4.5, "채소/아피오스.jpg"),
(146, 2, "알타리무", 10940, 3.5, "채소/알타리무.jpg"),
(147, 2, "야콘", 25600, 4.5, "채소/야콘.jpg"),
(148, 2, "양배추", 2190, 4.5, "채소/양배추.jpg"),
(149, 2, "양상추", 3200, 4.5, "채소/양상추.jpg"),
(150, 2, "양파", 2590, 4.5, "채소/양파.jpg"),
(151, 2, "연근", 7500, 5, "채소/연근.jpg"),
(152, 2, "열무", 4680, 4.5, "채소/열무.jpg"),
(153, 2, "오이", 2500, 4.5, "채소/오이.jpg"),
(154, 2, "오크라", 5400, 4.5, "채소/오크라.jpg"),
(155, 2, "용설란", 3600, 4, "채소/용설란.jpg"),
(156, 2, "우거지", 2990, 4.5, "채소/우거지.jpg"),
(157, 2, "우엉", 3000, 4.5, "채소/우엉.jpg"),
(158, 2, "울외", 3500, 4, "채소/울외.jpg"),
(159, 2, "샬롯", 3690, 4.5, "채소/샬롯.jpg"),
(160, 2, "엔다이브", 12030, 4, "채소/엔다이브.jpg");
```