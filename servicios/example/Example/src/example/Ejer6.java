package example;

import java.util.Scanner;

public class Ejer6 {

	public static void main(String[] args) {
		Scanner teclado = new Scanner(System.in);
		int i = 0;
		String[] numero1= new String[5];
		do {
			
			
			System.out.println("Posa un numero: ");
			numero1[i] = teclado.nextLine();
			
			
		  i++;
		  
			
		}
		while (i < 5);
		
		int res =0;
		for(int e = 0; e<numero1.length;e++) {
			int num = Integer.parseInt(numero1[e]);
		
		
		res+=num;
		
		}
		System.out.println(res);
		teclado.close();

	}

}
