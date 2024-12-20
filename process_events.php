<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $selectedEvents = $_POST["events"];
  $commaSeparatedEvents = implode(" , ", $selectedEvents);

  // Use $commaSeparatedEvents to filter orders
  echo "Selected Event IDs: " . $commaSeparatedEvents;
}
?>