package es.florida.eva2;

import java.io.File;
import java.sql.Connection;
import java.sql.DriverManager;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

public class Model {
	private String missatgecon;

	Model() {
		try {
			DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
			DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
			String url=null;
			String usuari=null;
			String contrasenya=null;
			Document document = dBuilder.parse(new File("src/es/florida/eva2/conCliente.xml"));
			
			NodeList nodeList = document.getElementsByTagName("conexio");
			for (int i = 0; i < nodeList.getLength(); i++) {
				Node node = nodeList.item(i);
		

				if (node.getNodeType() == Node.ELEMENT_NODE) {

					Element eElement = (Element) node;
					usuari=eElement.getElementsByTagName("usuari").item(0).getTextContent();
					contrasenya=eElement.getElementsByTagName("contrasenya").item(0).getTextContent();
					url=eElement.getElementsByTagName("url").item(0).getTextContent();
					
				}
			}

			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = DriverManager.getConnection(url, usuari, contrasenya);
			this.missatgecon = "conexion";
			con.close();
		} catch (Exception i) {
			this.missatgecon = "Error";
			System.out.println(i);
		}

	}

	public String getMissatgecon() {
		return missatgecon;
	}

}
