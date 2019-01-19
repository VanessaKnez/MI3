package com.example.boeken;

import android.content.Intent;
import android.support.design.widget.TextInputLayout;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;
import android.util.Patterns;
import java.util.regex.Pattern;

public class MainActivity extends AppCompatActivity {

    private TextInputLayout tekstInptEmailAdres;
    private TextInputLayout tekstInptWachtwoord;

    // tenminste 1 kleine letter, 1 hoofdletter, alle letters en 4 karakters
    private static final Pattern patroonWachtwoord =
            Pattern.compile("^" + "(?=.*[a-z])" + "(?=.*[A-Z])" + "(?=.*[a-zA-Z])" + ".{4,}" + "$");

    private Button btnlogin;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        tekstInptEmailAdres = findViewById(R.id.inptEmailAdres);
        tekstInptWachtwoord = findViewById(R.id.inptWachtwoord);

        //get de knop
        // Button btnlogin = (Button) findViewById(R.id.btnLogIn);
        // Button btnwachtwoordvergeten= (Button) findViewById(R.id.btnWachtwoordVergeten);

        // set de knop
        // btnlogin.setOnClickListener(new View.OnClickListener() {
            //@Override
            // public void onClick(View v) {
            //    Log.i("MyApp", "This is a magic log message!");
            //    Toast.makeText(getApplicationContext(), "It's magic! A", Toast.LENGTH_LONG).show();
            //}
        //});

        //btnwachtwoordvergeten.setOnClickListener(new View.OnClickListener() {
        //    @Override
        //    public void onClick(View v) {
        //        Log.i("MyApp", "This is a magic log message!");
        //        Toast.makeText(getApplicationContext(), "It's magic! B", Toast.LENGTH_LONG).show();
        //    }
        //});
    }

    private boolean valideerEmailAdres() {
        String emailInput = tekstInptEmailAdres.getEditText().getText().toString().trim();

        if (emailInput.isEmpty()) {
            tekstInptEmailAdres.setError("You must enter a valid e-mail address");
            return false;
        } else if (!Patterns.EMAIL_ADDRESS.matcher(emailInput).matches()) {
            tekstInptEmailAdres.setError("You must enter a valid e-mail address");
            return false; }
        else {
            tekstInptEmailAdres.setError(null);
            return true;
        }
    }

    private boolean valideerWachtwoord() {
        String passwordInput = tekstInptWachtwoord.getEditText().getText().toString().trim();

        if (passwordInput.isEmpty()) {
            tekstInptWachtwoord.setError("You must enter a password");
            return false;
        } else if (!patroonWachtwoord.matcher(passwordInput).matches()) {
            tekstInptWachtwoord.setError("You must enter a password that is not too weak");
            return false;
        }
        else {
            tekstInptWachtwoord.setError(null);
            return true;
        }
    }

    public void confirmInput(View v) {
        if (!valideerEmailAdres() | !valideerWachtwoord()) {
            return;
        }

        btnlogin = (Button) findViewById(R.id.btnLogIn);
        btnlogin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // nieuwe pagina gaan
                OpenActivityHomeBoeken();
            }
        });

        String input = "Email: " + tekstInptEmailAdres.getEditText().getText().toString();
        input += "\n";
        input += "Password: " + tekstInptWachtwoord.getEditText().getText().toString();

        Toast.makeText(this, input, Toast.LENGTH_SHORT).show();
    }

    private void OpenActivityHomeBoeken() {
        Intent nieuwIntent = new Intent(this, ActivityHomeBoeken.class);
        startActivity(nieuwIntent);
    }
}
