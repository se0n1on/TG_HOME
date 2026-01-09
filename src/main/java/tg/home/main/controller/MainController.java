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

	@GetMapping("/about")
	public String about(Model model) {
		model.addAttribute("companyInfo", mainService.getCompanyInfo());
		model.addAttribute("values", mainService.getCompanyValues());
		model.addAttribute("history", mainService.getCompanyHistory());
		return "main/about";
	}

	@GetMapping("/services")
	public String services(Model model) {
		model.addAttribute("services", mainService.getServices());
		model.addAttribute("projects", mainService.getProjects());
		return "main/services";
	}

	@GetMapping("/contact")
	public String contact(Model model) {
		model.addAttribute("leadership", mainService.getLeadershipTeam());
		model.addAttribute("contact", mainService.getContactInfo());
		return "main/contact";
	}
}
