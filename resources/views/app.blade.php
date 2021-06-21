<?php 
    $react = ssr('js/server.js')
        ->context('url', \Request::getRequestUri())
        ->render();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    {!! $react['meta'] !!}
    {!! $react['title'] !!}
</head>
<body>
    <div id="content">
        {!! $react['html'] !!}
    </div>
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>