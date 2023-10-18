package ejerT1;

import java.io.File;

public class ejer7 {
	public static void main(String[] args) {

		File directorio = new File(args[0]);
		String[] listaArchivos=null;
		for (int i = 1; i < args.length; i++) {
			 listaArchivos = directorio.list(new FiltroExtension(args[i]));
			 for (int e = 0; e < listaArchivos.length; e++) {
					System.out.println(listaArchivos[e]);
				}
			
		}
		

	}

}