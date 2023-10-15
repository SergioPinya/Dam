package es.florida.swig;


import java.io.File;
import java.sql.Date;
import java.text.SimpleDateFormat;
import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import javax.swing.JTextArea;
import javax.swing.JTextField;
import javax.swing.JButton;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

import javax.swing.SwingConstants;
import java.awt.Color;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;


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
	 *Aquesta funcio agafa el archius y els retorna per la pantalla donde despres se va poder filtrar am els botons
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
			/**
			 *Este boton ordena alfabeticamente
			 */
		
			public void actionPerformed(ActionEvent e) {
				String textSearch = textField.getText();

				File directorio = new File(textSearch);
				String[] listaArchivos=null;
				String list="";
				
		
					 listaArchivos = directorio.list(new FiltroExtension(".txt"));
					 for (int e1 = 0; e1 < listaArchivos.length; e1++) {
						   File file = new File(directorio, listaArchivos[e1]);
						  
						 long size = file.length(); 
						 long fecha = file.lastModified();
							
						 Date f = new Date(fecha);
						 SimpleDateFormat fechahora = new SimpleDateFormat("HH:mm:ss dd/MM/yyyy"); 

						 String fecharesul = fechahora.format(f);
	
					        list += listaArchivos[e1] + "         " + size + "         " + fecharesul + "         " + "\n";
					     
						}
					 textArea.setText( "nombre    bytes      Última modificación"+"         "+"\n"+list);
			
				
			}
		});
		btnNewButton.setBounds(170, 7, 51, 18);
		panel.add(btnNewButton);
		
		JButton btnNewButton_1 = new JButton("^");
		btnNewButton_1.addActionListener(new ActionListener() {
			/**
			 * Este boton ordena los archivos de mayor a menor
			 */
			public void actionPerformed(ActionEvent e) {

				String textSearch = textArea.getText();
				String U = "";
				//array bidimensional
				String[][] res;
					//separar para posicion 1
				String[] aux = textSearch.split("\n");

				res = new String[aux.length][];
					//separar  para posicion 2
				//bi=bidimensional
				for (int bi = 0; bi < aux.length; bi++) {
				    res[bi] = aux[bi].split("         ");
				}

				// Ordena res por la posicion1
				boolean bulo;
				do {
					bulo = false;
//					p=posicio
				    for (int p = 1; p < res.length - 1; p++) {
				        if (Integer.parseInt(res[p][1]) < Integer.parseInt(res[p +1][1])) {
				            String[] temp = res[p];
				            res[p] = res[p + 1];
				            res[p + 1] = temp;
				            bulo = true;
				        }
				    }
				} while (bulo);

				//Dice resultado
				for (int i = 0; i < res.length; i++) {
					
				    for (int j = 0; j < res[i].length; j++) {
				     U+=(res[i][j] + "         ");
				    }
				   U+=("\n");
				}
				textArea.setText(U);

			}
			
				// JOptionPane.showMessageDialog(null, "se han encontrado "+u, "Archivos ", JOptionPane.INFORMATION_MESSAGE);
			
		});
		btnNewButton_1.setBounds(239, 6, 46, 19);
		panel.add(btnNewButton_1);
		
		JButton btnNewButton_1_1 = new JButton("^");
		btnNewButton_1_1.addActionListener(new ActionListener() {
			/**
			 * @param e este codigo rodena al archivo que a sido modificado més recient
			 */
			public void actionPerformed(ActionEvent e) {
	
				String textSearch = textArea.getText();
				String U = "";
				String[][] res;

				String[] aux = textSearch.split("\n");

				res = new String[aux.length][];

				for (int bi = 0; bi < aux.length; bi++) {
				    res[bi] = aux[bi].split("         ");
				}

				
				boolean bulo;
				do {
					bulo = false;

				    for (int p = 1; p < res.length - 1; p++) {
				        if (res[p][2].compareTo(res[p + 1][2]) > 0)  {
				            String[] temp = res[p];
				            res[p] = res[p + 1];
				            res[p + 1] = temp;
				            bulo = true;
				        }
				    }
				} while (bulo);

			
				for (int i = 0; i < res.length; i++) {
					
				    for (int j = 0; j < res[i].length; j++) {
				     U+=(res[i][j] + "         ");
				    }
				   U+=("\n");
				}
				textArea.setText(U);

			}
		});
		btnNewButton_1_1.setBounds(312, 6, 48, 19);
		panel.add(btnNewButton_1_1);
		
		JButton btnV_1 = new JButton("V");
		btnV_1.addActionListener(new ActionListener() {
			/**
			 * @param e aquest buto te filtra les numeres de menor a manyor
			 */
			public void actionPerformed(ActionEvent e) {
				String textSearch = textArea.getText();
				String U = "";
				String[][] res;

				String[] aux = textSearch.split("\n");

				res = new String[aux.length][];

				for (int bi = 0; bi < aux.length; bi++) {
				    res[bi] = aux[bi].split("         ");
				}

				
				boolean bulo;
				do {
					bulo = false;
				    for (int p = 1; p < res.length - 1; p++) {
				        if (Integer.parseInt(res[p][1]) > Integer.parseInt(res[p + 1][1])) {
				            String[] temp = res[p];
				            res[p] = res[p + 1];
				            res[p + 1] = temp;
				            bulo = true;
				        }
				    }
				} while (bulo);

			
				for (int i = 0; i < res.length; i++) {
					
				    for (int j = 0; j < res[i].length; j++) {
				     U+=(res[i][j] + "         ");
				    }
				   U+=("\n");
				}
				textArea.setText(U);

			}
		});
		btnV_1.setBounds(238, 25, 47, 13);
		panel.add(btnV_1);
		
		JButton btnV_2 = new JButton("V");
		btnV_2.addActionListener(new ActionListener() {
			/**
			 * aquests buto filtra els archius als mes antics
			 */
			public void actionPerformed(ActionEvent e) {
				String textSearch = textArea.getText();
				String U = "";
				String[][] res;

				String[] aux = textSearch.split("\n");

				res = new String[aux.length][];

				for (int bi = 0; bi < aux.length; bi++) {
				    res[bi] = aux[bi].split("         ");
				}

				
				boolean bulo;
				do {
					bulo = false;
				    for (int p = 1; p < res.length - 1; p++) {
				        if (res[p][2].compareTo(res[p + 1][2]) < 0)  {
				            String[] temp = res[p];
				            res[p] = res[p + 1];
				            res[p + 1] = temp;
				            bulo = true;
				        }
				    }
				} while (bulo);

			
				for (int i = 0; i < res.length; i++) {
					
				    for (int j = 0; j < res[i].length; j++) {
				     U+=(res[i][j] + "         ");
				    }
				   U+=("\n");
				}
				textArea.setText(U);

			}
		});
		btnV_2.setBounds(312, 22, 48, 14);
		panel.add(btnV_2);
		
		JButton btnV = new JButton("V");
		btnV.addActionListener(new ActionListener() {
			/**
			 *aquest buto te filtra els archius al orde alfabetic invertit
			 */
			public void actionPerformed(ActionEvent e) {
				
				String textSearch = textField.getText();
				File directorio = new File(textSearch);
				String[] listaArchivos = directorio.list(new FiltroExtension(".txt"));
//				
				List<String> listo = new ArrayList<>();

				for (int e1 = 0; e1 < listaArchivos.length; e1++) {
				    File file = new File(directorio, listaArchivos[e1]);

				    long size = file.length();
				    long fecha = file.lastModified();

				    Date f = new Date(fecha);
				    SimpleDateFormat fechahora = new SimpleDateFormat("HH:mm:ss dd/MM/yyyy");

				    String fecharesul = fechahora.format(f);
				    
				    String list = listaArchivos[e1] + "         " + size + "         " + fecharesul;
				    
				    listo.add(list);
				}

				Collections.reverse(listo);

				String result = "nombre    bytes      Última modificación" + "         " + "\n" + String.join("\n", listo);
				textArea.setText(result);

			}
		});
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
		
			
			/**
			 *aquest buto troba tots els achius filtrats
			 */
			public void actionPerformed(ActionEvent e) {
			String textSearch = textField.getText();

				File directorio = new File(textSearch);
				String[] listaArchivos=null;
				String list="";
				Integer cunat=0;
		
					 listaArchivos = directorio.list(new FiltroExtension(".txt"));
					 for (int e1 = 0; e1 < listaArchivos.length; e1++) {
						   File file = new File(directorio, listaArchivos[e1]);
						  
						 long size = file.length(); 
						 long fecha = file.lastModified();
							
						 Date f = new Date(fecha);
						 SimpleDateFormat fechahora = new SimpleDateFormat("HH:mm:ss dd/MM/yyyy"); 

						 String fecharesul = fechahora.format(f);
	
					        list += listaArchivos[e1] + "         " + size + "         " + fecharesul + "         " + "\n";
					        cunat=e1+1;
						}
					 JOptionPane.showMessageDialog(null, "se han encontrado "+cunat, "Archivos ", JOptionPane.INFORMATION_MESSAGE);
					 textArea.setText( "nombre    bytes      Última modificación"+"         "+"\n"+list);
							
		
			}
		});
	}
}
