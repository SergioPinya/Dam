package Example;

import java.io.File;

public class App {

	public static void main(String[] args) {
		
		
//		File fichero= new File ("Ejemplo");
//		
//		System.out.println("Nombre del archivo: "+fichero.getName());
//		System.out.println("Ruta: "+fichero.getPath());
//		System.out.println("Ruta absoluta: "+fichero.getAbsolutePath());
//		System.out.println("Nombre del archivo: "+fichero.getName());
//		System.out.println("Nombre del archivo: "+fichero.getName());

		
		File directorio= new File (".");
		
		String[] listaArchivos = directorio.list();
		System.out.print("Contenidos Directorio: "+ directorio.getName());
		
		
		for(String archivo : listaArchivos) {
//		for(int i=0; i < listaArchivos.length; i++) {
			System.out.print(listaArchivos);
		}
		
		
	}

}
