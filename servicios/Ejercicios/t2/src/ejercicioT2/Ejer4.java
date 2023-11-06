package ejercicioT2;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

public class Ejer4 {
	public static void lanzarEje3(Integer n1, Integer n2) {

		try {
			// El comando de abajo es para localizar la maquina de java en cualquier maquina
			String clase = "ejercicioT2.Ejer3";
			String javaHome = System.getProperty("java.home");
			String javaBin = javaHome + File.separator + "bin" + File.separator + "java";
			String classpath = System.getProperty("java.class.path");
			//
			//Estos comandos generan un comando 
			String className = clase;

			List<String> command = new ArrayList<>();

			command.add(javaBin);

			command.add("-cp");
			command.add(classpath);
			command.add(className);
			command.add(n1.toString());
			command.add(n2.toString());

			System.out.println("Comando que se pasa a ProcessBuilder: " + command);

			System.out.println("Comando a ejecutar en cmd.exe: " + command.toString().replace(",", ""));

			ProcessBuilder builder = new ProcessBuilder(command);
// el comando de abajo es el que inicia todo
			Process process = builder.inheritIO().start();

//opcional{
			// Process process = builder.inheritIO().start();

			// Process process = builder.redirectOutput(new File("temp.txt")).start();
//}

// dice codigo de error (si es 0 es que ha ido todo bien)
			process.waitFor();

			System.out.println(process.exitValue());
//

		} catch (Exception e) {

			e.printStackTrace();

		}

	}
	public static void lanzarVerifi(Integer n1, Integer n2) {

		try {
			// El comando de abajo es para localizar la maquina de java en cualquier maquina
			String clase = "ejercicioT2.Ejer3";
			String javaHome = System.getProperty("java.home");
			String javaBin = javaHome + File.separator + "bin" + File.separator + "java";
			String classpath = System.getProperty("java.class.path");
			//
			//Estos comandos generan un comando 
			String className = clase;

			List<String> command = new ArrayList<>();

			command.add(javaBin);

			command.add("-cp");
			command.add(classpath);
			command.add(className);
			command.add(n1.toString());
			command.add(n2.toString());

			System.out.println("Comando que se pasa a ProcessBuilder: " + command);

			System.out.println("Comando a ejecutar en cmd.exe: " + command.toString().replace(",", ""));

			ProcessBuilder builder = new ProcessBuilder(command);
// el comando de abajo es el que inicia todo
			Process process = builder.inheritIO().start();

//opcional{
			// Process process = builder.inheritIO().start();

			// Process process = builder.redirectOutput(new File("temp.txt")).start();
//}

// dice codigo de error (si es 0 es que ha ido todo bien)
			process.waitFor();

			System.out.println(process.exitValue());
//

		} catch (Exception e) {

			e.printStackTrace();

		}

	}
//esta funcion es la que le envia a sumador las variables y hace que se ejecute el lanzador multiples veces
	public static void main(String[] args) {

		Lanzador l = new Lanzador();
			//Los valores que hay ay son los que se pasan 
		lanzarEje3(1, 50);

		lanzarEje3(50, 100);
		
		
		System.out.println("Ok");

	}
}
