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
		textArea.setBounds(170, 5, 312, 204);
		panel.add(textArea);
		textArea.setEditable(false);
		
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
		
			/**
			 *
			 *Aquesta funcio agafa el archius y els retorna per la pantalla
			 */
			public void actionPerformed(ActionEvent e) {
			String textSearch = textField.getText();

				File directorio = new File(textSearch);
				String[] listaArchivos=null;
				String list="";
				Integer tama=0;
					 listaArchivos = directorio.list(new FiltroExtension(".txt"));
					 for (int e1 = 0; e1 < listaArchivos.length; e1++) {
						 tama=listaArchivos[e1].length()/1024;
						 list+=listaArchivos[e1]+" "+tama+"\n";
							
						}
					 textArea.setText(list);
				
				
//				JOptionPane.showMessageDialog(null, "", "Archivos ", JOptionPane.INFORMATION_MESSAGE);
				
		
			}
		});
	}
}
