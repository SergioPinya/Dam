package example;

import java.util.Scanner;

public class Ejer4 {

	public static void main(String[] args) {
	


		Scanner teclado = new Scanner(System.in);
		Integer numero1;
		Integer numero2;

		System.out.println("Posa un numero: ");
		numero1 = teclado.nextInt();

		System.out.println("Posa altre numero: ");
		numero2 = teclado.nextInt();

		if (numero1 < numero2) {
			System.out.println("El numero: "+ numero2 + " es mayor que el numero " + numero1 );
		}else if(numero1 >numero2) {
			System.out.println("El numero: "+ numero1 + " es mayor que el numero " + numero2);

		}else {
			System.out.println("El numero: "+ numero1 + " es igual que el numero " + numero2);

		}

  
		

		teclado.close();
		
	}

}
