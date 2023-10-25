package ejerT1;

import java.io.File;
import java.io.IOException;

public class Ejer8 {

	public static void main(String[] args) {

		File fichero = new File(args[0]);
		  
		
		File copi = new File(fichero+"cop");
		try {
			if (fichero.createNewFile())
				System.out.println("El fichero se ha creado correctamente");
			else
				fichero.renameTo(copi);
				fichero.createNewFile();
				System.out.println("El fichero se ha copiado correctamente");
		} catch (IOException ioe) {
			
			ioe.printStackTrace();
		}
	}

}
