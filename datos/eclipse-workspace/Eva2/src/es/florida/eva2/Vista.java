package es.florida.eva2;

import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import javax.swing.JTextField;
import javax.swing.JButton;
import javax.swing.JLabel;
import java.awt.Font;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

public class Vista extends JFrame {

	private static final long serialVersionUID = 1L;
	private JPanel contentPane;
	private JTextField textUser;
	private JTextField textPass;
	private JButton btnCon;

	/**
	 * Launch the application.
	 */
	
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
		
		textUser = new JTextField();
		textUser.setFont(new Font("Verdana", Font.PLAIN, 18));
		textUser.setBounds(69, 80, 304, 39);
		contentPane.add(textUser);
		textUser.setColumns(10);
		
		btnCon = new JButton("Conectar");
		btnCon.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
			}
		});
		btnCon.setFont(new Font("Verdana", Font.PLAIN, 20));
		btnCon.setBounds(113, 207, 191, 39);
		contentPane.add(btnCon);
		
		textPass = new JTextField();
		textPass.setFont(new Font("Verdana", Font.PLAIN, 18));
		textPass.setBounds(69, 158, 304, 39);
		contentPane.add(textPass);
		textPass.setColumns(10);
		
		JLabel lblNewLabel = new JLabel("Usuari");
		lblNewLabel.setFont(new Font("Verdana", Font.PLAIN, 20));
		lblNewLabel.setBounds(69, 46, 255, 30);
		contentPane.add(lblNewLabel);
		
		JLabel lblContrasenya = new JLabel("Contrasenya");
		lblContrasenya.setFont(new Font("Verdana", Font.PLAIN, 20));
		lblContrasenya.setBounds(69, 128, 153, 30);
		contentPane.add(lblContrasenya);
		this.setVisible(true);
	}
}
