package ejerT2;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;

public class Ejer1 {

	public static void main(String[] args) {
		//Hacemos que FileReader se haga una variable global
		
			//Esta clase tiene métodos que nos permiten leer caracteres pero 
			//no contiene métodos que nos permitan leer líneas completas
		FileReader fr=null;
	      // BufferedReader contiene métodos que nos permitan leer líneas completas
		BufferedReader br=null;
		//Generamos un file para que almacene el que ens trova per args
	    File archiu = new File(args[0]);

		//try   ejecuta este código
		 try {
		         // Apertura del fichero y creacion de BufferedReader para poder
		         // hacer una lectura comoda (disponer del metodo readLine()).
			 
				System.out.println("Nom del archiu ");
				//Mostramos el om del archiu per pantalla y fem un salto de linea
				System.out.println(archiu.getName()+"\n");
					//Construccionde un BufferedReader a partir del FileReader
				    fr = new FileReader (archiu);
				    br = new BufferedReader(fr);
		         System.out.println("Contenido del archiu: ");
		         // Lectura del fichero
		         // se crea un string anomenat linea
		         String linea;
		         //Mientras que en el archiu halla lineas br no sera null 
		         while((linea=br.readLine())!=null) {
		        	 
		            System.out.println(linea);
		      }
		 }
		 // catch 
		 //si ocurrió un error, entonces salta aquí
		  // e es el objeto error
		      catch(Exception e){
		    	  //Devuelve un codigo de error
		         e.printStackTrace();
		      }finally{
		         // En el finally cerramos el fichero, para asegurarnos
		         // que se cierra tanto si todo va bien como si salta 
		         // una excepcion.
		         try{         
		        	 //si el archiu no te mes linies es dir fr=null fr para de leer
		            if( null != fr ){   
		               fr.close();     
		            }                  
		         }catch (Exception e2){ 
		            e2.printStackTrace();
		         }
		      }
		   }
		

	}


