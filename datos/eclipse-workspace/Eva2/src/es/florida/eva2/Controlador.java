package es.florida.eva2;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class Controlador {
	private Model model;
	private Vista vista;
	private ActionListener btnCon;
	
	Controlador(Model model,Vista vista){
		this.model = model;
		this.vista = vista;
		control();
	}
	public void control() {
		
		btnCon = new  ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {
				String missatge = model.getMissatgecon();
				vista.getVerification().setText(missatge);
				
			}
		};
		vista.getBtnCon().addActionListener(btnCon);
		
	}
}
