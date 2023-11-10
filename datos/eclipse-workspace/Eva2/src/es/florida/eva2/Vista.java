package es.florida.eva2;

import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import javax.swing.JTextField;
import javax.swing.JButton;
import javax.swing.JLabel;

public class Vista extends JFrame {

	private static final long serialVersionUID = 1L;
	private JPanel contentPane;
	private JTextField textField;
	private JTextField textField_1;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					Vista frame = new Vista();
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	/**
	 * Create the frame.
	 */
	public Vista() {
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 450, 300);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));

		setContentPane(contentPane);
		contentPane.setLayout(null);
		
		textField = new JTextField();
		textField.setBounds(69, 80, 304, 39);
		contentPane.add(textField);
		textField.setColumns(10);
		
		JButton btnNewButton = new JButton("Conectar");
		btnNewButton.setBounds(113, 207, 191, 39);
		contentPane.add(btnNewButton);
		
		textField_1 = new JTextField();
		textField_1.setBounds(69, 158, 304, 39);
		contentPane.add(textField_1);
		textField_1.setColumns(10);
		
		JLabel lblNewLabel = new JLabel("Usuari");
		lblNewLabel.setBounds(69, 57, 45, 13);
		contentPane.add(lblNewLabel);
		
		JLabel lblContrasenya = new JLabel("Contrasenya");
		lblContrasenya.setBounds(69, 128, 76, 30);
		contentPane.add(lblContrasenya);
	}
}
