/**
 * CEN AI Studio - History Data
 * Sample history data for the history panel
 */

window.HISTORY_DATA = [
    {
        id: 1,
        user: '사용자',
        action: '스토리보드 생성 완료',
        time: '10분 전',
        type: 'complete',
        timestamp: Date.now() - 600000 // 10 minutes ago
    },
    {
        id: 2,
        user: '홍길동님',
        action: '프로젝트 정보 수정',
        time: '1시간 전',
        type: 'edit',
        timestamp: Date.now() - 3600000 // 1 hour ago
    },
    {
        id: 3,
        user: '사용자',
        action: '새 프로젝트 생성: 신제품 런칭 광고',
        time: '2시간 전',
        type: 'create',
        timestamp: Date.now() - 7200000 // 2 hours ago
    },
    {
        id: 4,
        user: '사용자',
        action: '영상 제작 완료',
        time: '어제',
        type: 'complete',
        timestamp: Date.now() - 86400000 // 1 day ago
    },
    {
        id: 5,
        user: '김철수님',
        action: '씬 3 편집',
        time: '어제',
        type: 'edit',
        timestamp: Date.now() - 90000000 // 1 day ago
    },
    {
        id: 6,
        user: '사용자',
        action: '촬영 기획서 생성',
        time: '2일 전',
        type: 'create',
        timestamp: Date.now() - 172800000 // 2 days ago
    },
    {
        id: 7,
        user: '사용자',
        action: '프로젝트 삭제: 테스트 프로젝트',
        time: '3일 전',
        type: 'edit',
        timestamp: Date.now() - 259200000 // 3 days ago
    },
    {
        id: 8,
        user: '사용자',
        action: '스토리보드 AI 재생성',
        time: '3일 전',
        type: 'create',
        timestamp: Date.now() - 280000000 // 3 days ago
    }
];
