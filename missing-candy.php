<?php
$last_dex = 383;
$data = file_get_contents("pokemon.json");
$json = json_decode($data, TRUE);

foreach ($json["species"] as $species) {
	for ($i = 1; $i < count($species["stages"]); $i++) {
		$stage = $species["stages"][$i];
		if ($stage["number"] > $last_dex || $species["stages"][$i - 1]["number"] > $last_dex) continue;
		if ($stage["candy"] <= 0) {
			echo $stage["name"] ."\n";
		}
	}
}
