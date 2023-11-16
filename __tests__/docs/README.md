## jest 추가 환경 설정
```javascript
    "testPathIgnorePatterns": [
      "<rootDir>/__tests__/TestCase",
      "<rootDir>/__tests__/TestUtils"
    ],
    "coveragePathIgnorePatterns": [
      "<rootDir>/__tests__/TestCase",
      "<rootDir>/__tests__/TestUtils"
    ]
```

## 개요 및 주의 사항

### 테스트 케이스
  - 공용 테스트 케이스
    - `App`과 `Handler` 통합 테스트
    - `Basic Calculator`, `Discount Calculator`, `Order Calculator`의 단위 테스트
    - `Domain Parser` 테스트
  - 입력 테스트 케이스
    - `Domain Validator`와  `Input Validator` 테스트를 별도 진행
  - 유효하지 않은 값이 포함되어 있는 케이스
    - `App`과 `Handler` 통합 테스트에서 재시도 로직 검증을 위한 케이스

### 통합 테스트
  - 재시도 로직과 로그 출력을 확인하기 위함
  - `App`과 `Input Handler`에 대해 실시

### 단위 테스트
  #### Domain
  - `Basic Calculator`
    - `originalTotal()`의 계산은 상속 받는 `Order Calculator`에서 실시
    - `calcMenus(mainOrder)`의 계산은 상위 테스트에 의해 커버되므로 제외
  - `Discount Calculator`
    - 전체 메서드에 대한 테스트 실시
  - `Order Calculator`
    - 전체 메서드에 대한 테스트 실시
  - `Main Order`
    - 상태 관리만을 담당하므로 예외 테스트만 실시
  #### Utility
  - `Domain Parser`
    - 메뉴 분류에 대한 도메인 지식이 있으므로 단위 테스트 실시
  - `Day Calc`
    - 도메인 지식이 존재하나 크리스마스 할인 계산에서 커버되므로 테스트 미실시
  ### View
  - `Input Validator`의 경우 뷰 로직임에도 필요에 의해 단위 테스트 실시

## 커버리지
File                     | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s                                               
-------------------------|---------|----------|---------|---------|-------------------
All files                |     100 |      100 |     100 |     100 | 
 src                     |     100 |      100 |     100 |     100 | 
  App.js                 |     100 |      100 |     100 |     100 | 
 src/lib/Constants       |     100 |      100 |     100 |     100 | 
  common.js              |     100 |      100 |     100 |     100 | 
  domain.js              |     100 |      100 |     100 |     100 | 
  error.js               |     100 |      100 |     100 |     100 | 
  index.js               |       0 |        0 |       0 |       0 | 
  input.js               |     100 |      100 |     100 |     100 | 
  output.js              |     100 |      100 |     100 |     100 | 
  validation.js          |     100 |      100 |     100 |     100 | 
 src/lib/Domain          |     100 |      100 |     100 |     100 | 
  BasicCalculator.js     |     100 |      100 |     100 |     100 | 
  DiscountCalculator.js  |     100 |      100 |     100 |     100 | 
  MainOrder.js           |     100 |      100 |     100 |     100 | 
  OrderCalculator.js     |     100 |      100 |     100 |     100 | 
  index.js               |       0 |        0 |       0 |       0 | 
 src/lib/Error           |     100 |      100 |     100 |     100 | 
  ValidatorError.js      |     100 |      100 |     100 |     100 | 
  index.js               |       0 |        0 |       0 |       0 |                   
 src/lib/Handler         |     100 |      100 |     100 |     100 | 
  InputHandler.js        |     100 |      100 |     100 |     100 | 
  ResultHandler.js       |     100 |      100 |     100 |     100 | 
  index.js               |       0 |        0 |       0 |       0 | 
 src/lib/View            |     100 |      100 |     100 |     100 | 
  InputView.js           |     100 |      100 |     100 |     100 | 
  OutputView.js          |     100 |      100 |     100 |     100 | 
  index.js               |       0 |        0 |       0 |       0 | 
 src/lib/utils/Calc      |     100 |      100 |     100 |     100 | 
  Day.js                 |     100 |      100 |     100 |     100 | 
  Item.js                |     100 |      100 |     100 |     100 | 
  index.js               |       0 |        0 |       0 |       0 | 
 src/lib/utils/Parser    |     100 |      100 |     100 |     100 | 
  DomainParser.js        |     100 |      100 |     100 |     100 | 
  OutputParser.js        |     100 |      100 |     100 |     100 | 
  index.js               |       0 |        0 |       0 |       0 | 
 src/lib/utils/Validator |     100 |      100 |     100 |     100 | 
  DomainValidator.js     |     100 |      100 |     100 |     100 | 
  InputValidator.js      |     100 |      100 |     100 |     100 | 
  index.js               |       0 |        0 |       0 |       0 | 