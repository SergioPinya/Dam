package ejerT2;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;

public class Ejer2 {

	public static void main(String[] args) {

		
	FileReader fr=null;
      
	BufferedReader br=null;

    File archiu = new File(args[0]);


	 try {
	
		 
			System.out.println("Nom del archiu ");
			System.out.println(archiu.getName()+"\n");
			
			    fr = new FileReader (archiu);
			    br = new BufferedReader(fr);
	         System.out.println("Contenido del archiu: ");
	     
	        String linea;
	     
	         while((linea=br.readLine())!=null) {
	        	 Thread.sleep(1000);
	            System.out.println(linea);
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
