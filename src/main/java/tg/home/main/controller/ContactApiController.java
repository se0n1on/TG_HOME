package tg.home.main.controller;

import org.springframework.web.bind.annotation.*;
import tg.home.com.util.Reply;

import java.util.Map;

@RestController
@RequestMapping("/api/contact")
public class ContactApiController {

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

        // Basic email validation
        if (!email.matches("^[A-Za-z0-9+_.-]+@(.+)$")) {
            return new Reply(false, "올바른 이메일 형식이 아닙니다.");
        }

        // In a real application, this would save to database or send email
        // For now, just log and return success
        System.out.println("Contact form submitted:");
        System.out.println("Name: " + name);
        System.out.println("Email: " + email);
        System.out.println("Message: " + message);

        return new Reply(true, "문의가 성공적으로 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.");
    }
}
