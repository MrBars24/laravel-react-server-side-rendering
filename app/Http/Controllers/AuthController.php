<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        try {
            $this->validator();
            $data = $request->all();

            if( !Auth::attempt( $data )) {
                return response()->json(['error' => 'Invalid Access Credentials'], 403);
            }

            // $accessToken = Auth::user()->createToken('authToken')->accessToken;

            $user = User::find(Auth::user()->id);

            return response()->json([
                'user' => $user,
                // 'access_token' => $accessToken
            ], 200);

        } catch (\Exception $ex) {
            $message = $ex->getMessage();
            if (isset($ex->validator)) {
                $message = $ex->validator;
            }
            return response()->json(['error' => $message, 'e' => $ex], 403);
        }
    }

    private function validator()
    {
        $validator = Validator::make(request()->all(), [
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        if ($validator->fails()) {
            throw new ValidationException($validator->errors()->first());
        }
        return $validator;
    }
}
