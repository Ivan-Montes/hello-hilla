package dev.ime;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.vaadin.flow.theme.Theme;
import com.vaadin.flow.component.page.AppShellConfigurator;

@SpringBootApplication
@Theme("my-theme")
public class HelloHillaGridApplication implements AppShellConfigurator {

    private static final long serialVersionUID = 3332641748216413717L;

	public static void main(String[] args) {
        SpringApplication.run(HelloHillaGridApplication.class, args);
    }
}
