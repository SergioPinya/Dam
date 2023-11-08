package mvc;

public class Modelo {
 
	private String missatge1, missatge2;
	Modelo(){
		this.missatge1="missatge1";
		this.missatge2="missatge2";
	}
	//Para generar automaticamente los getters y setters es darle a click derecho ir a la de sources de abajo y pulsar 
	//getter & setter y seleccionar los getter y setter que necesitamos
	public String getMissatge1() {
		return missatge1;
	}
	public String getMissatge2() {
		return missatge2;
	}
	
}
