package dev.ime.repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import oshi.SystemInfo;
import oshi.hardware.CentralProcessor;
import oshi.hardware.GlobalMemory;
import oshi.hardware.HardwareAbstractionLayer;
import oshi.software.os.OperatingSystem;
import oshi.util.FormatUtil;
import oshi.util.Util;

@Repository
public class InfoRepository {

	private static final Logger logger = LoggerFactory.getLogger(InfoRepository.class);
	private final SystemInfo systemInfo;

	public InfoRepository(SystemInfo systemInfo) {
		super();
		this.systemInfo = systemInfo;
	}

	public List<String> getOperatingSystemSimple() {

		logger.info("Checking Operating system...");
		OperatingSystem os = systemInfo.getOperatingSystem();
		List<String> list = new ArrayList<>();
		list.add(String.valueOf(os));

		return list;
	}

	public List<String> getCpuSimple() {

		logger.info("Checking CPU...");
		HardwareAbstractionLayer hal = systemInfo.getHardware();
		CentralProcessor processor = hal.getProcessor();
		List<String> list = new ArrayList<>();

		long[] prevTicks = processor.getSystemCpuLoadTicks();
		long[][] prevProcTicks = processor.getProcessorCpuLoadTicks();
		Util.sleep(1000);

		list.add(String.format(Locale.ROOT, "CPU load: %.1f%%",
				processor.getSystemCpuLoadBetweenTicks(prevTicks) * 100));
		long freq = processor.getProcessorIdentifier().getVendorFreq();
		if (freq > 0) {
			list.add("Vendor Frequency: " + FormatUtil.formatHertz(freq));
		}
		freq = processor.getMaxFreq();
		if (freq > 0) {
			list.add("Max Frequency: " + FormatUtil.formatHertz(freq));
		}
		StringBuilder procCpu = new StringBuilder("CPU load per processor:");
		double[] load = processor.getProcessorCpuLoadBetweenTicks(prevProcTicks);
		for (double avg : load) {
			procCpu.append(String.format(Locale.ROOT, " %.2f%%", avg * 100));
		}
		list.add(procCpu.toString());
		long[] freqs = processor.getCurrentFreq();
		if (freqs[0] > 0) {
			StringBuilder sb = new StringBuilder("Current Frequencies: ");
			for (int i = 0; i < freqs.length; i++) {
				if (i > 0) {
					sb.append(", ");
				}
				sb.append(FormatUtil.formatHertz(freqs[i]));
			}
			list.add(sb.toString());
		}

		return list;
	}

	public Map<String, String> getMemorySimple() {

		logger.info("Checking Memory...");
		HardwareAbstractionLayer hal = systemInfo.getHardware();
		GlobalMemory memory = hal.getMemory();

		Map<String, String> memoryInfo = new HashMap<>();

		long totalMemBytes = memory.getTotal();
		long availMemBytes = memory.getAvailable();
		long totalSwapBytes = memory.getVirtualMemory().getSwapTotal();
		long usedSwapBytes = memory.getVirtualMemory().getSwapUsed();

		double totalMemGB = bytesToGB(totalMemBytes);
		double availMemGB = bytesToGB(availMemBytes);
		double usedMemGB = totalMemGB - availMemGB;

		double totalSwapGB = bytesToGB(totalSwapBytes);
		double usedSwapGB = bytesToGB(usedSwapBytes);
		double availSwapGB = totalSwapGB - usedSwapGB;

		memoryInfo.put("totalMem", formatDouble(totalMemGB));
		memoryInfo.put("avaiMem", formatDouble(availMemGB));
		memoryInfo.put("usedMem", formatDouble(usedMemGB));
		memoryInfo.put("totalSwapMem", formatDouble(totalSwapGB));
		memoryInfo.put("usedSwapMem", formatDouble(usedSwapGB));
		memoryInfo.put("avaiSwapMem", formatDouble(availSwapGB));

		return memoryInfo;
	}

	private static final double BYTES_IN_GB = 1024.0 * 1024 * 1024;

	private double bytesToGB(long bytes) {
		return bytes / BYTES_IN_GB;
	}

	private String formatDouble(double value) {
		return String.format(Locale.US, "%.2f", value);
	}

	public Map<String, String> getGeneralUsage() {

		HardwareAbstractionLayer hal = systemInfo.getHardware();
		GlobalMemory memory = hal.getMemory();
		CentralProcessor processor = hal.getProcessor();
		long[] prevTicks = processor.getSystemCpuLoadTicks();
		Util.sleep(1000);

		Map<String, String> memoryInfo = new HashMap<>();

		long totalMemBytes = memory.getTotal();
		long availMemBytes = memory.getAvailable();
		long usedMemBytes = totalMemBytes - availMemBytes;
		double usedMemPer100 = (double) (usedMemBytes * 100) / totalMemBytes;

		long totalSwapBytes = memory.getVirtualMemory().getSwapTotal();
		long usedSwapBytes = memory.getVirtualMemory().getSwapUsed();
		double useSwapPer100 = (double) (usedSwapBytes * 100) / totalSwapBytes;

		double cpuLoadPer100 = processor.getSystemCpuLoadBetweenTicks(prevTicks) * 100;

		memoryInfo.put("usedMemPer100", formatDouble(usedMemPer100));
		memoryInfo.put("usedSwapMemPer100", formatDouble(useSwapPer100));
		memoryInfo.put("cpuLoadPer100", formatDouble(cpuLoadPer100));

		return memoryInfo;
	}
}
