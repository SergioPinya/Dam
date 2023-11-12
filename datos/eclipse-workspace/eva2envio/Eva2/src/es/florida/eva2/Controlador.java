package es.florida.eva2;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JOptionPane;
import javax.swing.SwingUtilities;


public class Controlador {
	private Model model;
	private Vista vista;
	private ActionListener btnCon, btnSelect, btnInsert, btnDelete, btnUpdate;

	Controlador(Model model, Model model1, Model model2, Vista vista) {
		this.model = model;
		this.vista = vista;

		control();
	}

	public void control() {

		btnCon = new ActionListener() {

			
			@SuppressWarnings("deprecation")
			@Override
			/**
			 * filtra si es va usar administrador o cliente
			 */
			public void actionPerformed(ActionEvent e) {

				if (vista.getTextUser().getText().equals("administrador1")
						&& vista.getTextPass().getText().equals(model.getPassword1())) {
					Interfaz interfaz = new Interfaz();
					interfaz.setVisible(true);
					SwingUtilities.invokeLater(() -> {
						Model2 model2 = new Model2();
						
					});

					vista.dispose();

				} else if (vista.getTextUser().getText().equals("cliente1")
						&& vista.getTextPass().getText().equals(model.getPassword())) {
					Interfaz interfaz = new Interfaz();
					interfaz.setVisible(true);
					SwingUtilities.invokeLater(() -> {
						Model1 model1 = new Model1();
						
						btnSelect = new ActionListener() {

							@Override
							/**
							 * genera una tabla amb les valors de la taula requerida
							 * @param e
							 */
							public void actionPerformed(ActionEvent e) {
							if(interfaz.getSelectText().getText().toLowerCase().equals("authors")) {
								String authors = model1.getAuthors();
								interfaz.getResultText().setText(authors);
								
							}else if (interfaz.getSelectText().getText().toLowerCase().equals("users")){
								String users = model1.getUsers();
								interfaz.getResultText().setText(users);
							}else if (interfaz.getSelectText().getText().toLowerCase().equals("titles")) {
								String titles = model1.getTitles();
								interfaz.getResultText().setText(titles);
							}else if (interfaz.getSelectText().getText().toLowerCase().equals("editorials")) {
								String editorials = model1.getEditorials();
								interfaz.getResultText().setText(editorials);
							}else {
								JOptionPane.showMessageDialog(null, "No existis equesta tabla o lo has escrit mal", "Missing ",
										JOptionPane.WARNING_MESSAGE);
							}
								
							}
							
						};
						interfaz.getBtnSelect().addActionListener(btnSelect);
						
						
						btnInsert = new ActionListener() {

							@Override
							public void actionPerformed(ActionEvent e) {
								JOptionPane.showMessageDialog(null, "No tens permisos per fer aso", "Priviletgis ",
										JOptionPane.ERROR_MESSAGE);

							}

						};
						interfaz.getBtnInsert().addActionListener(btnInsert);

						btnUpdate = new ActionListener() {

							@Override
							public void actionPerformed(ActionEvent e) {
								JOptionPane.showMessageDialog(null, "No tens permisos per fer aso", "Priviletgis ",
										JOptionPane.ERROR_MESSAGE);

							}

						};
						interfaz.getBtnUpdate().addActionListener(btnUpdate);

						btnDelete = new ActionListener() {

							@Override
							public void actionPerformed(ActionEvent e) {
								JOptionPane.showMessageDialog(null, "No tens permisos per fer aso", "Priviletgis ",
										JOptionPane.ERROR_MESSAGE);

							}

						};
						interfaz.getBtnDelete().addActionListener(btnDelete);

					});

					vista.dispose();
				} else {
					vista.getVerification().setText("incorrect");

				}
			}

		};
		vista.getBtnCon().addActionListener(btnCon);

	}
}
