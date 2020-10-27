package StepDefenition;
import io.cucumber.java.en.*;
public class LoginStep {
	
	@Given("user is in login page")
	public void user_is_in_login_page() {
		
		System.out.println("Step Def : user is in login page");
	}

	@When("user enters username and password")
	public void user_enters_username_and_password() {
	    
		System.out.println("Step Def : user enters username and password");
	}

	@When("click on button submit")
	public void click_on_button_submit() {
	    
		System.out.println("Step Def : click on button submit");
	}

	@Then("user is navigated to home page")
	public void user_is_navigated_to_home_page() {
	    
		System.out.println("Step Def : user is navigated to home page");
	}

	@When("user enters user1 and pass1")
	public void user_enters_user1_and_pass1() {
	    
		System.out.println("Step Def : user enters user1 and pass1");
	}

	@When("user enters user2 and pass2")
	public void user_enters_user2_and_pass2() {
	    
		System.out.println("Step Def : user enters user2 and pass2");
	}

	@When("user enters user3 and pass3")
	public void user_enters_user3_and_pass3() {
		
		System.out.println("Step Def : user enters user3 and pass3");
	}
}
