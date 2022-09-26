<?php
	header('Content-Type: text/html; charset=UTF-8');

	class listener {
		public function __construct($data) {
			if(method_exists($this, $data["servicio"])) {
				$servicio = $data["servicio"];
				array_key_exists('datos', $data) ? $this->$servicio($data['datos']) : $this->$servicio();
			}
			else echo "listener - Servicio no reconocido: " . $data["servicio"];
		}

		private function convertirAMayusculas($datos) {
			$datos = json_decode($datos);
			echo strtoupper($datos->texto);
		}

		private function convertirAMinusculas($datos) {
			$datos = json_decode($datos);
			echo strtolower($datos->texto);
		}
	}

	if (count($_POST)) new listener($_POST);
	else {
		$handle = fopen('php://input','r');
		$jsonInput = fgets($handle);
		$post = json_decode($jsonInput, true);

		$POST = [
			"servicio" => $post["servicio"],
			"datos" => json_encode($post["datos"]),
		];
		new listener($POST);
	}
?>