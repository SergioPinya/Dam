package mvc;

public class Controlador {


		private Vista vista;
		private Model model;
		//El constructor rep instancia de la vista i del model
		public Controlador (Vista vista, Model model){
		this.vista = vista;
		this.model = model;
		
		}

}
