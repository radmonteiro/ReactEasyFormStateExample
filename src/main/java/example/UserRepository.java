package example;

import example.model.User;

public class UserRepository {

	private static User user;


	public static void setUser(User user) {
		UserRepository.user = user;
	}

	public static User getUser() {
		return user;
	}
}
