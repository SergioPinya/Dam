package ejerT2;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;

public class Ejer7 {


	


		// Realitza un programa que permeta rebre per teclat una sèrie de strings per part de l’usuari
	//i els vaja escrivint en un fitxer de text. Com a condició de finalització, l’usuari haurà
	//d’escriure un string que siga “exit”.
		public static void main(String[] args) {

			FileReader fr = null;

			BufferedReader br = null;

			File archiu = new File(args[0]);
			// Hace que la variable escritura sea una variable global
			FileWriter escritura = null;

			try {
				//Guarda en la variable escritura el fichero que deseamos editar.
				
				escritura = new FileWriter("D:/cajonDesastre/Pruevas/vacio.txt");
				System.out.println("Nom del archiu ");
				// muestra el nombre del archivo y hace un salto de linea
				System.out.println(archiu.getName() + "\n");

				fr = new FileReader(archiu);
				br = new BufferedReader(fr);
				System.out.println("Contenido del archiu: ");

				int caracter;
			
				// contador
				int caracteresMostrados = 0;
				// mientras caracteres tenga un valor se seguira ejecutando
				// br.readLine() se encarga de leer una linea de caracter y te devolverla
				while ((caracter = br.read()) != -1 && caracteresMostrados<150 ) {
					//escribe en el fichero guardado en la variable escritura los valores enteros para
					//convertirlos en caracteres 
					escritura.write(caracter);
					
					caracteresMostrados++;
				}

			}

			catch (Exception e) {

				e.printStackTrace();
			} finally {

				try {
					//si escritura debuelve null se ejecutan los comando de abajo 
					//los cuales detienen el proceso de escritura
						if (escritura != null) {
							escritura.flush();
							escritura.close();					
						}
					if (null != fr) {
						fr.close();
					}
				} catch (Exception e2) {
					e2.printStackTrace();
				}
			}
		}

	}


