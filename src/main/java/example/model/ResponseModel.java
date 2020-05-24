package example.model;

import java.util.HashMap;
import java.util.Map;

public class ResponseModel {

	private static final String DEFAULT_FIELD_ERRORS = "Field Errors";

	private static class Errors {
		private String message;
		private Map<String, String> fields;

		public Errors() {
			fields = new HashMap<>();
		}

		public String getMessage() {
			return message;
		}

		public Map<String, String> getFields() {
			return fields;
		}


	}


	private String redirectUrl;
	private final Errors errors = new Errors();


	public ResponseModel() { }


	public void addFieldErrors(String field, String error) {
		if (errors.message == null) {
			errors.message = DEFAULT_FIELD_ERRORS;
		}
		errors.fields.put(field, error);
	}

	public String getRedirectUrl() {
		return redirectUrl;
	}

	public Errors getErrors() {
		return errors;
	}

	public void setRedirectUrl(String redirectUrl) {
		this.redirectUrl = redirectUrl;
	}
}
