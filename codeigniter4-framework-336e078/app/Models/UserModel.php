<?php

namespace App\Models;

use CodeIgniter\Model;

class UserModel extends Model
{
    protected $table      = 'users';
    protected $primaryKey = 'id';

    protected $allowedFields = ['username', 'email'];

    protected $validationRules = [
        'username' => 'required|min_length[3]|max_length[50]',
        'email'    => 'required|valid_email|is_unique[users.email]',
    ];

    protected $validationMessages = [
        'email' => [
            'is_unique' => 'This email is already registered',
        ],
    ];

    protected $skipValidation = false;
}