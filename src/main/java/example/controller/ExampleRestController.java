package example.controller;

import example.UserRepository;
import example.model.ResponseModel;
import example.model.User;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rest")
public class 	ExampleRestController {


	@PostMapping("/register")
	public ResponseModel register(User user) {

		ResponseModel responseModel = new ResponseModel();

		if (! user.getEmail().contains("@")) {

			responseModel.addFieldErrors("email", "invalid email");
			return responseModel;
		}

		UserRepository.setUser(user);

		responseModel.setUrlRedirect("/profile");

		return responseModel;
	}



}