package tg.home.main.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import tg.home.main.service.MainService;

@Controller
public class MainController {

	private final MainService mainService;

	public MainController(MainService mainService) {
		this.mainService = mainService;
	}

	@GetMapping("/")
	public String index(Model model) {
		model.addAttribute("tagline", mainService.getTagline());
		model.addAttribute("lead", mainService.getLead());
		model.addAttribute("intro", mainService.getIntro());
		model.addAttribute("services", mainService.getServices());
		model.addAttribute("projects", mainService.getProjects());
		model.addAttribute("processSteps", mainService.getProcessSteps());
		model.addAttribute("clients", mainService.getClients());
		model.addAttribute("contact", mainService.getContactInfo());

		return "main/main";
	}
}
