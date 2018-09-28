//Connectie eindigen
			$conn -> close();
			
			//inlogen cookie
			$cookie_name = "userSignIn";
			$cookie_value = $email;
			setcookie($cookie_name, $cookie_value, time() + (86400 * 7), "/");

            $to = "$email";
                $subject = "Restaurant verification account";

                $message = "
                <html>
                <head>
                <title>Thank you for your registration.</title>
                </head>
                <body>
                <p>Welcome $naam</p>
                <p>You are now registerd on our platform.</p>
                <p>To fully register please click on the link below.</p>
                <a href='http://moortgata.be/GIP/account/verificatie_pagina.php?verificatiecode=$verificatiecode&email=$email'>http://moortgata.be/registreren/account/verificatie_pagina.php</a>
                <p>Yours faithfully</p>
                <p>Dries and Vanessa</p>
                </body>
                </html>
                ";
			
			//Naar hoofdpagina
			header('Location: contact.php');