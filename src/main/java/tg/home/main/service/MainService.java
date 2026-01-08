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
}
