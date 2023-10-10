package example;

import java.util.Scanner;

public class Ejer2 {

	public static void main(String[] args) {
		

		 Scanner teclado = new Scanner(System.in);
		    String nom;
		    
		    
		    System.out.println("Posa el teu nom: "); 
		    nom = teclado.nextLine();   
		       
		    System.out.println("Hola: " + nom); 
		    
		    teclado.close();
		
	}

}
