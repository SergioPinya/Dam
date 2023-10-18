package ejerT1;

import java.io.File;

public class Eje4 {
	public static void main(String[] args) {

		File directori = new File(args[0]);

		comprovacio(directori);
	}

	public static void comprovacio(File directori) {
		if (directori.isDirectory() == true) {
			System.out.println("Encontrat");			
		} else {
			System.out.println("No existis");
		}

	}
}
