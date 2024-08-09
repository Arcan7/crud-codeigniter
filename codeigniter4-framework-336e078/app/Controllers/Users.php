<?php

namespace App\Controllers;

use App\Models\UserModel;
use CodeIgniter\API\ResponseTrait;
use CodeIgniter\RESTful\ResourceController;

class Users extends ResourceController
{

    use ResponseTrait;
    
    protected $modelName = 'App\Models\UserModel';
    protected $format    = 'json';

     public function index()
    {
        $users = $this->model->findAll();
        return $this->respond($users);
    }

    public function show($id = null)
    {
        $user = $this->model->find($id);

        if (!$user) {
            return $this->failNotFound('User not found');
        }

        return $this->respond($user);
    }


    public function create()
    {
        $data = $this->request->getJSON(true);

        if (!$this->validate([
            'username' => 'required|min_length[3]|max_length[50]',
            'email'    => 'required|valid_email|is_unique[users.email]',
        ])) {
            return $this->failValidationErrors($this->validator->getErrors());
        }

        if ($this->model->insert($data) === false) {
            return $this->failServerError('Failed to create user');
        }

        return $this->respondCreated($data, 'User created successfully');
    }


    public function update($id = null)
    {
        if ($id === null) {
            return $this->failValidationErrors("User ID is required");
        }
        $user = $this->model->find($id);
        $data = $this->request->getJSON(true);
        

        if (!$this->validate([
            'username' => 'required|min_length[3]|max_length[50]',
            'email'    => 'required|valid_email',
        ])){
            return $this->failValidationErrors($this->validator->getErrors());
        }

        if ($this->model->update($id,$data) === false) {
            log_message('error', 'Failed to update user with ID ' . $id .json_encode($data));
            return $this->failServerError('Failed to update user '.$id);
        }

        return $this->respond($data, 'User updated successfully');


    }

    public function delete($id = null)
    {
        $this->model->delete($id);
        return $this->respondDeleted(['id' => $id]);
    }
}