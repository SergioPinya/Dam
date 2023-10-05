package example;

import java.util.Scanner;

public class Ejer3 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
//		Tambien se puede usar el nexline()	cuando es una combinacion de string y integer se especifica los integer con parseInt()
		
		Scanner teclado = new Scanner(System.in);
		Integer numero1;
		Integer numero2;
		Integer resultat;

		System.out.println("Posa un numero: ");
		numero1 = teclado.nextInt();

		System.out.println("Posa altre numero: ");
		numero2 = teclado.nextInt();

		resultat = numero1 + numero2;

  
		System.out.println("resultado: " + resultat);

		teclado.close();

	}
}
