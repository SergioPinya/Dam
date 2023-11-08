package mvc;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class Controlador {

	private Modelo modelo;
	private Vista vista;
	private ActionListener actionListener_boto1,actionListener_boto2;
	
	Controlador(Modelo modelo,Vista vista){
		this.modelo = modelo;
		this.vista = vista;
		control();
	}
	
	public void control() {
		//el metodo de ActionListener se puede generar automaticamente
		actionListener_boto1 = new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {
				String missatge = modelo.getMissatge1();
				vista.getTextField_missatge().setText(missatge);
				
			}
		};
		vista.getBtn_missatge1().addActionListener(actionListener_boto1);
		
		
		actionListener_boto2 = new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {
				String missatge = modelo.getMissatge2();
				vista.getTextField_missatge().setText(missatge);
				
			}
		};
		vista.getBtn_missatge2().addActionListener(actionListener_boto2);
	}
	
}
