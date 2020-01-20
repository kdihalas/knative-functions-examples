<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;

use Ramsey\Uuid\Uuid;
use Ramsey\Uuid\Exception\UnsatisfiedDependencyException;

require __DIR__ . '/vendor/autoload.php';

$app = AppFactory::create();

$app->get('/', function (Request $request, Response $response, $args) {
	$uuid1 = Uuid::uuid1();
	$uuid4 = Uuid::uuid4();

	$data = array(
		'uuidv1' => $uuid1->toString(),
		'uuidv4' => $uuid4->toString()
	);

	$payload = json_encode($data);

	$response->getBody()->write($payload);
	return $response
	          ->withHeader('Content-Type', 'application/json');
});

$app->run();
