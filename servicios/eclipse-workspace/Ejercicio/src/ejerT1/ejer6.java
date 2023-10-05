package ejerT1;

import java.io.File;
import java.io.FilenameFilter;

public class ejer6 {
	public static void main(String[] args) {

		File directori = new File(args[0]);
		String extensio = new String(args[1]);
		directoriextensio(directori,extensio);
	}

	public static void directoriextensio(File directori,String extensio) {

//		File[] listFiles() 
		if (directori.isDirectory()) {
			System.out.println("Nom del directori: " + directori.getName());

			String[] listado = directori.list();
			if (listado == null || listado.length == 0) {
				System.out.println("No ia elements dins de la carpeta ");

			} else {
				File[] filtro = directori.listFiles(new FilenameFilter() {
					public boolean accept(File directori, String nom) {
						return nom.toLowerCase().endsWith(extensio);
					}
				});
				if (filtro == null || filtro.length == 0) {
					for (int i = 0; i < listado.length; i++) {
						System.out.println(listado[i]);
					}

				} else {
					for (int i = 0; i < filtro.length; i++) {
						System.out.println(filtro[i]);
					}
				}
			}

		} else {
			System.out.println("no existis ");
		}

	}

}
