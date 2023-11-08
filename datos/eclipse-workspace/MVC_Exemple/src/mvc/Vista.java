package mvc;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import javax.swing.JButton;
import javax.swing.JTextField;

public class Vista extends JFrame {

	private static final long serialVersionUID = 1L;
	private JPanel contentPane;
	// El JButton no aparece declarado al poner un boton asi que hay que declararlo aqui
	private JButton btn_missatge1, btn_missatge2;
	private JTextField textField_missatge;

	/**
	 * Launch the application.
	 */
//	public static void main(String[] args) {
//		EventQueue.invokeLater(new Runnable() {
//			public void run() {
//				try {
//					Vista frame = new Vista();
//					frame.setVisible(true);
//				} catch (Exception e) {
//					e.printStackTrace();
//				}
//			}
//		});
//	}

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
		// se le quira el JButton ya que lo estamos declarando arriba para que sea el miso boton que el declarado abajo
		btn_missatge1 = new JButton("Misatge 1");
		btn_missatge1.setBounds(140, 54, 156, 41);
		contentPane.add(btn_missatge1);
		
		btn_missatge2 = new JButton("Misatge 2");
		btn_missatge2.setBounds(140, 105, 156, 40);
		contentPane.add(btn_missatge2);
		
		textField_missatge = new JTextField();
		textField_missatge.setBounds(118, 176, 215, 51);
		contentPane.add(textField_missatge);
		textField_missatge.setColumns(10);
		this.setVisible(true);
	}
	
	//ponemos lo ponemos con una clase tipo get para que sea visible dede la clase controlador
	public JButton getBtn_missatge1() {
		return btn_missatge1;
	}
	public JButton getBtn_missatge2() {
		return btn_missatge2;
	}
	public JTextField getTextField_missatge() {
		return textField_missatge;
	}

}
