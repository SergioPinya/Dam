package ejercicioT2;

import java.io.FileWriter;

public class Ejer3 {

	public static int sumar(int n1, int n2){
		System.out.println("Sumando de " + n1 + " hasta " + n2);
		int resultado = 0;
		for (int i = n1; i <= n2; i++) {
			resultado = resultado + i;
		}

		return resultado;

	}

	public static void main(String[] args) {
		FileWriter fichero = null;
		
		try {
			fichero = new FileWriter("D:/cajonDesastre/Pruevas/vacio.txt");
		
			
			Sumador s = new Sumador();
			int n1 = Integer.parseInt(args[0]);
			int n2 = Integer.parseInt(args[1]);
			int resultado = Sumador.sumar(n1, n2);

			
			System.out.println("Resultado de este sumador: " + resultado);
			fichero.write("Resultado de este sumador: " + resultado+"\n");
			fichero.write("Sumando de " + n1 + " hasta " + n2);
			fichero.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
