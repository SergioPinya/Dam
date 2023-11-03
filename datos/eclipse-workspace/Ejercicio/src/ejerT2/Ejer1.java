package ejerT2;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;

public class Ejer1 {

	public static void main(String[] args) {

		
	FileReader fr=null;
      
	BufferedReader br=null;

    File archiu = new File(args[0]);


	 try {
	
		 
			System.out.println("Nom del archiu ");
			//muestra el nombre del archivo y hace un salto de linea
			System.out.println(archiu.getName()+"\n");
			
			  fr = new FileReader (archiu);
			  br = new BufferedReader(fr);
	         System.out.println("Contenido del archiu: ");
	     
	        int caracter;
	     //mientras caracteres tenga un valor se seguira ejecutando
	        //br.read() se encarga de leer un caracter y te devuelbe un numero entero
	         while((caracter=br.read())!=-1) {
	        	
	        	 //este comando muestra los caracteres sin saltos de linea
	        	 	//((chara)caracter) a qui se converte los numeros enteros en un caracter
	            System.out.print((char)caracter);
	         }

	      }

	      catch(Exception e){
	    	
	         e.printStackTrace();
	      }finally{
	     
	         try{         
	        	
	            if( null != fr ){   
	               fr.close();     
	            }                  
	         }catch (Exception e2){ 
	            e2.printStackTrace();
	         }
	      }
	   }

}
