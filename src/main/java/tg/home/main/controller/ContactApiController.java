package tg.home.main.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;
import tg.home.com.util.Reply;

import java.util.Map;
import java.util.regex.Pattern;

@RestController
@RequestMapping("/api/contact")
public class ContactApiController {

    private static final Logger logger = LoggerFactory.getLogger(ContactApiController.class);
    
    // RFC 5322 compliant email validation pattern (simplified)
    private static final Pattern EMAIL_PATTERN = Pattern.compile(
        "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$"
    );

    @PostMapping("/submit")
    public Reply submitContactForm(@RequestBody Map<String, String> formData) {
        // Validate form data
        String name = formData.get("name");
        String email = formData.get("email");
        String message = formData.get("message");

        if (name == null || name.trim().isEmpty()) {
            return new Reply(false, "이름을 입력해주세요.");
        }

        if (email == null || email.trim().isEmpty()) {
            return new Reply(false, "이메일을 입력해주세요.");
        }

        if (message == null || message.trim().isEmpty()) {
            return new Reply(false, "메시지를 입력해주세요.");
        }

        // Email validation using improved regex pattern
        if (!EMAIL_PATTERN.matcher(email).matches()) {
            return new Reply(false, "올바른 이메일 형식이 아닙니다.");
        }

        // In a real application, this would save to database or send email
        // Log contact form submission (without sensitive data in production)
        logger.info("Contact form submitted from: {}", email);
        logger.debug("Contact details - Name: {}, Message length: {} characters", name, message.length());

        return new Reply(true, "문의가 성공적으로 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.");
    }
}
