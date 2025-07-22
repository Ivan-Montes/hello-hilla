package dev.ime;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.vaadin.flow.theme.Theme;
import com.vaadin.flow.component.page.AppShellConfigurator;

@SpringBootApplication
@Theme("my-theme")
public class HelloHillaChartApplication implements AppShellConfigurator {

    private static final long serialVersionUID = -8150105666387668882L;

	public static void main(String[] args) {
        SpringApplication.run(HelloHillaChartApplication.class, args);
    }
}
