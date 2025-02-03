<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE"); 
header("Access-Control-Allow-Headers: Content-Type, Authorization"); 
header("Content-Type: application/json; charset=UTF-8");

// acesso externo 
$host    = 'localhost';
$db      = 'filmes';
$user    = 'root';
$pass    = '';
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
    case 'POST':
        $data = json_decode(file_get_contents("php://input"), true);
        
        if (isset($data['email']) && isset($data['senha'])) {
            // **Login**
            if (isset($data['action']) && $data['action'] == 'login') {
                $stmt = $pdo->prepare('SELECT * FROM usuarios WHERE email = ?');
                $stmt->execute([$data['email']]);
                $user = $stmt->fetch();
                
                if ($user && password_verify($data['senha'], $user['senha'])) {
                    echo json_encode(['status' => 'success', 'usuario_id' => $user['id']]);
                } else {
                    echo json_encode(['status' => 'error', 'message' => 'Email ou senha incorretos']);
                }
            }
            // **Cadastro de Usuário**
            elseif (isset($data['action']) && $data['action'] == 'register') {
                if (isset($data['nome']) && isset($data['email']) && isset($data['senha'])) {
                    // Criptografa a senha
                    $senha_hash = password_hash($data['senha'], PASSWORD_BCRYPT);

                    // Verifica se o e-mail já está registrado
                    $stmt = $pdo->prepare('SELECT * FROM usuarios WHERE email = ?');
                    $stmt->execute([$data['email']]);
                    $existingUser = $stmt->fetch();

                    if ($existingUser) {
                        echo json_encode(['status' => 'error', 'message' => 'Email já cadastrado']);
                    } else {
                        // Insere o novo usuário
                        $stmt = $pdo->prepare('INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)');
                        $stmt->execute([$data['nome'], $data['email'], $senha_hash]);
                        echo json_encode(['status' => 'success', 'message' => 'Usuário registrado com sucesso']);
                    }
                } else {
                    echo json_encode(['status' => 'error', 'message' => 'Nome, email e senha são necessários']);
                }
            }
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Email e senha são necessários']);
        }
        break;
}
