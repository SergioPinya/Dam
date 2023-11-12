package es.florida.eva2;

import java.io.File;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

/**
 * Gestiona els models
 */
public class Model {
	
	private static Connection con;
/**
 * Codifica la contrasenya a md5
 * @param s 
 * @return la contrasenya codificada a md5
 */
	public String md5(String s) {
		try {
			// Create MD5 Hash
			MessageDigest digest = java.security.MessageDigest.getInstance("MD5");
			digest.update(s.getBytes());
			byte messageDigest[] = digest.digest();

			// Create Hex String
			StringBuffer hexString = new StringBuffer();
			for (int i = 0; i < messageDigest.length; i++)
				hexString.append(String.format("%02X", messageDigest[i]));

			return hexString.toString();
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		}
		return "";
	}

	private String password = md5("cliente1");
/**
 * recoge la contrasenya y la envia a controlador
 * @return D5A8D8C7AB0514E2B8A2F98769281585
 */
	public String getPassword() {
		return password;
	}

	private String password1 = md5("administrador1");
	/**
	 * recoge la contrasenya y la envia a controlador
	 * @return 75959E9480B9338F252D64C4C0E75AA8
	 */
	public String getPassword1() {
		return password1;
	}

	private String missatgecon;
/**
 * Model se encarga de fer la conexion amb el ficher xml cliente
 */
	Model() {
		try {
			DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
			DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
			String url = null;
			String usuari = null;
			String contrasenya = null;
			Document document = dBuilder.parse(new File("src/es/florida/eva2/conCliente.xml"));
			NodeList nodeList = document.getElementsByTagName("conexio");
			for (int i = 0; i < nodeList.getLength(); i++) {
				Node node = nodeList.item(i);
				if (node.getNodeType() == Node.ELEMENT_NODE) {
					Element eElement = (Element) node;
					usuari = eElement.getElementsByTagName("usuari").item(0).getTextContent();
					contrasenya = eElement.getElementsByTagName("contrasenya").item(0).getTextContent();
					url = eElement.getElementsByTagName("url").item(0).getTextContent();
				}
			}

			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection(url, usuari, contrasenya);

			this.missatgecon = "conexion";

		} catch (Exception i) {
			this.missatgecon = "Error";
			System.out.println(i);
		}
	}

	public String getMissatgecon() {
		return missatgecon;
	}
/**
 * 
 * @return con
 */
	public static Connection getCon() {
		return con;
	}

}
/**
 * Model 1 hace una peticion a la base de dates y la guarda en author
 */
class Model1 {
	public String authors;
	public String users;
	public String titles;
	public String editorials;

	Model1() {

		try (Connection con = Model.getCon();
				Statement stmt = con.createStatement();
				ResultSet rs = stmt.executeQuery("SELECT * FROM authors")) {
			String lista = "";
			while (rs.next()) {
				lista += (rs.getString(1) + "           " + rs.getString(2) + "           " + rs.getString(3)
						+ "           " + rs.getString(4) + "\n");
			}
			this.authors = "id" + "           " + "name" + "           " + "yeard" + "           " + "description"
					+ "\n" + lista;
		} catch (Exception e) {
			e.printStackTrace();
		}
	

	}

	public String getUsers() {
		return users;
	}

	public String getTitles() {
		return titles;
	}

	public String getEditorials() {
		return editorials;
	}

	public String getAuthors() {
		return authors;
	}

}

class Model2 {
	private String missatgecon;

	Model2() {

		try {

			DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
			DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
			String url = null;
			String usuari = null;
			String contrasenya = null;
			Document document = dBuilder.parse(new File("src/es/florida/eva2/conAdmin.xml"));
			NodeList nodeList = document.getElementsByTagName("conexio");
			for (int i = 0; i < nodeList.getLength(); i++) {
				Node node = nodeList.item(i);
				if (node.getNodeType() == Node.ELEMENT_NODE) {
					Element eElement = (Element) node;
					usuari = eElement.getElementsByTagName("usuari").item(0).getTextContent();
					contrasenya = eElement.getElementsByTagName("contrasenya").item(0).getTextContent();
					url = eElement.getElementsByTagName("url").item(0).getTextContent();

				}
			}

			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = DriverManager.getConnection(url, usuari, contrasenya);
			this.missatgecon = "conexion";
			con.close();

		} catch (Exception i) {
			this.missatgecon = "usuari Errone";
			System.out.println(i);
		}

	}

	public String getMissatgecon() {
		return missatgecon;
	}

}
