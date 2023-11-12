package es.florida.eva2;

import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.JPanel;
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
import javax.swing.JPasswordField;
import javax.swing.JTextArea;
import javax.swing.JScrollPane;

public class VistaTest extends JFrame {


	private static final long serialVersionUID = 1L;
	private JPanel contentPane;
	private JTextField insertText;
	private JTextField updateText;
	private JTextField deleteText;
	private JTextField selectText;
	private JButton btnDelete;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					VistaTest frame = new VistaTest();
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
	public VistaTest() {
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 934, 517);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));

		setContentPane(contentPane);
		contentPane.setLayout(null);
		Border  empty;
		empty = BorderFactory.createEmptyBorder();
		
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
		
		JButton btnSelect = new JButton("Execute");
		btnSelect.setFont(new Font("Verdana", Font.PLAIN, 20));
		btnSelect.setBounds(722, 18, 138, 42);
		contentPane.add(btnSelect);
		
		JButton btnInsert = new JButton("Execute");
		btnInsert.setFont(new Font("Verdana", Font.PLAIN, 20));
		btnInsert.setBounds(722, 263, 126, 43);
		contentPane.add(btnInsert);
		
		JButton btnUpdate = new JButton("Execute");
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
		
		JTextArea resultText = new JTextArea();
		resultText.setColumns(4);
		scrollPane.setViewportView(resultText);
	
		resultText.setEditable(true);
		
		selectText = new JTextField();
		selectText.setColumns(10);
		selectText.setBounds(79, 17, 612, 43);
		contentPane.add(selectText);
		this.setVisible(true);
	}
}
