package ejerT2;
import java.io.FileWriter;
import java.io.PrintWriter;
import java.util.Scanner;

public class Ejer7 {

		// Realitza un programa que permeta rebre per teclat una sèrie de strings per part de l’usuari
	//i els vaja escrivint en un fitxer de text. Com a condició de finalització, l’usuari haurà
	//d’escriure un string que siga “exit”.
	
		public static void main(String[] args) {
			//Declaramos la variable de en la cual almacenaremos todos los caracteres que le vamos a pasar por consola
				Scanner datos = new Scanner(System.in);
				//Declaramos las variables globales 
				FileWriter fichero = null;
		        PrintWriter pw = null;
		    
		        try
		        {
		        	//le Parasom el fichero en el que queremos escribir{
		            fichero = new FileWriter("D:/cajonDesastre/Pruevas/vacio.txt");
		            pw = new PrintWriter(fichero);
		            //}
		            //declaramos la variable que va ha escribir como a verificar el bucle
		            String letras; 
		           do{     
		        	  //se guarda un salto de linea en letras
		        	   letras = datos.nextLine();
		        	   //se esctriben las letras en el fichero
		             pw.println(letras);
		             //si letras no es igual a exit y es falso se para el bucle
		            }while (letras.equals("exit")==false );
		           
		        } catch (Exception e) {
		            e.printStackTrace();
		        } finally {
		           try {
		           // Nuevamente aprovechamos el finally para 
		           // asegurarnos que se cierra el fichero.
		        	   if(datos != null) {
		        		   datos.close();
		        	   }
		           if (null != fichero)
		              fichero.close();
		           } catch (Exception e2) {
		              e2.printStackTrace();
		           }
		        }
		    }

	}


