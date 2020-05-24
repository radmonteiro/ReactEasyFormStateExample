package example.controller;

import example.UserRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import example.model.User;

@Controller
public class ExampleController {


	@GetMapping("/profile")
	public String home(Model model) {

		User user = UserRepository.getUser();

		model.addAttribute("user", user);

		return "profile"; //view
	}


	@GetMapping("/register")
	public String viewRegister(Model model) {

		model.addAttribute("urlSubmit", "/rest/register");

		return "register"; //view
	}




}