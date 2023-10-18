package ejerT1;

import java.io.File;

public class Eje1I2I3 {
	public static void main(String[] args) {

		File directori = new File(args[0]);

		comprovacio(directori);
	}

	public static void comprovacio(File directori) {
		if (directori.isDirectory() == true) {
			System.out.println("Encontrat");
			System.out.println("");
			informacioDirectori(directori);
		} else {
			System.out.println("No existis");
		}

	}

	public static void informacioDirectori(File directori) {

		System.out.println("Informacio del directori");
		System.out.println("--------------------------");
		System.out.println("Nom del directori: " + directori.getName());
		System.out.println("Ruta: " + directori.getPath());
		System.out.println("Ruta absoluta: " + directori.getAbsolutePath());

	}
	
	
}
