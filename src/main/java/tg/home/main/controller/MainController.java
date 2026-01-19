package tg.home.main.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
//import tg.home.main.entity.MainVO;
import tg.home.main.service.MainService;

import java.util.Locale;

@Controller
public class MainController {

//	private final MainService mainService;

//	public MainController(MainService mainService) {
//		this.mainService = mainService;
//	}

	@GetMapping("/")
	public String root(Locale locale) {
		if (locale != null && "ko".equalsIgnoreCase(locale.getLanguage())) {
			return "redirect:/ko";
		}
		return "redirect:/en";
	}

	@GetMapping("/{lang:en|ko}")
	public String index(@PathVariable String lang) {
		return "ko".equals(lang) ? "index_ko" : "index";
	}
}
