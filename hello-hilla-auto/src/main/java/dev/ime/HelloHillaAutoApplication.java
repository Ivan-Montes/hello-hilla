package dev.ime;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.vaadin.flow.theme.Theme;
import com.vaadin.flow.component.page.AppShellConfigurator;

@SpringBootApplication
@Theme("my-theme")
public class HelloHillaAutoApplication implements AppShellConfigurator {

    private static final long serialVersionUID = 1043425884290694607L;

	public static void main(String[] args) {
        SpringApplication.run(HelloHillaAutoApplication.class, args);
    }
}
