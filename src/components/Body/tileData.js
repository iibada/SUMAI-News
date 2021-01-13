const tileData = [
  {
    news_agency: '연합뉴스',
    title: '“코로나 걸렸습니다” 스마트시계가 알려준다',
    summary: `11일(현지 시각) 온라인으로 개막한 세계 최대 IT(정보 기술) 전시회 ‘CES 2021’은 코로나 팬데믹(대유행)이 산업과 기술 발전의 방향을 바꿔놓았다는 것을 보여주는 거대한 전시장이 되고 있다. 소비자 가전 전시회를 뜻하는 CES(Consumer Electronics Show)가 올해는 ‘코로나 일렉트로닉스 쇼(Covid Electronics Show)’가 됐다는 말까지 나온다.`,
    // cols: 2,
  },
  {
    news_agency: '연합뉴스TV',
    title: '“국가가 국민 기본권을 수호하지는 못할지언정 위법한 수사로 무고한 시민에게 돌이킬 수 없는 피해를 입혔다”',
    summary: `“국가가 국민 기본권을 수호하지는 못할지언정 위법한 수사로 무고한 시민에게 돌이킬 수 없는 피해를 입혔다”
    13일 오후 2시쯤 서울 중앙지방법원 559호 안. 서울중앙지법 민사합의45부(이성호 부장판사)가 ‘약촌오거리 살인사건’ 피해자 최모(37)씨가 국가를 상대로 낸 손해배상 소송에서 한 말이다. 최씨를 대신해 재판에 참석한 박준영 변호사는 “오늘 재판을 계기로 수사과정에서 진실을 위해 인권적으로 수사하는 업무 관행이 자리 잡는 데 도움됐으면 한다”는 입장을 밝혔다.`,
  },
  {
    news_agency: 'BBS NEWS',
    title: '재판부는 최씨가 국가와 경찰관 이모씨',
    summary: `재판부는 최씨가 국가와 경찰관 이모씨, 검사 김모씨를 상대로 낸 소송에서 국가를 상대로 13억여원을 내라며 원고 일부 승소 판결을 내렸다. 별도로 최씨 어머니에겐 2억 5000만원, 동생에게 5000만원을 지급하라고 했다.

    이번 재판부는 처음으로 검사와 경찰 개인에게도 위법 수사한 책임을 물었다. 전체 배상금 가운데 20%인 2억6000만원을 최씨를 강압 수사한 경찰관 이모씨와 진범으로 밝혀진 용의자를 불기소 처분한 검사가 부담하도록 했다. 최씨 어머니와 동생에 대해서도 20%인 각각 5000만원, 1000만원을 주도록 했다.
    
    재판부는 최씨가 받아야 할 배상금은 모두 20억원이라는 점, 구속 기간에 얻지 못한 수익 1억여원도 지급해야 한다고 설명했다. 다만 최씨가 별도로 형사보상금으로 8억4000만원 가량 받기로 한 점을 고려해 배상금을 13억여원으로 정했다.
    
    박 변호사는 이에 “마지막 재판 때 청구한 금액과 오늘 인용된 금액이 거의 비슷하다”며 “법적으로 인정될 수 있는 금액이 충분하게 인정됐다고 본다”고 말했다.`,
  },
  {
    news_agency: 'CEO스코어데일리',
    title: '피해자 측에 따르면 재판 과정에서 국가와 수사기관의 반성은 찾아보기 어려웠다. 박 변호사는 “피고인 대한민국과 검사는 국가 세금으로 설립된 정부법무공단에서 대리를 받으며 재판에서 책임을 인정할 수 없다고 말했다”라며 “검사는 유감 정도의 의사 표시라도 했지만 경찰은 아직도 최군이 진범이라며 이미 지급된 형사보상금도 환급해야 한다는말도 안 되는 주장을 했다”고 했다.',
    summary: `피해자 측에 따르면 재판 과정에서 국가와 수사기관의 반성은 찾아보기 어려웠다. 박 변호사는 “피고인 대한민국과 검사는 국가 세금으로 설립된 정부법무공단에서 대리를 받으며 재판에서 책임을 인정할 수 없다고 말했다”라며 “검사는 유감 정도의 의사 표시라도 했지만 경찰은 아직도 최군이 진범이라며 이미 지급된 형사보상금도 환급해야 한다는말도 안 되는 주장을 했다”고 했다.

    국가와 수사기관 측이 사과했더라면 소송을 취하할 생각도 있었다고 전했다. 박 변호사는 “법정 밖에서 조용히 만나서 사과한다면 이들을 상대로 한 소송을 취하하겠다고 제안했지만 사과받지 못했다”고 밝혔다. 다만 “이들도 당시 상황에서 이 점은 고려해줬으면 하는 마음도 있었을 것”이라며 “판결 선고 이후에라도 이들이 (피해자 최씨에게) 사과한다면 우리가 취할 수 있는 그들이 사과에 대한 대가를 받을 수 있게끔 할 용의가 있다. 그게 회복적 사법이라 생각한다”고 설명했다.`,
  },
  {
    news_agency: 'CNB뉴스',
    title: '약촌오거리 살인사건은 2017년 영화',
    summary: `약촌오거리 살인사건은 2017년 영화 ‘재심’과 최근 방영된 SBS 드라마 ‘날아라 개천용’의 소재가 되기도 했다. 사건은 15살이던 최씨가 2000년 8월 19일 새벽 2시쯤 전북 익산시 약촌오거리 부근에서 오토바이를 몰고 가다 길가에서 흉기에 찔려 쓰러진 택시 운전사 A(42)씨를 목격하면서 시작됐다. 최씨는 “현장에서 남자 2명이 뛰어가는 모습을 봤다”고 진술하는 등 조사에 적극적으로 협조했지만, 경찰은 최초 목격자인 그를 고문하며 범인으로 지목했다.`,
  },
  {
    news_agency: 'EBN',
    title: '범인으로 몰린 최씨에게 1심은 징역 15년을 선고했다.',
    summary: `범인으로 몰린 최씨에게 1심은 징역 15년을 선고했다. 최씨는 2심에서 징역 10년으로 감형받은 뒤 상고하지 않았고 10년을 복역한 뒤 지난 2010년 만기출소했다. 최씨가 수감 중이던 2003년 경찰은 진범이 따로 있다는 첩보를 입수해 진범을 잡았지만 직접 증거가 없다는 이유로 검찰은 무혐의 처분했다.

    사건은 묻힐뻔했지만, 박 변호사의 설득 끝에 최씨는 2013년 광주고법에 재심을 청구했다. 법원은 ”최씨가 불법 체포ㆍ감금 등 행위를 당했다“며 무죄를 인정했다. 재심 선고 직후 검찰은 2003년 당시 검찰이 새로운 용의자로 지목한 김씨를 체포해 구속기소했다. 대법원은 2018년 진범 김씨에 대해 징역 15년을 선고한 뒤 원심판결을 확정했다. 18년 만에 김씨가 죗값을 치르게 된 셈이다.`,
  },
  {
    news_agency: 'EBS',
    title: '누명을 벗은 최씨는 지난 2017년 5월 국가 등을 상대로 손해배상을 청구',
    summary: `누명을 벗은 최씨는 지난 2017년 5월 국가 등을 상대로 손해배상을 청구했고 3년 6개월만에 재판부의 판단을 듣게 됐다. 이날 재판장에는 진범 김씨를 잡은 황상만 전 군산경찰서 형사반장도 참석했다.

    황 형사는 “오늘 재판은 한 개인의 인권을 찾아주고 새로운 삶을 살게했다”며 “이를 계기로 대한민국에서 비슷한 일이 일어나지 않기를 바란다”며 소감을 전했다. 황상만 전 형사반장은 드라마에서 실명으로 등장하기도 했다.`,
  },
  {
    news_agency: 'e대한경제',
    title: '멕시코 국경장벽',
    summary: `멕시코 국경장벽 찾아가
    "바이든 정부 발목잡을 것"
    
    펜스, 펠로시에 서한 보내
    트럼프 직무 박탈 공식 거부
    
    하원, 25조 촉구 결의 통과
    13일 탄핵결의안 표결 실시`,
  },
  {
    news_agency: 'JTBC',
    title: '마이크 펜스 미국 부통령이 수정헌법 25조',
    summary: `마이크 펜스 미국 부통령이 수정헌법 25조를 발동해 도널드 트럼프 대통령에 대한 직무를 박탈하라는 민주당 측 요구를 "더 큰 분열을 초래할 수 있다"며 12일(현지시간) 최종적으로 거부했다. 이에 따라 민주당은 하원 본회의를 열어 수정헌법 25조 발동을 촉구하는 결의안을 형식적으로 통과시킨 뒤 탄핵으로 넘어가는 수순을 밟았다.

    임기 만료 직전에 탄핵이란 불명예를 안을 위기에 처한 트럼프 대통령은 "마녀사냥의 연속일 뿐"이라며 의사당 폭동을 자신이 선동했다는 주장을 전면 부인했다.
    
    이날 펜스 부통령은 전날 낸시 펠로시 하원의장이 보낸 최후통첩에 대한 답신에서 "트럼프 정권 임기가 8일 남았다"며 "국익에 최선이거나 헌법에 부합한다고 생각하지 않는다"고 밝혔다. 이어 그는 "지난주 나는 내게 주어진 헌법상 권한을 넘어 대선 결과를 결정하라는 (트럼프 대통령의) 압력에 굴하지 않았다"면서 "정치적 게임을 벌이려는 하원의 시도에도 굴복하지 않을 것"이라고 말했다. 또 수정헌법 25조는 대통령이 무능하거나 직을 수행하는 데 장애가 있는 상황에 대비한 조항이라면서 "처벌이나 (대통령직)강탈 수단이 아니며 그런 측면에서 발동되면 끔찍한 선례로 남게 된다"고 강조했다.
    
    민주당은 일단 이날 밤 하원 본회의를 열고 제이미 래스킨 의원이 발의한 수정헌법 25조 발동 촉구 결의안을 찬성 223표, 반대 205표로 통과시켰다. 펠로시 하원의장은 "트럼프의 선동은 민주주의의 심장이자 성전인 의회를 겨냥한 끔찍한 내란"이라고 거듭 주장했다. 공화당에선 애덤 킨징어 의원(일리노이주)이 참석해 유일하게 찬성표를 던졌다.
    
    물론 펜스 부통령이 불응하겠다는 의사를 이미 표명했기 때문에 탄핵으로 넘어가기 위한 요식 절차에 그친다. 앞서 민주당은 펜스 부통령과 내각이 트럼프 대통령의 직무를 박탈하지 않으면 13일 하원에서 탄핵 표결을 실시하겠다며 탄핵안까지 발의해놓은 상태다. 펠로시 의장은 이날 제이미 래스킨, 테드 리우 등 하원의원 9명을 탄핵 추진위원에 임명했다.
    
    민주당 의원 222명만으로 이미 과반을 넘어서는 데다 공화당에서도 공개적으로 탄핵에 찬성하는 의원들이 일부 나왔기 때문에 하원에서 탄핵안이 신속 의결될 것은 확실시된다. 이날 공화당 소속 존 캣코 하원의원(뉴욕주)은 "대통령이 공격을 선동한 것은 민주주의에 대한 직접적 위협"이라며 탄핵에 찬성하겠다고 선언했다.`,
  },
  {
    news_agency: 'KBS',
    title: '이 밖에 공화당 원내 서열 3위이자 딕 체니 전 부통령 딸인 리즈 체니',
    summary: `이 밖에 공화당 원내 서열 3위이자 딕 체니 전 부통령 딸인 리즈 체니(와이오밍주)를 비롯해 애덤 킨징어, 프레드 업턴(미시간주) 등도 찬성표를 던지겠다고 밝혔다. 탄핵안이 13일 하원을 통과하면 공은 상원으로 넘어간다. 현재 정회 중인 상원은 오는 19일 인사청문회를 개최하기 위해 소집된 상태다. 20일이 조 바이든 대통령 당선인 취임일이기 때문에 물리적으로 트럼프 대통령의 임기 종료 이전에 탄핵하는 것은 불가능하다. 또 사후 탄핵을 하더라도 과반수를 의결정족수로 하는 하원과 달리 상원에선 3분의 2가 찬성해야 탄핵이 완성된다. 2019년 12월 상원에선 공화당 의원 가운데 단 한 명도 탄핵에 찬성하지 않아 부결됐다. 하지만 이번에는 결과가 좀 다를 수 있다는 전망도 나온다. 트럼프 대통령이 더 이상 '살아 있는 권력'이 아닌 데다 공화당 일각에선 그의 2024년 대선 재출마를 막기 위해서라도 탄핵과 함께 공무담임권을 제한할 필요성이 있다고 판단하고 있다는 얘기가 흘러나온다. 이날 뉴욕타임스(NYT)는 의회 내 공화당 1인자인 미치 매코널 상원 원내대표가 트럼프 대통령의 선동 행위는 탄핵을 당할 만한 불법행위라고 측근에게 말했다고 보도했다. 특히 탄핵을 공화당에서 트럼프 대통령을 축출할 쉬운 방법으로 생각하고 있다고 NYT는 덧붙였다.

    트럼프 대통령은 이날 자신의 대표적 업적으로 내세우고 있는 텍사스주 국경장벽을 방문하며 '마이웨이'를 이어갔다.
    
    그는 같은 날 연설에서 "수정헌법 25조는 내게 전혀 위험 요인이 되지 않고 바이든 행정부의 발목을 잡을 것"이라며 "탄핵 사기는 우리나라 역사상 가장 크고 악랄한 마녀사냥"이라고 주장했다. 이어 "탄핵은 거대한 분노와 분열, 고통을 초래할 것"이라면서 "미국에 매우 위험한 일"이라고 주장했다. 자신이 탄핵되면 지지자들이 좌시하지 않을 것이라는 압박성 발언으로 해석된다. 아울러 대선 결과를 뒤집으라는 자신의 발언은 "전적으로 적절했다"고 항변했다.`,
  },
  {
    news_agency: 'MBC',
    title: '이언주 국민의힘 부산시장 예비후보',
    summary: `이언주 국민의힘 부산시장 예비후보 캠프 방문자 5명 코로나19 확진
    행사 참석했던 이언주 후보 보건소 제출 참석자 명단에는 누락
    전통시장 방문 등 일정 소화
    행사 사진 보고 파악한 보건소 측 검사 요청 받고도 기자회견 강행
    캠프 측은 "실수, 착오" 해명하기 급급
    부산진구청, 방역수칙 위반으로 과태료 부과…추가 위반 사항 조사 중`,
  },
  {
    news_agency: '인벤',
    title: '이언주 국민의힘 부산시장',
    summary: `이언주 국민의힘 부산시장 예비후보 선거사무소 방문자 5명이 코로나19 확진 판정을 받은 가운데 방역 수칙에 대한 이 예비후보 측의 안이한 인식과 대응이 도마 위에 올랐다.

    1호 공약으로 '코로나19 방역 대책'을 내놨던 이 예비후보 측은 후보의 이름이 빠진 명단을 보건당국에 제출하는가 하면, 보건소 측의 진단검사 요청을 받고도 기자회견을 강행한 것으로 드러났다.`,
  },
];

export default tileData;