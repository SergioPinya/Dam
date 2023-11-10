package es.florida.eva2;



public class Principal {

	public static void main(String[] args) {
		Model model = new Model();
		Vista vista = new Vista();
		Controlador controlador = new Controlador(model,vista);
	}

}
