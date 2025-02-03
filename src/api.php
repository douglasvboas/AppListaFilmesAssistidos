<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$host = 'localhost';
$db   = 'filmes';
$user = 'root';
$pass = '';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
    throw new \PDOException($e->getMessage(), (int)$e->getCode());
}

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        $stmt = $pdo->query('SELECT * FROM filmes');
        $filmes = $stmt->fetchAll();
        echo json_encode($filmes);
        break;
    case 'POST':
        $data = json_decode(file_get_contents("php://input"), true);
        $stmt = $pdo->prepare('INSERT INTO filmes (nome, descricao, genero, classificacao, assistido) VALUES (?, ?, ?, ?, ?)');
        $stmt->execute([$data['nome'], $data['descricao'], $data['genero'], $data['classificacao'], $data['assistido']]);
        echo json_encode(['status' => 'success']);
        break;
}