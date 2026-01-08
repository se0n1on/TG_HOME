package tg.home.main.service;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class MainService {

    public String getTagline() {
        return "AI·Data Consulting & IT Governance";
    }

    public String getLead() {
        return "공공/공공기관 특화 데이터·AI 및 Spring Boot 기반 시스템 설계·구현·운영";
    }

    public String getIntro() {
        return "TG는 공공 부문 시스템 아키텍처, 보안요건 반영, 데이터 거버넌스와 AI 솔루션 통합에 강점을 가진 전문 컨설팅 및 개발 조직입니다.";
    }

    public List<Map<String, Object>> getServices() {
        return List.of(
                Map.of("title", "시스템 아키텍처 설계", "desc", "공공기관 요구에 맞춘 보안·무중단·백업 설계"),
                Map.of("title", "인증·권한 통합", "desc", "OAuth2/JWT/LDAP 기반 인증·권한체계 구현"),
                Map.of("title", "데이터 거버넌스", "desc", "데이터 수집·정제·품질관리 프로세스 수립"),
                Map.of("title", "AI/분석 솔루션", "desc", "운영 통계 대시보드 및 예측모델 도입")
        );
    }

    public List<Map<String, String>> getProjects() {
        return List.of(
                Map.of("title", "전자문서 통합시스템", "desc", "문서 관리·전결·감사 로그 통합 시스템 구축"),
                Map.of("title", "인증·권한 플랫폼", "desc", "공공 표준 연동 및 세부권한 관리 플랫폼 개발"),
                Map.of("title", "데이터 대시보드", "desc", "운영 통계, 리포트 자동화 및 시각화 포털")
        );
    }

    public List<String> getProcessSteps() {
        return List.of(
                "요구분석 및 보안요건 수립",
                "아키텍처 설계 및 POC",
                "구현·테스트·보안검증",
                "배포·운영·유지보수"
        );
    }

    public List<String> getClients() {
        return List.of("ClientA","ClientB","ClientC","ClientD");
    }

    public Map<String, String> getContactInfo() {
        return Map.of(
                "email", "contact@tgin.kr",
                "phone", "02-000-0000",
                "address", "서울특별시 예시구 예시로 123"
        );
    }

    // About page content
    public Map<String, Object> getCompanyInfo() {
        return Map.of(
                "name", "TG",
                "fullName", "TG Information Technology",
                "established", "2020",
                "employees", "50+",
                "description", "TG는 공공 부문에 특화된 IT 컨설팅 및 시스템 개발 전문 기업입니다. " +
                        "데이터 거버넌스, AI 솔루션, Spring Boot 기반 엔터프라이즈 애플리케이션 개발에 " +
                        "강점을 가지고 있으며, 정부 및 공공기관의 디지털 혁신을 선도하고 있습니다."
        );
    }

    public List<Map<String, String>> getCompanyValues() {
        return List.of(
                Map.of("title", "전문성", "desc", "공공 부문 특화된 기술력과 경험을 바탕으로 최고의 솔루션을 제공합니다."),
                Map.of("title", "신뢰성", "desc", "고객과의 약속을 최우선으로 하며, 투명하고 책임감 있는 업무를 수행합니다."),
                Map.of("title", "혁신", "desc", "최신 기술 트렌드를 반영하여 지속적으로 혁신하는 솔루션을 개발합니다."),
                Map.of("title", "협력", "desc", "고객과의 긴밀한 협력을 통해 최적의 결과를 도출합니다.")
        );
    }

    public List<Map<String, String>> getCompanyHistory() {
        return List.of(
                Map.of("year", "2024", "event", "AI 기반 데이터 분석 플랫폼 구축"),
                Map.of("year", "2023", "event", "공공기관 통합 인증 시스템 개발"),
                Map.of("year", "2022", "event", "전자문서 관리 시스템 구축"),
                Map.of("year", "2020", "event", "TG 설립")
        );
    }

    // Leadership team
    public List<Map<String, String>> getLeadershipTeam() {
        return List.of(
                Map.of(
                        "name", "김대표",
                        "position", "대표이사 (CEO)",
                        "image", "/img/illustrations/profiles/profile-1.png",
                        "bio", "20년 이상의 공공 IT 프로젝트 경험을 보유한 전문가로, TG의 비전과 전략을 주도하고 있습니다."
                ),
                Map.of(
                        "name", "이전무",
                        "position", "전무이사 (Executive Director)",
                        "image", "/img/illustrations/profiles/profile-2.png",
                        "bio", "데이터 아키텍처 및 시스템 설계 전문가로, 주요 프로젝트의 기술적 방향을 제시합니다."
                ),
                Map.of(
                        "name", "박이사",
                        "position", "이사 (General Manager)",
                        "image", "/img/illustrations/profiles/profile-3.png",
                        "bio", "프로젝트 관리 및 운영 전문가로, 고객 만족을 위한 최상의 서비스를 제공합니다."
                )
        );
    }
}
