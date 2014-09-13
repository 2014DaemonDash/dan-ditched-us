<!--
To change this template use Tools | Templates.
-->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <?php include ('head.php'); ?>
    <title>Toaster</title>
</head>
<body>
	<div id="wrapper">
		
		<div id="content" class="home-background" align="center">
            <!-- LOGIN FORM -->
            <div class="container">
                <div class="row vertical-offset-100">
                    <div class="col-md-4 col-md-offset-4">
                        <div class="login-panel">
                            <div class="panel-heading login-top">
                                <h3 class="panel-title">Please sign in</h3>
                            </div>
                            <div>
                                <form accept-charset="UTF-8" role="form">
                                    <fieldset>
                                        <div class="form-group">
                                            <input class="form-control" placeholder="E-mail" name="email" type="text">
                                        </div>
                                        <div class="form-group">
                                            <input class="form-control" placeholder="Password" name="password" type="password" value="">
                                        </div>
                                        <div class="checkbox login-remember">
                                            <label>
                                                <input name="remember" type="checkbox" value="Remember Me"> Remember Me
                                            </label>
                                        </div>
                                        <input class="btn btn-lg btn-success btn-block" type="submit" value="Login">
                                        <a href="register" class="btn btn-lg btn-success btn-block">Sign Up</a>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		<?php include ('footer.php'); ?>
	</div>
</body>
</html>