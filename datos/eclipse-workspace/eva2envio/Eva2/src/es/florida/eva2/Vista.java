package es.florida.eva2;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JPasswordField;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;
import javax.swing.border.Border;
import javax.swing.border.EmptyBorder;
import javax.swing.JTextField;
import javax.swing.BorderFactory;
import javax.swing.JButton;
import javax.swing.JLabel;
import java.awt.Font;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import javax.swing.UIManager;
/**
 * Se encarga de generar les vistes
 */
public class Vista extends JFrame {

	private static final long serialVersionUID = 1L;
	private JPanel contentPane;
	private JTextField textUser;
	private JPasswordField textPass;
	private JButton btnCon;
	private JTextField verification;

/**
 * Genera vista
 */
	public Vista() {
		//Al usar varias ventanas la opcion correcta es usar un DISPOSE_ON_CLOSE
		setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);
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
		
		textPass = new JPasswordField();
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
		Border  empty;
		empty = BorderFactory.createEmptyBorder();
		
		verification = new JTextField();
		verification.setEditable(false);
		verification.setBackground(UIManager.getColor("Button.background"));
		verification.setBorder(empty);
		verification.setBounds(69, 17, 96, 19);
		contentPane.add(verification);
		verification.setColumns(10);
		this.setVisible(true);
	}
	public JButton getBtnCon() {
		return btnCon;
	}
	public JTextField getTextUser() {
		return textUser;
	}
	public JPasswordField getTextPass() {
		return textPass;
	}
	public JTextField getVerification() {
		return verification;
	}
}
/**
 * Genera interfaz
 */
class Interfaz extends JFrame {

	private static final long serialVersionUID = 1L;
	private JPanel contentPane;
	private JTextField insertText, updateText,deleteText,selectText;
	private JButton btnSelect, btnInsert,btnUpdate, btnDelete;
	private JTextArea resultText;
	
	
	
	public Interfaz() {
	
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 934, 517);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));

		setContentPane(contentPane);
		contentPane.setLayout(null);
		
	
		
		insertText = new JTextField();
		insertText.setColumns(10);
		insertText.setBounds(79, 263, 612, 43);
		contentPane.add(insertText);
		
		updateText = new JTextField();
		updateText.setColumns(10);
		updateText.setBounds(79, 345, 612, 43);
		contentPane.add(updateText);
		
		deleteText = new JTextField();
		deleteText.setColumns(10);
		deleteText.setBounds(79, 427, 612, 43);
		contentPane.add(deleteText);
		
		 btnSelect = new JButton("Execute");
		btnSelect.setFont(new Font("Verdana", Font.PLAIN, 20));
		btnSelect.setBounds(722, 18, 138, 42);
		contentPane.add(btnSelect);
		
		 btnInsert = new JButton("Execute");
		btnInsert.setFont(new Font("Verdana", Font.PLAIN, 20));
		btnInsert.setBounds(722, 263, 126, 43);
		contentPane.add(btnInsert);
		
		 btnUpdate = new JButton("Execute");
		btnUpdate.setFont(new Font("Verdana", Font.PLAIN, 20));
		btnUpdate.setBounds(722, 345, 126, 43);
		contentPane.add(btnUpdate);
		
		btnDelete = new JButton("Execute");
		btnDelete.setFont(new Font("Verdana", Font.PLAIN, 20));
		btnDelete.setBounds(722, 427, 126, 43);
		contentPane.add(btnDelete);
		
		JLabel lblNewLabel = new JLabel("select");
		lblNewLabel.setFont(new Font("Verdana", Font.PLAIN, 20));
		lblNewLabel.setBounds(10, 25, 126, 19);
		contentPane.add(lblNewLabel);
		
		JLabel lblInsert = new JLabel("Insert");
		lblInsert.setFont(new Font("Verdana", Font.PLAIN, 20));
		lblInsert.setBounds(79, 234, 126, 19);
		contentPane.add(lblInsert);
		
		JLabel lblNewLabel_1_1 = new JLabel("Update");
		lblNewLabel_1_1.setFont(new Font("Verdana", Font.PLAIN, 20));
		lblNewLabel_1_1.setBounds(79, 316, 126, 19);
		contentPane.add(lblNewLabel_1_1);
		
		JLabel lblNewLabel_1_2 = new JLabel("Delete");
		lblNewLabel_1_2.setFont(new Font("Verdana", Font.PLAIN, 20));
		lblNewLabel_1_2.setBounds(79, 398, 126, 19);
		contentPane.add(lblNewLabel_1_2);
		
		JScrollPane scrollPane = new JScrollPane();
		scrollPane.setBounds(79, 66, 612, 150);
		contentPane.add(scrollPane);
		
		 resultText = new JTextArea();
		resultText.setColumns(4);
		scrollPane.setViewportView(resultText);
		resultText.setEditable(false);
	
		
		selectText = new JTextField();
		selectText.setColumns(10);
		selectText.setBounds(79, 17, 612, 43);
		contentPane.add(selectText);
		
		this.setVisible(true);
	}
	
	public JTextField getUpdateText() {
		return updateText;
	}

	public JTextField getDeleteText() {
		return deleteText;
	}

	public JTextField getSelectText() {
		return selectText;
	}

	public JTextField getInsertText() {
		return insertText;
	}

	public JButton getBtnSelect() {
		return btnSelect;
	}

	public JButton getBtnUpdate() {
		return btnUpdate;
	}

	public JButton getBtnDelete() {
		return btnDelete;
	}

	public JButton getBtnInsert() {
		return btnInsert;
	}

	public JTextArea getResultText() {
		return resultText;
	}
	
}

