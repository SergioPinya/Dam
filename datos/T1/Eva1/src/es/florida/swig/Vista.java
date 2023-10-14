package es.florida.swig;


import java.io.File;
import java.io.FilenameFilter;
import java.awt.BorderLayout;
import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import javax.swing.JTextArea;
import javax.swing.JTextField;
import javax.swing.JDesktopPane;
import javax.swing.JButton;
import java.awt.event.ActionListener;
import java.io.File;
import java.awt.event.ActionEvent;
import java.awt.TextField;
import javax.swing.JTextPane;
import javax.swing.DropMode;
import javax.swing.SwingConstants;
import java.awt.Color;


public class Vista extends JFrame {

	private static final long serialVersionUID = 1L;
	private JPanel contentPane;
	private JTextField textField;
	private JTextField txtO;

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
	 *
	 *Aquesta funcio agafa el archius y els retorna per la pantalla
*/
	public Vista() {
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 600, 393);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));

		setContentPane(contentPane);
		contentPane.setLayout(null);
		
		JPanel panel = new JPanel();
		panel.setBounds(53, 105, 492, 219);
		contentPane.add(panel);
		panel.setLayout(null);
		
		JTextArea textArea = new JTextArea();
		textArea.setBounds(170, 50, 312, 159);
		panel.add(textArea);
		textArea.setEditable(false);
		
		JButton btnNewButton = new JButton("^");
		btnNewButton.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				String textSearch =  textArea.getText();
				JOptionPane.showMessageDialog(null, textSearch, "Archivos ", JOptionPane.INFORMATION_MESSAGE);
			}
		});
		btnNewButton.setBounds(170, 7, 51, 18);
		panel.add(btnNewButton);
		
		JButton btnNewButton_1 = new JButton("^");
		btnNewButton_1.setBounds(239, 6, 46, 19);
		panel.add(btnNewButton_1);
		
		JButton btnNewButton_1_1 = new JButton("^");
		btnNewButton_1_1.setBounds(312, 6, 48, 19);
		panel.add(btnNewButton_1_1);
		
		JButton btnV_1 = new JButton("V");
		btnV_1.setBounds(238, 25, 47, 13);
		panel.add(btnV_1);
		
		JButton btnV_2 = new JButton("V");
		btnV_2.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				
			}
		});
		btnV_2.setBounds(312, 22, 48, 14);
		panel.add(btnV_2);
		
		JButton btnV = new JButton("V");
		btnV.setBounds(170, 25, 51, 15);
		panel.add(btnV);
		
		JPanel panel_1 = new JPanel();
		panel_1.setBounds(53, 19, 492, 65);
		contentPane.add(panel_1);
		panel_1.setLayout(null);
		
		textField = new JTextField();
		textField.setBounds(10, 36, 130, 19);
		panel_1.add(textField);
		textField.setColumns(10);
		
		JButton search = new JButton("search");
		search.setBounds(383, 23, 99, 21);
		panel_1.add(search);
		
		txtO = new JTextField();
		txtO.setForeground(new Color(0, 0, 0));
		txtO.setEditable(false);
		txtO.setHorizontalAlignment(SwingConstants.LEFT);
		txtO.setText("Pon la lacalizacion de la carpeta");
		txtO.setBounds(10, 7, 171, 19);
		panel_1.add(txtO);
		txtO.setColumns(10);
		search.addActionListener(new ActionListener() {
		
			
			public void actionPerformed(ActionEvent e) {
			String textSearch = textField.getText();

				File directorio = new File(textSearch);
				String[] listaArchivos=null;
				String list="";
			
		
					 listaArchivos = directorio.list(new FiltroExtension(".txt"));
					 for (int e1 = 0; e1 < listaArchivos.length; e1++) {
						   File file = new File(directorio, listaArchivos[e1]);
						  
						 long size = file.length(); 
						 
					        list += listaArchivos[e1] + "    " + size + "         " + file.lastModified() + " " + "\n";
						}
					
					 textArea.setText( "nom     "+" bytes  "+"   "+" Última modificación "+"\n"+list);
				
				
//				JOptionPane.showMessageDialog(null, "", "Archivos ", JOptionPane.INFORMATION_MESSAGE);
				
		
			}
		});
	}
}
