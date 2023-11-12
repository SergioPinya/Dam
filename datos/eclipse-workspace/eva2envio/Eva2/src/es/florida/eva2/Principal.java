package es.florida.eva2;

public class Principal {
/**
 * Conte variables declarades per al constructor
 * @param args
 */
	public static void main(String[] args) {
		Model model = new Model();
		Model model1 = new Model();
		Model model2 = new Model();
		Vista vista = new Vista();
		
		Controlador controlador = new Controlador(model, model1, model2, vista);
		//Usuarios y contraseñas
		// administrador1=75959E9480B9338F252D64C4C0E75AA8
		// cliente1=D5A8D8C7AB0514E2B8A2F98769281585
	}
}
