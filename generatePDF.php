<?php

require ("./vendor/autoload.php");

// reference the Dompdf namespace
use Dompdf\Dompdf;
use Dompdf\Options;

$options = new Options();
$options->set('defaultFont', 'Roboto');
$dompdf = new Dompdf($options);

// instantiate and use the dompdf class

ob_start();

require ("./assets/php/templatePDF.php");

$dompdf->loadHtml(ob_get_clean());

// (Optional) Setup the paper size and orientation
$dompdf->setPaper('A4', 'portrait');

// Render the HTML as PDF
$dompdf->render();

// Output the generated PDF to Browser
$dompdf->stream("Example", array("Attachment" => 0));

