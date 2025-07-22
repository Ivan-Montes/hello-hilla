package dev.ime.common;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import oshi.SystemInfo;

@Configuration
public class Config {

	@Bean
	SystemInfo getSystemInfo() {
		return new SystemInfo();
	}
}
