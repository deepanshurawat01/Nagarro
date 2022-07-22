<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1 class="text-center">Form Validation</h1>
    <div class="container">
       <div class="col-lg m-auto d-block">
        <form action="#">
            <div class="form-group">
                <label for="user">Username:</label>
                <input type="text" name="username" id="username" class="form-control" autocomplete="off">
                <h5 id="usernamevalidation"></h5>
            </div>
            <div class="form-group">
                <label for="email">Confirm Email:</label>
                <input type="text" name="email" id="email" class="form-control" autocomplete="off">
                <h5 id="emailvalidation"></h5>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="text" name="pass" id="password" class="form-control" autocomplete="off">
                <h5 id="passwordvalidation"></h5>
            </div>
            <div class="form-group">
                <label for="conpassword">Confirm Password:</label>
                <input type="text" name="pass" id="confirmpassword" class="form-control" autocomplete="off">
                <h5 id="confirmpasswordvalidation"></h5>
            </div>
            <input type="submit" value="submit" id="submitvalidation" class="btn btn-primary">
        </form>
       </div>

    </div>
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    <script src="script.js"></script>
</body>
</html>

