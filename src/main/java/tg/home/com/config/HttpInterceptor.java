package tg.home.com.config;

import java.util.Objects;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

@Slf4j
public class HttpInterceptor implements HandlerInterceptor {

    @Value(value = "${home.index.url}")
    private String indexUrl;
	
	@Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {
        String requestUrl = request.getRequestURL().toString();
        String requestUrI = request.getRequestURI();
		String queryString = request.getQueryString();
		
		// 특정 URL 패턴에 해당하는 경우 로그를 출력하지 않음
	    if (!isExcludedUrl(requestUrI)) {
			if (Objects.equals(request.getMethod(), "POST")) {
				CachedBodyHttpServletRequest cachedBodyHttpServletRequest = new CachedBodyHttpServletRequest(request);
            	String requestBody = new String(cachedBodyHttpServletRequest.getInputStream().readAllBytes(), request.getCharacterEncoding());

				log.info("############################################");
				log.info("요청 URL: " + requestUrl);
				log.info("요청 정보: " + requestBody);
				log.info("############################################");
			} else {
				log.info("############################################");
				log.info("요청 URL: " + requestUrl);
				log.info("요청 정보: " + queryString);
				log.info("############################################");
			}
	    }
	    return true;
	}
	
	private boolean isExcludedUrl(String uri) {
	    // 특정 URL 패턴에 해당하는 경우 true 반환
	    return uri.contains("/css/") || uri.contains("/js/") || uri.contains("/img/") || uri.contains("/fonts/") || uri.contains("/sys/") || uri.equals(indexUrl);
	}
	
    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
    	
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
    	
    }
}
