const importImages = (r) => {
  const imageObj = {};
  const images = r.keys();
  const importedImages = images.map(r);
  images.forEach((image, index) => {
    const name = image.split("./")[1].split(".")[0];
    imageObj[name] = importedImages[index];
  });

  return imageObj;
};

const skillImages = importImages(
  require.context("./skill", false, /\.(png|jpe?g|gif)$/)
);

const projectImages = importImages(
  require.context("./project", false, /\.(png|jpe?g|gif)$/)
);

const otherImages = importImages(
  require.context("./others", false, /\.(png|jpe?g|gif)$/)
);

export const MAIN_IMG = otherImages.type;

export const BASIC = [
  {
    name: "C",
    img: skillImages.clang,
  },
  {
    name: "C++",
    img: skillImages.cplus,
  },
  {
    name: "Python",
    img: skillImages.python,
  },
  {
    name: "MongoDB",
    img: skillImages.mongodb,
  },
  {
    name: "MySQL",
    img: skillImages.mysql,
  },
  {
    name: "SQLite",
    img: skillImages.sqlite,
  },
  {
    name: "GraphQL",
    img: skillImages.graphql,
  },
  {
    name: "Prisma",
    img: skillImages.prisma,
  },
  {
    name: "Flask",
    img: skillImages.flask,
  },
  {
    name: "Nginx",
    img: skillImages.nginx,
  },
  {
    name: "AWS",
    img: skillImages.aws,
  },
];

export const INTERMEDIATE = [
  {
    name: "Javascript",
    img: skillImages.javascript,
  },
  {
    name: "HTML",
    img: skillImages.html,
  },
  {
    name: "CSS",
    img: skillImages.css,
  },
  {
    name: "React (& Native)",
    img: skillImages.react,
  },
  {
    name: "NodeJS",
    img: skillImages.nodejs,
  },
  {
    name: "TypeScript",
    img: skillImages.typescript,
  },
  {
    name: "Redux",
    img: skillImages.redux,
  },
  {
    name: "Git",
    img: skillImages.git,
  },
  {
    name: "Redux-Saga",
    img: skillImages.reduxSaga,
  },
];

export const PROJECTS_WEB = [
  {
    name: "오픈소스 기반 이미지 에디터",
    img: projectImages.imageEditingSolution1,
    field: {
      프론트엔드: ["Javascript", "HTML(Canvas)", "CSS"],
      백엔드: ["PHP", "MySQL"],
    },
    desc:
      "NHN의 이미지 에디팅 라이브러리 tui.image-editor 기반 단체복 이미지 편집 서비스",
    detailDesc: `NHN의 이미지 에디팅 라이브러리 tui.image-editor를 기반으로, 제공되는 단체복 프리셋 이미지들을 손쉽게 편집해볼 수 있는 웹 이미지 에디터 서비스입니다.\n
    단순한 이미지 편집과 동시에, 현재까지의 작업 내역을 PNG 파일로 추출하거나 서버에 작업 내역 저장 후 불러오기 등의 편의성 기능들을 제공합니다.`,
    content: {
      프론트엔드: [
        "Javascript 기반 라이브러리 내부 구현을 직접 수정하여 라이브러리의 자체적인 에러 (이전 작업 취소가 일부 컴포넌트에 대해 제대로 동작하지 않는 등) 수정",
        "전체 화면 회전만이 아닌 특정 아이템 회전 기능 추가 등 라이브러리의 기능 커스터마이징",
        "라이브러리 내부 구현에 'php 기반 DB 서버로 이미지 업로드 / 불러오기 / 이미지를 배경이 아니라 아이템으로 불러오기' 등의 DB 연동 기능 추가",
        "모바일 기기로의 접속을 인식하여 모바일 전용 페이지 렌더링",
      ],
      백엔드: [
        "Cafe24 웹 호스팅 기반 PHP 서버 구축",
        "PHPMyAdmin을 활용하여 MySQL DB에 특정 유저가 업로드한 이미지 관리",
        "이미지 업로드 / 불러오기 등의 기능을 지원하는 API 구현",
      ],
    },
    images: [
      projectImages.imageEditingSolution1,
      projectImages.imageEditingSolution2,
    ],
  },
  {
    name: "FittingHome",
    img: projectImages.fittingHome1,
    field: {
      프론트엔드: ["Javascript", "Sass(SCSS)", "Pug"],
      "웹사이트 서버 백엔드": [
        "EC2",
        "S3",
        "NodeJS",
        "Express",
        "MongoDB",
        "Mongoose",
        "Multer",
        "AWS SDK",
        "PassportJS",
      ],
      "모델링 서버 백엔드": [
        "Flask",
        "Nginx",
        "Firebase",
        "SQLAlchemy",
        "openMVG",
        "openMVS",
      ],
    },
    desc: "연속촬영 이미지 기반 3D 모델 생성 웹서비스",
    detailDesc: `FittingHome은 스마트폰으로 하나의 물체를 360도 각도로 연속 촬영한 이미지들을 업로드하면, SfM(Structure from Motion) 기법을 통해 3D 모델로 만들어주는 웹 서비스입니다.\n
      단순히 3D 모델을 생성하는 것 뿐만 아니라, 생성한 모델을 웹 사이트 상에서 공유할 수도 있고 3D 웹 뷰어를 통해 모델을 돌려보는 등 직접 조작할 수 있습니다.\n
      또한 생성된 모델은 다양한 포멧으로 다운로드 할 수 있으며, 이전에 생성한 모델 목록을 조회 및 관리할 수 있습니다.`,
    content: {
      프론트엔드: [
        "NodeJS 서버 기반 서버 사이트 렌더링 웹사이트 구현",
        "3D 모델 파일을 업로드하여 다른 사람들과 공유할 수 있는 페이지 구현",
        "회원 정보 페이지 및 모델 삭제 / 다운로드 등을 제공하는 관리 페이지 구현",
        "SketfabAPI를 활용한 웹 3D 모델 뷰어 구현",
      ],
      "웹사이트 서버 백엔드": [
        "서버 사이드 렌더링을 위한 NodeJS 서버 구축",
        "PassportJS를 활용한 유저 인증 구현",
        "Mongo Atlas 클라우드 데이터베이스를 활용하여 유저 및 3D 모델 정보 관리",
      ],
      "모델링 서버 백엔드": [
        "Flask 기반 3D 모델 생성 서버 구현",
        "Nginx 웹서버를 통한 HTTPS 라우팅 설정",
        "openMVG 및 openMVS 라이브러리를 활용한 Structure-from-Motion(SfM) 기반 3D 모델 생성 로직 구현",
        "Firebase를 연동하여 실시간 모델 생성 상태 조회 및 모델 완료 알림 기능 구현",
      ],
    },
    images: [
      projectImages.fittingHome1,
      projectImages.fittingHome2,
      projectImages.fittingHome3,
    ],
    links: {
      프론트엔드:
        "https://github.com/piecemakerz/FittingHome-Website/tree/master/src",
      백엔드: "https://github.com/piecemakerz/FittingHome-Server",
    },
  },
  {
    name: "Surf",
    img: projectImages.surf1,
    field: {
      프론트엔드: [
        "React",
        "Redux",
        "Redux-Thunk",
        "Emotion-styled",
        "Ant-design",
      ],
    },
    desc: "쉽게 참여할 수 있는 소설 릴레이 플랫폼",
    detailDesc: `Surf는 릴레이 형식으로 소설을 한 편씩 이어나가 하나의 완성된 소설을 만들 수 있는 소설 릴레이 웹 플랫폼입니다.\n
    좋은 소설 아이디어가 있지만 현실적으로 정기 연재를 하기에는 힘든 사람, 단순하게 소설 쓰기를 연습하고 싶은 사람, 내가 좋아하는 소설에 일부 참여해보고 싶은 사람 모두 Surf 플랫폼을 통해 원하는 바를 이룰 수 있습니다.\n
    로그인을 하지 않아도 소설 내용을 열람할 수 있으며, 카카오와 같은 소셜 아이디로 간단하게 회원가입 할 수 있습니다.`,
    content: {
      프론트엔드: [
        "팀장으로서 프로젝트의 전반적인 관리 및 팀원 관리",
        "프로토타입 및 와이어프레임 설계, 시스템 아키텍처(플로우차트) 설계",
        "유저 인증 비동기 Redux 로직 작성",
        "메인 페이지 반응형 디자인 구현",
        "드롭다운 등의 유저 인터렉션 컴포넌트 구현",
        "로그인 및 회원가입 모달 창 배경 파도 효과 CSS 구현",
        "인피니트 스크롤 구현",
        "소설 회원가입 / 로그인 구현",
        "프로젝트 완료 후 작업 내용 발표",
      ],
    },
    images: [projectImages.surf1, projectImages.surf2, projectImages.surf3],
    links: {
      프론트엔드: "https://github.com/piecemakerz/surf-client",
      회고: "https://bit.ly/3f5v4L1",
    },
  },
];

export const PROJECTS_APP = [
  {
    name: "중장비 바코드 스캐너",
    img: projectImages.barcodeScan1,
    field: {
      프론트엔드: ["React-Native", "MLKit", "Barcode Scanner"],
      백엔드: ["NodeJS", "Express", "Pug", "Sass(SCSS)", "Tedious"],
    },
    desc: "바코드 기반 중장비 정보 조회 애플리케이션",
    detailDesc: `바코드 기반 중장비 정보 조회 애플리케이션은 국내 건설 회사인 S사의 손 쉬운 장비 관리를 위해 제작되었습니다.\n
    직원들은 회사 계정으로 앱에 로그인 할 수 있으며, 중장비에 부착된 바코드를 스캔하여 해당 중장비에 대한 전반적인 정보들을 조회할 수 있습니다.
    만약 로그인 한 직원의 권한이 높다면, 해당 장비에 대한 매우 상세한 정보를 추가로 조회하는 것도 가능합니다.\n
    특정 장비에 대한 정보를 조회하는 것 뿐만 아니라, 현재 중장비 보유 현황 등 장비 관리를 위해 필요한 여러가지 정보들을 조회할 수 있는 기능도 제공합니다.`,
    content: {
      프론트엔드: [
        "아이디 저장 / 자동 로그인 구현",
        "로그인한 유저의 권한에 따라 볼 수 있는 정보 차별화",
        "머신러닝 라이브러리 MLKit을 활용한 바코드 리더 적용",
        "인식한 바코드 정보를 서버로 전송해 그에 따른 중장비 정보 렌더링 구현",
        "일부 기능들의 경우 WebView를 통해 서버에서 렌더링 된 페이지를 보여주도록 구현",
      ],
      백엔드: [
        "S사에서 자체적으로 DB 서버를 하나의 허용된 IP로 접근하기 위해 애플리케이션에서 보낸 요청을 중계하는 NodeJS 서버 구축",
        "Tedious 라이브러리를 활용하여 MSSQL 서버에 데이터 조회 쿼리 전송",
        "유저 인증 구현",
        "crypto 모듈을 활용한 송수신 정보 암호화",
        "보여줄 데이터가 매우 복잡한 기능들의 경우 React Native에서 직접 렌더링하면 속도가 느려지므로, 직접 서버에서 렌더링한 후 WebView 형태로 제공",
      ],
    },
    images: [
      projectImages.barcodeScan1,
      projectImages.barcodeScan2,
      projectImages.barcodeScan3,
    ],
  },
  {
    name: "자세 교정 애플리케이션",
    img: projectImages.posture1,
    field: {
      프론트엔드: [
        "React-Native",
        "React-Native-Svg-Charts",
        "React-Native-Ble-Manager",
      ],
    },
    desc:
      "아두이노 6축 자이로센서 및 BLE 블루투스 모듈 기반 자세 교정 애플리케이션",
    detailDesc: `아두이노 기반 자세 교정 애플리케이션은 국내 헬스케어 솔루션 업체인 F사의 자세 교정 밴드 제품에 IOT를 접목시키기 위해 제작되었습니다.\n
    아두이노 우노(UNO) 보드에 6축 자이로센서를 연결하여 실시간 위치 및 기울기 변화를 받아오도록 하였으며, 받아온 정보를 HM-10 블루투스 모듈을 통해 외부로 전송하도록 구현했습니다.\n
    스마트폰 애플리케이션은 블루투스 기능을 킨 상태로 '연결' 버튼을 누르면 아두이노에 연결된 블루투스 모듈을 자동으로 인식해 연결하며, 아두이노로부터 전송되는 위치 및 기울기 데이터를 그래프로 시각화하여 사용자에게 보여줍니다.
    오늘 하루간 얼마나 '올바른' 자세로 생활했는지를 퍼센트로 확인할 수 있으며, 오늘을 기준으로 최대 5일 전의 데이터를 조회할 수 있습니다.`,
    content: {
      프론트엔드: [
        "'연결' 버튼을 누르면 주위에 있는 HM-10 블루투스 모듈을 즉시 인식하여 스마트폰 블루투스로 자동 연결",
        "사용자의 현재 자세를 실시간으로 체크하여 관련 데이터를 react-native-svg-charts 라이브러리를 활용해 차트 형식으로 실시간 렌더링",
        "지난 일자의 데이터를 최대 5일까지 Async-Storage에 저장한 후 차트 형태로 렌더링",
      ],
    },
    images: [projectImages.posture1],
  },
  {
    name: "냠냠",
    img: projectImages.nyamnyam1,
    field: {
      프론트엔드: [
        "React-Native",
        "Typescript",
        "Redux-Saga",
        "Styled-component",
      ],
    },
    desc: "카페 사장님들을 위한 날씨에 따른 매출 예측 앱 서비스",
    detailDesc: `냠냠(NyamNyam)은 디저트 카페 사장님들의 보다 편한 디저트 재고 관리를 위해 개발된 날씨 기반 매출 예측 애플리케이션입니다.\n
    디저트는 제품의 특성 상 날씨에 따라 판매량이 매우 크게 차이납니다. 냠냠 서비스는 일일히 날씨를 확인해 판매량을 예측해야 하는 사장님들의 불편함을 해소하고자, 사장님들이 서비스에 제공한 과거 매출 내역들을 기반으로 오늘/내일/모레 날씨 예보에 따른 디저트 판매량을 예측해줍니다.\n
    사장님이 둘 이상의 가게를 동시에 운영할 수도 있으므로, 여러 가게들을 등록하고 관리하는 기능도 제공합니다. 또한, 매출 예측의 정확도를 보다 높이기 위해 일정 기간 동안의 일자 별 매출 예측 내역을 손쉽게 업로드 할 수 있는 기능도 제공합니다.`,
    content: {
      프론트엔드: [
        "프로토타입 및 와이어프레임 설계, 시스템 아키텍처(플로우차트) 설계",
        "전반적인 애플리케이션 UI 및 커스텀 헤더 구현",
        "토큰 기반 인증 등 모든 비동기 상태 관리 로직 Redux Saga로 구현",
        "Geolocation과 KakaoMapAPI를 연동한 키워드로 내 주변 가게 찾기 구현",
        "openWeatherAPI를 활용한 3일간의 날씨 예측 구현 및 날씨에 따른 매출 예측 데이터 가져오기 구현",
        "React Navigation 기반 화면 전환 설계",
        "multipart/form-data를 활용한 모바일에서 서버에 이미지 업로드 구현",
        "DateTimePicker를 활용한 일자별 매출 내역 업로드 구현",
      ],
    },
    images: [
      projectImages.nyamnyam1,
      projectImages.nyamnyam2,
      projectImages.nyamnyam3,
    ],
    links: {
      프론트엔드: "https://github.com/piecemakerz/nyamnyam-client",
      회고: "https://bit.ly/32UMCo2",
    },
  },
];
