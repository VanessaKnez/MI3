package com.example.boeken;

import android.support.annotation.NonNull;
import android.support.design.widget.NavigationView;
import android.support.v4.view.GravityCompat;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.ActionBarDrawerToggle;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.MenuItem;

public class ActivityHomeBoeken extends AppCompatActivity implements NavigationView.OnNavigationItemSelectedListener {

    private DrawerLayout mijnDrawer;
    private ActionBarDrawerToggle mijnToggle;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home_boeken);

        NavigationView navigationView = findViewById(R.id.navMenu);
        navigationView.setNavigationItemSelectedListener(this);

        mijnDrawer = (DrawerLayout) findViewById(R.id.mijnDrawer);
        mijnToggle = new ActionBarDrawerToggle(this, mijnDrawer, R.string.open, R.string.close);

        mijnDrawer.addDrawerListener(mijnToggle);;
        mijnToggle.syncState();

        getSupportActionBar().setDisplayHomeAsUpEnabled(true);

        if (savedInstanceState == null) {
            getSupportFragmentManager().beginTransaction().replace(R.id.fragmentContainer, new FragmentHome()).commit();
            navigationView.setCheckedItem(R.id.menuProfiel);
        }
    }

    @Override
    public boolean onNavigationItemSelected(@NonNull MenuItem menuItem) {
        switch (menuItem.getItemId()) {
            case R.id.menuProfiel:
                getSupportFragmentManager().beginTransaction().replace(R.id.fragmentContainer, new FragmentProfiel()).commit();
                break;
            case R.id.menuHomePagina:
                getSupportFragmentManager().beginTransaction().replace(R.id.fragmentContainer, new FragmentHome()).commit();
                break;
            case R.id.menuBoekToevoegen:
                getSupportFragmentManager().beginTransaction().replace(R.id.fragmentContainer, new FragmentBoekToevoegen()).commit();
                break;
            case R.id.menuChat:
                getSupportFragmentManager().beginTransaction().replace(R.id.fragmentContainer, new FragmentChat()).commit();
                break;
        }
        mijnDrawer.closeDrawer(GravityCompat.START);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        if (mijnToggle.onOptionsItemSelected(item)) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }
}
