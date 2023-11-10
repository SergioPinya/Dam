package es.florida.xml;

import org.w3c.dom.*;
import javax.xml.parsers.*;
import javax.xml.transform.OutputKeys;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;

import java.io.*;

public class EjemploXml {
	// lectura de un fichero XML
	public static void main(String[] args) {
		try {
			DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
			DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
			Document document = dBuilder.parse(new File("src/es/florida/xml/cançons.xml"));

			Element raiz = document.getDocumentElement();
			System.out.println("Contingut XML " + raiz.getNodeName() + ":");

			// Devuelbe un arrai con todos los elementos dentro de canço
			NodeList nodeList = document.getElementsByTagName("canço");
			// recorre el arrai
			for (int i = 0; i < nodeList.getLength(); i++) {
				Node node = nodeList.item(i);
				System.out.println("");
				// comprueba que node no este vacio
				if (node.getNodeType() == Node.ELEMENT_NODE) {
					//
					Element eElement = (Element) node;
					// getAttribute te devuelbe la id y getElementsByTagName te devuelve lo que hay
					// entre los elementos
					System.out.println("ID canço : " + eElement.getAttribute("id"));

					System.out.println("Titol : " + eElement.getElementsByTagName("titol").item(0).getTextContent());
					System.out.println("Artista : " + eElement.getElementsByTagName("artista").item(0).getTextContent());
					System.out.println("Any : " + eElement.getElementsByTagName("any").item(0).getTextContent());
					System.out.println("Format : " + eElement.getElementsByTagName("format").item(0).getTextContent());
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

//escritura de un fichero XML

//Este codigo esta comentado ya que no posse una clase y da error pero el codigo funciona

//	public static void writeXmlFile(ListaCanciones lista) {
//		try {
//			DocumentBuilderFactory dFact = DocumentBuilderFactory.newInstance();
//			DocumentBuilder build = dFact.newDocumentBuilder();
//			Document doc = build.newDocument();
//			Element raiz = doc.createElement("cançons");
//			doc.appendChild(raiz);
//			for (Canci	on can : lista.getListaCanciones()) {
//				Element cancion = doc.createElement("canço");
//				String id = String.valueOf(can.getId());
//				cancion.setAttribute("id", id);
//				raiz.appendChild(cancion);
//				Element titulo = doc.createElement("titol");
//				titulo.appendChild(doc.createTextNode(String.valueOf(can.getTitulo())));
//				cancion.appendChild(titulo);
//				Element artista = doc.createElement("artista");
//				artista.appendChild(doc.createTextNode(String.valueOf(can.getArtista())));
//				cancion.appendChild(artista);
//				Element anyo = doc.createElement("any");
//				anyo.appendChild(doc.createTextNode(String.valueOf(can.getAnyo())));
//				cancion.appendChild(anyo);
//				Element formato = doc.createElement("format");
//				formato.appendChild(doc.createTextNode(String.valueOf(can.getFormato())));
//				cancion.appendChild(formato);
//			}
//			TransformerFactory tranFactory = TransformerFactory.newInstance(); // Crear serialitzador
//			Transformer aTransformer = tranFactory.newTransformer();
//			aTransformer.setOutputProperty(OutputKeys.ENCODING, "ISO-8859-1"); // Formato al document
//			aTransformer.setOutputProperty("{http://xml.apache.org/xslt}indent-amount", "4");
//			aTransformer.setOutputProperty(OutputKeys.INDENT, "yes");
//			DOMSource source = new DOMSource(doc);
//			try {
//				FileWriter fw = new FileWriter("cançons2.xml"); // Definir el nom del fitxer i guardar
//				StreamResult result = new StreamResult(fw);
//				aTransformer.transform(source, result);
//				fw.close();
//			} catch (IOException e) {
//				e.printStackTrace();
//			}
//		} catch (TransformerException ex) {
//			System.out.println("Error escrivint el documento");
//		} catch (ParserConfigurationException ex) {
//			System.out.println("Error construint el document");
//		}
//	}
}
