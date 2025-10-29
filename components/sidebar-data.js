// Sidebar project data
const SIDEBAR_PROJECTS = [
    {
        id: 1,
        name: '신제품 런칭 광고',
        thumbnail: 'CEN_img/SOLIUM_광고/Scene 1 - 언덕 위의 여성.png',
        currentStep: 2,
        lastUpdated: '어제',
        steps: [
            {
                number: 1,
                name: '정보입력',
                link: '1-2-정보입력.html',
                outputs: [
                    { name: '프로젝트 정보', title: '신제품 런칭 광고 - 프로젝트 정보', link: '1-2-정보입력.html' }
                ]
            },
            {
                number: 2,
                name: '스토리보드 생성',
                link: '1-3-스토리보드생성.html',
                active: true,
                outputs: [
                    { name: '스토리보드', title: '전체 스토리보드 보기', link: '1-3-스토리보드생성.html' },
                    { name: '씬 1', title: '언덕 위의 여성 - 제품이 자연광에 비춰지는 오프닝 장면', link: '1-3-1-스케치이미지조회.html?scene=1' },
                    { name: '씬 2', title: '들판의 풀과 바람 - 제품의 주요 기능 강조', link: '1-3-1-스케치이미지조회.html?scene=2' },
                    { name: '씬 3', title: '숲속의 하늘을 바라보는 여성 - 사용자 경험과 감정적 연결', link: '1-3-1-스케치이미지조회.html?scene=3' },
                    { name: '씬 4', title: '잎 위의 물방울 - 모델의 표정과 제품 사용', link: '1-3-1-스케치이미지조회.html?scene=4' },
                    { name: '씬 5', title: '피부 위의 물방울 - 제품 디테일 클로즈업 장면', link: '1-3-1-스케치이미지조회.html?scene=5' },
                    { name: '씬 6', title: '에센스를 바르는 손 - 전체적인 브랜드 메시지 전달', link: '1-3-1-스케치이미지조회.html?scene=6' },
                    { name: '씬 7', title: '자신감 있는 미소 - 행동 유도 메시지', link: '1-3-1-스케치이미지조회.html?scene=7' },
                    { name: '씬 8', title: '브랜드 엔딩 - 최종 로고 노출과 CTA', link: '1-3-1-스케치이미지조회.html?scene=8' }
                ]
            }
        ]
    },
    {
        id: 2,
        name: '봄 시즌 프로모션',
        thumbnail: 'CEN_img/SOLIUM_광고/Scene 4 - 잎 위의 물방울.png',
        currentStep: 4,
        lastUpdated: '2일 전',
        steps: [
            {
                number: 1,
                name: '정보입력',
                link: '1-2-정보입력.html',
                outputs: [
                    { name: '프로젝트 정보', title: '봄 시즌 프로모션 - 프로젝트 정보', link: '1-2-정보입력.html' }
                ]
            },
            {
                number: 2,
                name: '스토리보드 생성',
                link: '1-3-스토리보드생성.html',
                outputs: [
                    { name: '스토리보드', title: '전체 스토리보드 보기', link: '1-3-스토리보드생성.html' },
                    { name: '씬 1', title: '봄꽃과 함께하는 제품 소개', link: '1-3-1-스케치이미지조회.html?scene=1' },
                    { name: '씬 2', title: '싱그러운 봄 배경의 제품 디스플레이', link: '1-3-1-스케치이미지조회.html?scene=2' },
                    { name: '씬 3', title: '봄 분위기 속 제품 사용 장면', link: '1-3-1-스케치이미지조회.html?scene=3' },
                    { name: '씬 4', title: '프로모션 안내 및 클로징 장면', link: '1-3-1-스케치이미지조회.html?scene=4' }
                ]
            },
            {
                number: 3,
                name: '촬영기획',
                link: '1-4-촬영기획.html',
                outputs: [
                    { name: '촬영 기획서', title: '촬영 기획서', link: '1-4-촬영기획.html' }
                ]
            },
            {
                number: 4,
                name: '영상제작',
                link: '1-5-영상제작.html',
                active: true,
                outputs: [
                    { name: '영상', title: '최종 영상', link: '1-5-영상제작.html' }
                ]
            }
        ]
    },
    {
        id: 3,
        name: '브랜드 스토리 영상',
        thumbnail: 'CEN_img/SOLIUM_광고/Scene 8 - 브랜드 엔딩.png',
        currentStep: 3,
        lastUpdated: '3일 전',
        steps: [
            {
                number: 1,
                name: '정보입력',
                link: '1-2-정보입력.html',
                outputs: [
                    { name: '프로젝트 정보', title: '브랜드 스토리 영상 - 프로젝트 정보', link: '1-2-정보입력.html' }
                ]
            },
            {
                number: 2,
                name: '스토리보드 생성',
                link: '1-3-스토리보드생성.html',
                outputs: [
                    { name: '스토리보드', title: '전체 스토리보드 보기', link: '1-3-스토리보드생성.html' },
                    { name: '씬 1', title: '브랜드 로고와 엔딩 장면', link: '1-3-1-스케치이미지조회.html?scene=1' },
                    { name: '씬 2', title: '브랜드의 철학과 가치 전달', link: '1-3-1-스케치이미지조회.html?scene=2' },
                    { name: '씬 3', title: '브랜드 히스토리와 비전', link: '1-3-1-스케치이미지조회.html?scene=3' },
                    { name: '씬 4', title: '브랜드 메시지 종합', link: '1-3-1-스케치이미지조회.html?scene=4' }
                ]
            },
            {
                number: 3,
                name: '촬영기획',
                link: '1-4-촬영기획.html',
                active: true,
                outputs: [
                    { name: '촬영 기획서', title: '촬영 기획서', link: '1-4-촬영기획.html' }
                ]
            }
        ]
    },
    {
        id: 4,
        name: '여름 세일 이벤트',
        thumbnail: 'CEN_img/dummy/Woman_doing_her_lip_care_routine_by_applying_a_lip_balm_1200x.webp',
        currentStep: 1,
        lastUpdated: '4일 전',
        steps: [
            {
                number: 1,
                name: '정보입력',
                link: '1-2-정보입력.html',
                active: true,
                outputs: [
                    { name: '프로젝트 정보', title: '여름 세일 이벤트 - 프로젝트 정보', link: '1-2-정보입력.html' }
                ]
            }
        ]
    },
    {
        id: 5,
        name: '고객 리뷰 영상',
        thumbnail: 'CEN_img/dummy/ten_baume-levres_rvb.webp',
        currentStep: 3,
        lastUpdated: '5일 전',
        steps: [
            {
                number: 1,
                name: '정보입력',
                link: '1-2-정보입력.html',
                outputs: [
                    { name: '프로젝트 정보', title: '고객 리뷰 영상 - 프로젝트 정보', link: '1-2-정보입력.html' }
                ]
            },
            {
                number: 2,
                name: '스토리보드 생성',
                link: '1-3-스토리보드생성.html',
                outputs: [
                    { name: '스토리보드', title: '전체 스토리보드 보기', link: '1-3-스토리보드생성.html' },
                    { name: '씬 1', title: '고객 인터뷰 시작 장면', link: '1-3-1-스케치이미지조회.html?scene=1' },
                    { name: '씬 2', title: '제품 사용 전후 비교', link: '1-3-1-스케치이미지조회.html?scene=2' },
                    { name: '씬 3', title: '만족도와 실제 후기', link: '1-3-1-스케치이미지조회.html?scene=3' },
                    { name: '씬 4', title: '추천 이유와 메시지', link: '1-3-1-스케치이미지조회.html?scene=4' },
                    { name: '씬 5', title: '종합 리뷰와 클로징', link: '1-3-1-스케치이미지조회.html?scene=5' }
                ]
            },
            {
                number: 3,
                name: '촬영기획',
                link: '1-4-촬영기획.html',
                active: true,
                outputs: [
                    { name: '촬영 기획서', title: '촬영 기획서', link: '1-4-촬영기획.html' }
                ]
            }
        ]
    },
    {
        id: 6,
        name: '제품 사용법 안내',
        thumbnail: 'CEN_img/dummy/Lip-Packaging-jpg.webp',
        currentStep: 2,
        lastUpdated: '1주 전',
        steps: [
            {
                number: 1,
                name: '정보입력',
                link: '1-2-정보입력.html',
                outputs: [
                    { name: '프로젝트 정보', title: '제품 사용법 안내 - 프로젝트 정보', link: '1-2-정보입력.html' }
                ]
            },
            {
                number: 2,
                name: '스토리보드 생성',
                link: '1-3-스토리보드생성.html',
                active: true,
                outputs: [
                    { name: '스토리보드', title: '전체 스토리보드 보기', link: '1-3-스토리보드생성.html' },
                    { name: '씬 1', title: '제품 소개 및 패키징', link: '1-3-1-스케치이미지조회.html?scene=1' },
                    { name: '씬 2', title: '사용 전 준비 단계', link: '1-3-1-스케치이미지조회.html?scene=2' },
                    { name: '씬 3', title: '올바른 사용 방법', link: '1-3-1-스케치이미지조회.html?scene=3' },
                    { name: '씬 4', title: '사용 후 관리 및 보관', link: '1-3-1-스케치이미지조회.html?scene=4' }
                ]
            }
        ]
    },
    {
        id: 7,
        name: '할로윈 특별 프로모션',
        thumbnail: 'CEN_img/dummy/ChatGPT Image 2025년 10월 24일 오후 02_44_21.png',
        currentStep: 4,
        lastUpdated: '1주 전',
        steps: [
            {
                number: 1,
                name: '정보입력',
                link: '1-2-정보입력.html',
                outputs: [
                    { name: '프로젝트 정보', title: '할로윈 특별 프로모션 - 프로젝트 정보', link: '1-2-정보입력.html' }
                ]
            },
            {
                number: 2,
                name: '스토리보드 생성',
                link: '1-3-스토리보드생성.html',
                outputs: [
                    { name: '스토리보드', title: '전체 스토리보드 보기', link: '1-3-스토리보드생성.html' },
                    { name: '씬 1', title: '할로윈 분위기 오프닝', link: '1-3-1-스케치이미지조회.html?scene=1' },
                    { name: '씬 2', title: '할로윈 테마 제품 소개', link: '1-3-1-스케치이미지조회.html?scene=2' },
                    { name: '씬 3', title: '특별 할인 및 이벤트 안내', link: '1-3-1-스케치이미지조회.html?scene=3' },
                    { name: '씬 4', title: '할로윈 메이크업 튜토리얼', link: '1-3-1-스케치이미지조회.html?scene=4' },
                    { name: '씬 5', title: '프로모션 종료일 및 CTA', link: '1-3-1-스케치이미지조회.html?scene=5' }
                ]
            },
            {
                number: 3,
                name: '촬영기획',
                link: '1-4-촬영기획.html',
                outputs: [
                    { name: '촬영 기획서', title: '촬영 기획서', link: '1-4-촬영기획.html' }
                ]
            },
            {
                number: 4,
                name: '영상제작',
                link: '1-5-영상제작.html',
                active: true,
                outputs: [
                    { name: '영상', title: '최종 영상', link: '1-5-영상제작.html' }
                ]
            }
        ]
    },
    {
        id: 8,
        name: '크리스마스 캠페인',
        thumbnail: 'CEN_img/dummy/ChatGPT Image 2025년 10월 24일 오후 02_51_09.png',
        currentStep: 1,
        lastUpdated: '2주 전',
        steps: [
            {
                number: 1,
                name: '정보입력',
                link: '1-2-정보입력.html',
                active: true,
                outputs: [
                    { name: '프로젝트 정보', title: '크리스마스 캠페인 - 프로젝트 정보', link: '1-2-정보입력.html' }
                ]
            }
        ]
    }
];
