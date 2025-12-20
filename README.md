# 🤍 Splitty – 함께 나누는 소분 거래 플랫폼

Splitty는 남는 물건·식재료를 필요한 만큼만 나눠 가지는 소분 거래 서비스로,

PWA + 실시간 데이터 기반으로 빠르고 가벼운 사용자 경험을 제공하는 웹 플랫폼입니다.

| 항목          | 내용                                      |
| ----------- | --------------------------------------- |
| **프로젝트명**   | Splitty                                 |
| **프로젝트 성격** | 팀 프로젝트 / 웹 서비스                          |
| **핵심 기능**   | 소분 상품 등록 / 거래 / 실시간 채팅           |
| **기획 의도**   | 낭비 줄이고 필요한 만큼 거래하기 위한 도시형 소분 플랫폼        |
| **개발 환경**   | Next.js (App Router) + React + Firebase |
| **배포 환경**   | Vercel (PWA 지원)                         |

#### 👩🏻‍💻 담당 역할
| **Frontend** | **Design**|
|------|------|

## ✨ 핵심 기능

### 소분 상품 탐색/거래 플로우

리스트 → 상세 → 거래 요청까지 한 흐름으로 이어지는 UX 구성

### 커서 기반 무한 스크롤

대규모 리스트에서도 끊김 없이 탐색 가능한 구조 적용

### 실시간 채팅

거래 과정에서 즉시 소통 가능하도록 실시간 메시지 연결

### PWA 경험

모바일 환경에서 빠르게 로딩되고 “앱처럼” 사용할 수 있는 웹

## 🧑‍💻 Tech Stack
### Frontend
- Next.js (App Router)
- TypeScript
- Tailwind CSS

### Deploy
- Vercel (PWA)

### Authentication
- Kakao Login (OAuth 2.0) – 소셜 로그인 기반 사용자 인증

### Realtime & Communication
- STOMP WebSocket – 실시간 채팅 메시지 송수신
- Firebase Cloud Messaging (FCM) – 푸시 알림 전송

![alt text](sp.svg)
