package ejerT2;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;

public class Ejer5 {


	
		// Realitza un altre programa que mostre un nombre determinat de caràcters per
		// pantalla (per exemple 100), espere a que l’usuari presione alguna tecla, mostre un altre
		// bloc de caràcters, torne a esperar, i així successivament fins mostrar tot el contingut.

		public static void main(String[] args) {

			FileReader fr = null;

			BufferedReader br = null;

			File archiu = new File(args[0]);

			try {

				System.out.println("Nom del archiu ");
				// muestra el nombre del archivo y hace un salto de linea
				System.out.println(archiu.getName() + "\n");

				fr = new FileReader(archiu);
				br = new BufferedReader(fr);
				System.out.println("Contenido del archiu: ");

				String caracter;
				//contador
				int caracteresMostrados=0;
				// mientras caracteres tenga un valor se seguira ejecutando
				// br.readLine() se encarga de leer una linea de  caracter y te devolverla
				while ((caracter = br.readLine()) != null && caracteresMostrados < 100) {
					// este comando pausa la ejeucion durante un tiempo estimado
					 Thread.sleep(1000);
					// este comando muestra los caracteres con saltos de linea
			
					System.out.println( caracter);
					caracteresMostrados++;
				}

			}

			catch (Exception e) {

				e.printStackTrace();
			} finally {

				try {

					if (null != fr) {
						fr.close();
					}
				} catch (Exception e2) {
					e2.printStackTrace();
				}
			}
		}

	}

	

